import React from 'react'
import { Navbar, Nav } from 'react-bootstrap'
import { connect } from 'react-redux'
import {logoutUser} from '../../redux/authReducer/action'

function NavbarOwn(props) {

    const outUser = () => {
        localStorage.removeItem('keyToken')
        logoutUser(props)
    }

    return (
        <div>
           <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Navbar.Brand href="#home">Aino-test</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link href="/dashboard/category">Category</Nav.Link>
                    <Nav.Link href="/dashboard/product">Product</Nav.Link>
                </Nav>
                <Nav>
                <Nav.Link eventKey={2} href="#name">
                    Aino
                </Nav.Link>
                <Nav.Link onClick={outUser} eventKey={2} href="/">
                    Log Out
                </Nav.Link>
                </Nav>
            </Navbar.Collapse>
            </Navbar> 
        </div>
    )
}

const mapStateToProps = (state) => ({
    isLogin: state.isLogin
})

export default connect(mapStateToProps)(NavbarOwn)