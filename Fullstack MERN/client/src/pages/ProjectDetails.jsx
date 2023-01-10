import { useQuery } from "@apollo/client";
import { GET_PROJECT_BY_ID } from "../queries/projectQueries";
import { useParams, Link } from "react-router-dom";
import { SpinnerLoader } from "../components/common/Spinner";
import { Card } from "react-bootstrap";
import { ClientInfo } from "../components/client/ClientInfo";
import { DeleteProjectButton } from "../components/project/DeleteProjectButton";
import { EditProject } from "../components/project/EditProject";

export function ProjectDetails() {
  const { id } = useParams();
  const { loading, error, data } = useQuery(GET_PROJECT_BY_ID, {
    variables: { id },
  });
  if (loading) return <SpinnerLoader />;
  if (error) return <p>Something went wrong</p>;
  return (
    <Card style={{ 'max-width': "50rem",width:"auto", margin: "auto" }}>
      <Card.Body>
        <Link to="/">Back</Link>
        <h2>{data.project.name}</h2>
        <p>{data.project.description}</p>
        <h5>Status</h5>
        <p>{data.project.status}</p>
        <ClientInfo client={data.project.client} />
        <DeleteProjectButton projectId={data.project.id}/>
        <EditProject project={data.project} />
      </Card.Body>
    </Card>
  );
}
