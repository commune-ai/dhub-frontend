import { gql } from "@apollo/client";

export const GET_SQUADS = gql`
  query getSquads {
    squads {
      name
      description
      website
    }
  }
`;
