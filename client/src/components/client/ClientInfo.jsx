import { ListGroup } from "react-bootstrap";
import { FaPhone, FaEnvelope, FaUser } from "react-icons/fa";
export function ClientInfo({ client }) {
  return (
    <>
      <h6>Client Information</h6>
      <ListGroup>
        <ListGroup.Item>
          <FaUser />
          &nbsp;
          {client.clientName}
        </ListGroup.Item>
        <ListGroup.Item>
          <FaEnvelope />
          &nbsp;
          {client.email}
        </ListGroup.Item>
        <ListGroup.Item>
          <FaPhone />
          &nbsp;
          {client.phone}
        </ListGroup.Item>
      </ListGroup>
    </>
  );
}
