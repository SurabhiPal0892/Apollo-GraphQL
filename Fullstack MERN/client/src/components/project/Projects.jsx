import { useQuery } from "@apollo/client";
import { GET_PROJECTS } from "../../queries/projectQueries";
import { SpinnerLoader } from "../common/Spinner";
import { ProjectCard } from "./ProjectCard";

export function Projects(){
    const {loading,error,data}=useQuery(GET_PROJECTS);
    if(loading) return <SpinnerLoader/>
    if(error) return <>Something went wrong !!</>

    return(
        <div className="project__card__container">
        {
            !loading && !error && <>
            {
            data?.projects.map(project=>{
                    return <ProjectCard key={project.id} project={project}/>
                })
            }
            </>
               
        }
        </div>
    )
}