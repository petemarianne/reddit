/*import { ApolloClient, InMemoryCache } from '@apollo/client';

export const client = new ApolloClient({
    uri: 'https://api.vrmarketing.guru/',
    cache: new InMemoryCache()
});*/

import { ApolloClient, createHttpLink, InMemoryCache } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';

const httpLink = createHttpLink({
    uri: 'https://api.vrmarketing.guru/',
});

const authLink = setContext((_, { headers }) => {
    let token = '';
    if (!(typeof window === 'undefined')) token = localStorage.getItem('token') as string;
    return {
        headers: {
            ...headers,
            authorization: token ? `Bearer ${token}` : '',
        }
    }
});

export const client = new ApolloClient({
    link: authLink.concat(httpLink),
    cache: new InMemoryCache()
});
