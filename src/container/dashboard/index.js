import React from 'react'
import { Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import NavbarOwn from '../../component/navbar'
import {Container, Row} from 'react-bootstrap'
import FormProduct from '../../component/FormProduct'
import FormCategory from '../../component/FormCategory'

function Dashboard(props) {

    const returnToLogin = (<Redirect to={{
        pathname: "/"
    }}/>)

    const pageCtegory = (<FormCategory />)
    const pageProduct = (<FormProduct />)

    return (
        <div>
            {props.isLogin ? '' : returnToLogin}
            
            <NavbarOwn />
            <Container>
                <Row>
                    {props.location.pathname === '/dashboard/category' ? pageCtegory : ''}
                    {props.location.pathname === '/dashboard/product' ? pageProduct : ''}
                </Row>
            </Container>
        </div>
    )
}

const mapStateToProps = (state) => ({
    isLogin: state.isLogin
})

export default connect(mapStateToProps)(Dashboard)
