import {gql} from '@apollo/client';

export const ADD_CLIENT=gql`
mutation addClient($clientName:String!,$email:String!,$phone:String!){
    addClient(clientName:$clientName,email:$email,phone:$phone){
        id,
        clientName,
        phone,
        email
    }
}
`
export const DELETE_CLIENT=gql`
mutation deleteClient($id:ID!){
    deleteClient(id:$id){
        id,
        clientName,
        phone,
        email
    }
}
`


