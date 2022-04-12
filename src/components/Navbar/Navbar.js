import React  from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap';
import { NavbarMainContainer } from './StyledNavbar';
import profile from '../../assets/profile.svg';
import logo from '../../assets/logo.svg';

const Navbars = () => {
    return (
        <NavbarMainContainer>
            <Container>
            <Navbar className='autohide ' expand="lg">
                <Container fluid>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Brand href="#" className='text-white'>
                        <span className='fs-2'>
                        <img src={logo} alt="logo" />
                        </span>
                    </Navbar.Brand>
                    <Navbar.Brand href="#" className=' d-lg-none'>
                    <button className="order-btn  ">Pre Order</button>
                    </Navbar.Brand>
                    <Navbar.Collapse id="navbarScroll">
                        <Nav
                            className="mx-auto my-2 my-lg-0"
                            
                            navbarScroll
                        >
                            <Nav.Link href="#action1">Miners</Nav.Link>
                            <Nav.Link href="#action2">Hosting </Nav.Link>
                            <Nav.Link href="#action2">Cloud mining</Nav.Link>
                            <Nav.Link href="#action2">Blog</Nav.Link>
                            <Nav.Link href="#action2">Token</Nav.Link>
                            <Nav.Link href="#action2">
                                <img src={profile} alt="profile" />
                            </Nav.Link>
                        </Nav>
                        <div className="d-none d-lg-block">

                        <button className="order-btn ">Pre Order</button>
                        </div>
                    </Navbar.Collapse>
                </Container>
                <div>
                </div>
            </Navbar>
            </Container>

        </NavbarMainContainer>
    )
}

export default Navbars