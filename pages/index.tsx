import type { NextPage } from 'next';
import styles from '../styles/index.module.scss';
import { Post } from '../components/Post';
import React, { useEffect, useState } from 'react';
import { useQuery, useSubscription } from '@apollo/client';
import { GET_POSTS } from '../apollo/query/posts';
import { client } from '../apollo/client';
import { useAuth } from '../hooks/useAuth';
import { Button, InputBase, Modal } from '@mui/material';
import { useDelay } from '../hooks/useDelay';
import modal from '../styles/modal.module.scss';
import { LOGIN } from '../apollo/mutation/login';
import { REGISTER } from '../apollo/mutation/register';
import { NEW_POST } from '../apollo/mutation/newPost';
import { NEW_LINK } from '../apollo/subscription/newLink';

enum ModalContent {
    NewPost,
    SignUp,
    SignIn
}

interface Values {
    signUp: {
       name: string,
       email: string,
       password: string,
    },
    signIn: {
       email: string,
       password: string,
    },
    newPost: {
        url: string,
        description: string
    }
}

const initialValues =  {
    signUp: {
        name: '',
        email: '',
        password: '',
    },
    signIn: {
        email: '',
        password: '',
    },
    newPost: {
        url: '',
        description: ''
    }
}

const MainPage: NextPage<{data: any}> = ({data}): JSX.Element => {
    const [values, setValues] = useState<Values>(initialValues);
    const [modalContent, setModalContent] = useState<ModalContent>(ModalContent.SignIn);
    const [open, setOpen] = useState<boolean>(false);
    const [posts, setPosts] = useState<[any]>(data.feed.links);
    const [search, setSearch] = useState<string>('');

    const delayed = useDelay(search);

    const {token, login, logout} = useAuth();

    const {data: newData, loading, error, refetch} = useQuery(GET_POSTS, {variables: {description: delayed}});

    const {data: newLink} = useSubscription(NEW_LINK);

    const handleSearch = (event: React.ChangeEvent<HTMLInputElement>): void => {
        setSearch(event.target.value);
    };

    useEffect(() => {
        if (!loading && !error) setPosts(newData.feed.links);
    }, [newData]);

    useEffect(() => {
        if (newLink) console.log(newLink)
    }, [newLink])

    const getModalContent = (): JSX.Element => {
        switch (modalContent) {
            case ModalContent.NewPost:
                return (
                    <form onSubmit={(event) => {
                        event.preventDefault();
                        if (values.newPost.url && values.newPost.description) {
                            client.mutate({
                                mutation: NEW_POST,
                                variables: {
                                    url: values.newPost.url,
                                    description: values.newPost.description
                                }
                            }).then(() => {
                                setOpen(false);
                                refetch();
                            }).catch(() => setOpen(false));
                        }
                    }}>
                        <div className={modal.input}>
                            <InputBase placeholder='Link' value={values.newPost.url} onChange={event => setValues(prevState => ({...prevState, newPost: {...prevState.newPost, url: event.target.value}}))} fullWidth/>
                        </div>
                        <div className={modal.input}>
                            <InputBase placeholder='Description' value={values.newPost.description} onChange={event => setValues(prevState => ({...prevState, newPost: {...prevState.newPost, description: event.target.value}}))} fullWidth/>
                        </div>
                        <Button type='submit' color='secondary' variant='contained'>Post</Button>
                    </form>
                );
            case ModalContent.SignIn:
                return (
                    <form onSubmit={(event) => {
                        event.preventDefault();
                        if (values.signIn.email && values.signIn.password) {
                            client.mutate({
                                mutation: LOGIN,
                                variables: {
                                    email: values.signIn.email,
                                    password: values.signIn.password
                                }
                            }).then(result => {
                                login(result.data.login.token);
                                setOpen(false);
                            }).catch(() => setOpen(false));
                        }
                    }}>
                        <div className={modal.input}>
                            <InputBase placeholder='Email' value={values.signIn.email} onChange={event => setValues(prevState => ({...prevState, signIn: {...prevState.signIn, email: event.target.value}}))} fullWidth type='email'/>
                        </div>
                        <div className={modal.input}>
                            <InputBase placeholder='Password' value={values.signIn.password} onChange={event => setValues(prevState => ({...prevState, signIn: {...prevState.signIn, password: event.target.value}}))} fullWidth type='password'/>
                        </div>
                        <Button type='submit' color='secondary' variant='contained'>Sign In</Button>
                    </form>
                );
            case ModalContent.SignUp:
                return (
                    <form onSubmit={(event) => {
                        event.preventDefault();
                        if (values.signUp.email && values.signUp.password && values.signUp.name) {
                            client.mutate({
                                mutation: REGISTER,
                                variables: {
                                    name: values.signUp.name,
                                    email: values.signUp.email,
                                    password: values.signUp.password
                                }
                            }).then(result => {
                                login(result.data.signup.token);
                                setOpen(false);
                            }).catch(() => setOpen(false));
                        }
                    }}>
                        <div className={modal.input}>
                            <InputBase placeholder='Name' value={values.signUp.name} onChange={event => setValues(prevState => ({...prevState, signUp: {...prevState.signUp, name: event.target.value}}))} fullWidth/>
                        </div>
                        <div className={modal.input}>
                            <InputBase placeholder='Email' value={values.signUp.email} onChange={event => setValues(prevState => ({...prevState, signUp: {...prevState.signUp, email: event.target.value}}))} fullWidth type='email'/>
                        </div>
                        <div className={modal.input}>
                            <InputBase placeholder='Password' value={values.signUp.password} onChange={event => setValues(prevState => ({...prevState, signUp: {...prevState.signUp, password: event.target.value}}))} fullWidth type='password'/>
                        </div>
                        <Button type='submit' color='secondary' variant='contained'>Sign Up</Button>
                    </form>
                );
        }
    }

    return (
        <>
            <div className={styles.header}>
                <div className={styles.search}>
                    <InputBase placeholder='Search for a link…' value={search} onChange={handleSearch} fullWidth/>
                </div>
                <div className={styles['buttons-wrapper']}>
                    <Button variant='contained' color='primary' className={styles['button-left']} onClick={() => {setModalContent(token ? ModalContent.NewPost : ModalContent.SignIn); setOpen(true);}}>{token ? '+' : 'Sign In'}</Button>
                    <Button variant='outlined' color='primary' className={styles['button-right']} onClick={token ? () => logout() : () => {setModalContent(ModalContent.SignUp); setOpen(true);}}>{token ? 'Sign Out' : 'Sign Up'}</Button>
                </div>
            </div>
            <div className={styles.main}>
                {posts.map(post => <Post key={post.id} data={post} refetch={refetch}/>)}
            </div>
            <Modal
                open={open}
                onClose={() => setOpen(false)}
                aria-labelledby='simple-modal-title'
                aria-describedby='simple-modal-description'
                className={modal.modal}>
                <div className={modal['modal-content']}>
                    {getModalContent()}
                </div>
            </Modal>
        </>
    );
}

export async function getServerSideProps() {
    const { data } = await client.query({
        query: GET_POSTS
    });

    return { props: { data } }
}

export default MainPage;
