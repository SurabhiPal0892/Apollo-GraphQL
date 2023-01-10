import { Card } from "react-bootstrap";
import {Link} from "react-router-dom";
export function ProjectCard({ project }) {
  return (
    <Card style={{ width: "15rem", margin:"10px" }}>
      <Card.Body>
        <Card.Title>{project.name}</Card.Title>
        <div>
            <p>Status: {project.status}</p>
        </div>
        <Link to={`/project/${project.id}`}>View</Link>
      </Card.Body>
    </Card>
  );
}
