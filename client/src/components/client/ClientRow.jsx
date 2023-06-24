import {Table,Button} from "react-bootstrap";
import {FaTrash} from 'react-icons/fa';
import { useMutation } from "@apollo/client";
import { DELETE_CLIENT } from "../../mutations/clientMutations";
import { GET_CLIENTS } from "../../queries/clientQueries";
import { GET_PROJECTS } from "../../queries/projectQueries";

export function ClientRow({client}){
    const [deleteClient]=useMutation(DELETE_CLIENT,{
        variables:{id:client.id},
        refetchQueries:[{query:GET_CLIENTS},{query:GET_PROJECTS}]
    })

    return (<tr>
        <td>{client.clientName}</td>
        <td>{client.email}</td>
        <td>{client.phone}</td>
        <td><Button variant="danger" onClick={deleteClient}><FaTrash/></Button></td>
    </tr>)
}