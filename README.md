# **The GraphQL query structure for comments:**

```
query {
    feed {
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
            comments {
                id
                text
                user {
                    id
                    name
                }
            }
        }
    }
}
```