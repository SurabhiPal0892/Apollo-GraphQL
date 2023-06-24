import {Navbar} from 'react-bootstrap';
import logo from '../../assets/logo.png'
export function Header(){
    return(
        <>
    <Navbar bg="light" variant="light">
    <Navbar.Brand href="#home">
      <img
        alt=""
        src={logo}
        width="30"
        height="30"
        className="d-inline-block align-top"
      />
      Project Management
    </Navbar.Brand>
  </Navbar>
        </>
    )
}