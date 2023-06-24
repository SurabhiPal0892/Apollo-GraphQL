import { useState } from "react";
import { FaUser } from "react-icons/fa";
import { useMutation } from "@apollo/client";
import { Modal, Button, Form } from "react-bootstrap";
import { GET_CLIENTS } from "../queries/clientQueries";
import { ADD_CLIENT  } from "../mutations/clientMutations";
export function AddClientModal() {
  const [show, setShow] = useState(false);
  
  const [form,setForm]=useState({
    clientName:'',
    email:'',
    phone:''
  })  

  const setField=(field,value)=>{
    setForm({
        ...form,
        [field]:value
  })
  }


  const [addClient]=useMutation(ADD_CLIENT,{
    variables:{clientName:form.clientName,phone:form.phone,email:form.email},
    update(cache,{data:{addClient}}){
        const {clients}=cache.readQuery({query:GET_CLIENTS});
        cache.writeQuery({
            query:GET_CLIENTS,
            data:{clients:[...clients,addClient]}
        })
    }
  })

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
    const handleSubmit=(event)=>{
        event.preventDefault();
        addClient(form.clientName,form.email,form.phone)
        handleClose()
    }
  return (
    <>
      <Button variant="primary" onClick={handleShow} className="btn-mg">
      <FaUser />  Add Client 
      </Button>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Add Client</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmit}> 
            <Form.Group controlId="formBasicClientName">
              <Form.Label>Name</Form.Label>
              <Form.Control type="text" placeholder="Enter Name" onChange={(e)=>setField('clientName',e.target.value)}
              value={form.clientName}/>
            </Form.Group>

            <Form.Group controlId="formBasicEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" placeholder="Enter Email" onChange={(e)=>setField('email',e.target.value)}
              value={form.email}/>
            </Form.Group>

            <Form.Group controlId="formBasicPhone">
            <Form.Label>Phone</Form.Label>
              <Form.Control type="number" placeholder="Enter phone number" onChange={(e)=>setField('phone',e.target.value)}
              value={form.phone} />
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
