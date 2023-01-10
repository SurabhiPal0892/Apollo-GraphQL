import { Container, Row, Col } from "react-bootstrap";
import { ClientsTable } from "../components/client/ClientsTable";
import { AddClientModal } from "../modals/addClientModal";
import { AddProjectModal } from "../modals/addProjectModal";
import { Projects } from "../components/project/Projects";

export function Home() {
  return (
    <Container fluid>
      <Row>
        <Col>
          <AddClientModal />
          &nbsp;
          <AddProjectModal />
        </Col>
      </Row>

      <Row>
        <Col>
          <Projects />
        </Col>
      </Row>
      <Row>
      <br></br>
      </Row>
      <Row>
        <Col>
          <ClientsTable />
        </Col>
      </Row>
    </Container>
  );
}
