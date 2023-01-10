import { FaTrash } from "react-icons/fa";
import { Button} from "react-bootstrap";
import { useMutation } from "@apollo/client";
import { DELETE_PROJECT } from "../../mutations/projectMutation";
import { GET_PROJECTS } from "../../queries/projectQueries";
import { useNavigate } from "react-router-dom";

export function DeleteProjectButton({projectId}){
    const navigate=useNavigate()
    const [deleteProject]=useMutation(DELETE_PROJECT,{
        variables:{id:projectId},
        onCompleted:()=>navigate("/"),
        refetchQueries:[{query:GET_PROJECTS}]
    })


    return(
        <Button onClick={deleteProject} className="btn-mg btn-align" ><FaTrash/>Delete Project</Button>
    )
}