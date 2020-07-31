import React, {useState} from 'react'
import { connect } from 'react-redux'
import {Form, Button, Container, Row} from 'react-bootstrap'
import {Redirect} from 'react-router-dom'
import { loginUser } from '../../redux/authReducer/action'
import axios from 'axios'

import "./style.scss"

function Login(props) {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const submitHandler = () => {
        axios.post('https://private-anon-281fe4fdb6-retailmockapp.apiary-mock.com/auth/login', {
        email: email,
        password: password
      })
      .then((response) => {
        console.log(response.data.data.access_token.token);
        loginUser(props)
        let token = response.data.data.access_token.token
        localStorage.setItem('keyToken', token)
      })
      .catch((error) => {
        console.log(error);
      });
    }
    

    const loginIn = (<Redirect to={{
        pathname: "/dashboard"
      }}/>);
    
    
    return (
        <div className="Login">
            <Container>
            
            {props.isLogin ? loginIn : ''}
            <Row className="justify-content-md-center">
                <Form>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control onChange={(e) => setEmail(e.target.value)} value={email} type="email" placeholder="Enter email" />
                        <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                        </Form.Text>
                    </Form.Group>

                    <Form.Group controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control onChange={(e) => setPassword(e.target.value)} value={password} type="password" placeholder="Password" />
                    </Form.Group>
                    <Button onClick={submitHandler} className="btn-margin" variant="primary" type="button">
                        Submit
                    </Button>
                </Form>
                </Row>
            </Container>
        </div>
    )
}

const mapStateToProps = (state) => ({
    isLogin: state.isLogin
})

export default connect(mapStateToProps)(Login);
