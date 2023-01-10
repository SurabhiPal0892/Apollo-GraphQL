import { Form, Button } from "react-bootstrap";
import { useState } from "react";
import { useMutation, useQuery } from "@apollo/client";
import { GET_CLIENTS } from "../../queries/clientQueries";
import { UPDATE_PROJECT } from "../../mutations/projectMutation";
import { GET_PROJECT_BY_ID } from "../../queries/projectQueries";
import { FaEdit } from "react-icons/fa";
import { StatusEnum } from "../../constants/ProjectStatusEnum";

export function EditProject({ project }) {
  const { loading, error, data } = useQuery(GET_CLIENTS);
  const [showUpdateForm, setShowUpdateForm] = useState(false);
  const [form, setForm] = useState({
    id: project.id,
    name: project.name,
    description: project.description,
    status: StatusEnum[project.status],
    clientId: project.clientId,
  });

  const [updateProject] = useMutation(UPDATE_PROJECT, {
    variables: {
      id: form.id,
      name: form.name,
      description: form.description,
      status: form.status,
      clientId: form.clientId,
    },
    onCompleted: () => setShowUpdateForm(!showUpdateForm),

    refetchQueries: [
      { query: GET_PROJECT_BY_ID, variables: { id: project.id } },
    ],
  });

  const setField = (field, value) => {
    setForm({
      ...form,
      [field]: value,
    });
  };
  console.log(form);
  const handleSubmit = (event) => {
    event.preventDefault();
    updateProject(
      form.id,
      form.name,
      form.description,
      form.status,
      form.clientId
    );
  };

  const toggleUpdateForm = () => {
    setShowUpdateForm(!showUpdateForm);
  };
  return (
    <>
      <Button
        variant="primary"
        type="submit"
        className="btn-mg"
        onClick={toggleUpdateForm}
      >
        <FaEdit /> Project
      </Button>
      <Form
        onSubmit={handleSubmit}
        className={showUpdateForm ? "update__form__show" : "update__form__hide"}
      >
        <h5>Update Project Details</h5>
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
          <Form.Control
            as="select"
            onChange={(e) => {
              console.log(e);
              setField("status", e.target.value);
            }}
          >
            <option value="new">Not Started</option>
            <option value="completed">Completed</option>
            <option value="progress">In Progress</option>
          </Form.Control>
        </Form.Group>

        <Form.Group controlId="formBasicClient">
          <Form.Label>Client</Form.Label>
          <Form.Control
            as="select"
            value={project.clientId}
            onChange={(e) => setField("clientId", e.target.value)}
          >
            {data?.clients.map((client) => {
              return (
                <option value={client.id} key={client.id}>
                  {client.clientName}
                </option>
              );
            })}
          </Form.Control>
        </Form.Group>
        <Button variant="primary" type="submit" className="btn-mg">
          Update
        </Button>
      </Form>
    </>
  );
}
