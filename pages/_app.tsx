import '../styles/main.scss';
import React from 'react';
import { ApolloProvider } from '@apollo/client';
import { client } from '../apollo/client';

const MyApp: React.FC<{Component: any, pageProps: any}> = ({ Component, pageProps }): JSX.Element => {
    return (
        <ApolloProvider client={client}>
            <Component {...pageProps} />
        </ApolloProvider>
    );
}

export default MyApp;
