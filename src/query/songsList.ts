import { DocumentNode, gql } from "@apollo/client";

export const songsList:DocumentNode = gql`
    query{
        songLists{
            data{
                attributes{
                    title
                    lyrics
                    slug
                }
            }
        }
    }
`;

// # Write your query or mutation here
// query {
//   songLists(
//     pagination: { page: 4, pageSize: 2 }
//     filters: { title: { containsi: "" } }
//   ) {
//     data {
//       attributes {
//         title
//       }
//     }
//     meta {
//       pagination {
//         page
//         total
//         pageSize
//         pageCount
//       }
//     }
//   }
// }

