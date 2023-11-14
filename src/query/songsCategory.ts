import { DocumentNode, gql } from "@apollo/client";

export const songsCategory:DocumentNode = gql`
  query songsCategory {
    songCategories {
      data {
        id
        attributes {
          title
          slug
        }
      }
    }
  }
`;
