import { useState } from "react";
import { FaList } from "react-icons/fa";
import { useMutation, useQuery } from "@apollo/client";
import { Modal, Button, Form } from "react-bootstrap";
import { GET_PROJECTS } from "../queries/projectQueries";
import { ADD_PROJECT } from "../mutations/projectMutation";
import { GET_CLIENTS } from "../queries/clientQueries";

export function AddProjectModal() {
  const [show, setShow] = useState(false);

  const [form, setForm] = useState({
    name: "",
    description: "",
    status: "new",
    clientId: "",
  });

  const setField = (field, value) => {
    setForm({
      ...form,
      [field]: value,
    });
  };

  const [addProject] = useMutation(ADD_PROJECT, {
    variables: {
      name: form.name,
      description: form.description,
      status: form.status,
      clientId: form.clientId,
    },
    update(cache, { data: { addProject } }) {
      const { projects } = cache.readQuery({ query: GET_PROJECTS });
      cache.writeQuery({
        query: GET_PROJECTS,
        data: { projects: [...projects, addProject] },
      });
    },
  });

  const { loading, error, data } = useQuery(GET_CLIENTS);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(form);
    addProject(form.name, form.description, form.status, form.clientId);
    handleClose();
  };
  return (
    <>
      <Button variant="primary" onClick={handleShow}  className="btn-mg">
        <FaList />
        Add Project
      </Button>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Add Project</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="formBasicClientName">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Name"
                onChange={(e) => setField("name", e.target.value)}
                value={form.name}
              />
            </Form.Group>

            <Form.Group controlId="formBasicDescription">
              <Form.Label>Description</Form.Label>
              <Form.Control
                type="textarea"
                placeholder="Enter Description"
                onChange={(e) => setField("description", e.target.value)}
                value={form.description}
              />
            </Form.Group>

            <Form.Group controlId="formBasicStatus">
              <Form.Label>Status</Form.Label>
              <Form.Control as="select">
                <option value="new" defaultChecked>
                  Not Started
                </option>
                <option value="completed">Completed</option>
                <option value="progress">In Progress</option>
              </Form.Control>
            </Form.Group>

            <Form.Group controlId="formBasicClient">
              <Form.Label>Client</Form.Label>
              <Form.Control as="select" onChange={(e) => setField("clientId", e.target.value)}>
                <option defaultChecked>Select</option>
                {data?.clients.map((client) => {
                  return (
                    <option
                      value={client.id}
                      key={client.id}
                      
                    >
                      {client.clientName}
                    </option>
                  );
                })}
              </Form.Control>
            </Form.Group>
            <br></br>
            <Modal.Footer>
              <Button variant="primary" type="submit">
                Submit
              </Button>
            </Modal.Footer>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  );
}
