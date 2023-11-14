import { DocumentNode, gql } from "@apollo/client";

export const songsList:DocumentNode = gql`
    query{
        songLists{
            data{
                attributes{
                    title
                    lyrics
                }
            }
        }
    }
`;
