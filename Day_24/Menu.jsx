import 'react-bootstrap'
import './Menu.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Nav, Card, Button, Navbar, NavDropdown, Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Home from './Home'
export default function Menu () {
    return(
        <>
        <Navbar className="Total" expand="lg">
  <Container>
    <Navbar.Brand  >
    <img src="https://avatars.githubusercontent.com/u/92095670?s=48&v=4" fluid />
    <Link to="/home" className="logo">
      Great Mates
    </Link>
    </Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav>
        <Link to="/first" className="logo">20 GM</Link>
        <Link to="/second" className="logo">21 GM</Link>
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>            
        </>
    )
} 