import React, { useState } from 'react';
import styles from '../styles/post.module.scss';
import { IconButton, Modal } from '@mui/material';
import ForwardIcon from '@mui/icons-material/Forward';
import CommentIcon from '@mui/icons-material/Comment';
import modal from '../styles/modal.module.scss';
import { client } from '../apollo/client';
import { UPVOTE } from '../apollo/mutation/upvote';
import { mockComments } from '../mock/data';

enum ModalContent {
    Votes,
    Comments
}

export const Post: React.FC<{data: any, refetch: any}> = ({data, refetch}): JSX.Element => {
    const [open, setOpen] = useState<boolean>(false);
    const [modalContent, setModalContent] = useState<ModalContent>(ModalContent.Votes);

    return (
        <>
            <div className={styles.container}>
                <a href={data.url} className={styles.description}>{data.description}</a>
                <div className={styles['votes-wrapper']}>
                    <IconButton className={styles['icon-wrapper']} aria-label='lose' size='large' onClick={() =>
                        client.mutate({
                            mutation: UPVOTE,
                            variables: {
                                id: data.id
                            }
                        }).then(() => refetch()).catch(() => {})
                    }><ForwardIcon stroke='black' fontSize='large'/></IconButton>
                    <div className={data.votes.length ? styles.votes : styles['no-votes']} onClick={data.votes.length ? () => {setModalContent(ModalContent.Votes); setOpen(true);} : undefined}>
                        {data.votes.length ?
                            <>
                                {data.votes.map((vote: any, index: number) => {
                                    if (index < 3) return <div className={styles.user}>{vote.user.name.charAt(0)}</div>;
                                    else return null;
                                })}
                                {data.votes.length > 3 ? <div className={styles.text}>{`and ${data.votes.length - 3} more...`}</div> : null}
                            </>
                            : 'no upvotes'}
                    </div>
                </div>
                <div className={styles['comment-section']} onClick={mockComments.length ? () => {setModalContent(ModalContent.Comments); setOpen(true);} : undefined}>
                    <CommentIcon className={styles['comment-icon']}/>
                    <div>{`${mockComments.length} comment${mockComments.length === 1 ? '' : 's'}`}</div>
                </div>
                <div className={styles.author}>posted by {data.postedBy.name}</div>
            </div>
            <Modal
                open={open}
                onClose={() => setOpen(false)}
                aria-labelledby='simple-modal-title'
                aria-describedby='simple-modal-description'
                className={modal.modal}>
                <div className={modal['modal-content']}>
                    {modalContent === ModalContent.Votes ?
                        <>
                            {`Users who upvoted "${data.description}"`}
                            {data.votes.map((vote: any, index: number) => <div className={modal.name} key={index}>{vote.user.name}</div>)}
                        </>
                            :
                        <>
                            {`Comments on "${data.description}"`}
                            {mockComments.map((comment: any, index: number) => <div className={modal.comment} key={index}><div className={modal['comment-name']}>{comment.user.name}</div><div className={modal['comment-text']}>{comment.comment}</div></div>)}
                        </>
                    }
                </div>
            </Modal>
        </>
    );
}