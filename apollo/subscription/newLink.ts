import { gql } from '@apollo/client';

export const NEW_LINK = gql`
    subscription {
      newLink {
        id
        description
        url
        postedBy {
          id
          name
        }
      }
    }
`
