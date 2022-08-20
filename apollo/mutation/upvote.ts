import { gql } from '@apollo/client';

export const UPVOTE = gql`
    mutation upvote($id: ID!) {
      vote(linkId: $id) {
        id
      }
    }
`
