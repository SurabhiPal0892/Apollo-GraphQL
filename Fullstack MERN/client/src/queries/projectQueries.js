import { gql } from "@apollo/client";

export const GET_PROJECTS = gql`
  query getProjects {
    projects {
      id
      name
      clientId
      description
      status
    }
  }
`;
export const GET_PROJECT_BY_ID = gql`
  query getProject($id: ID!) {
    project(id:$id) {
      id
      name
      description
      status
      clientId
      client{
        id
        clientName
        phone
        email
      }
    }
  }
`;
