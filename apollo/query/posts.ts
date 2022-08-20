import { gql } from '@apollo/client';

export const GET_POSTS = gql`
    query getPosts($description: String){
      feed(filter: $description, orderBy: { createdAt: desc }) {
        count
        links {
          id
          description
          url
          postedBy {
            id
            name
          }
          votes {
            id
            user {
              id
              name
            }
          }
        }
      }
    }
`
