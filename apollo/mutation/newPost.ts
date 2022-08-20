import { gql } from '@apollo/client';

export const NEW_POST = gql`
  mutation newPost($url: String!, $description: String!) {
    post(url: $url, description: $description) {
        id
    }
  }
`
