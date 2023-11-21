import { DocumentNode, gql } from "@apollo/client";

export const songsList =(pageNo:Number,
    pageSize:Number, titleString:string)=>{

   return gql`
    # Write your query or mutation here
    query songs{
      songLists(
        pagination: { page: ${pageNo}, pageSize: ${pageSize} }
        filters: { title: { containsi:"${titleString}" } }
        sort:["title:asc"]
      ) {
        data {
          attributes {
            title
            slug
            lyrics
            song_category{
            data{
                attributes{
                        title
                        slug
                    }
                }
            }
          }
        }
        meta {
          pagination {
            page
            total
            pageSize
            pageCount
          }
        }
      }
    }
    `
};

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

