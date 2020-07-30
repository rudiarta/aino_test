import React from 'react'
import { Redirect } from 'react-router-dom'
import { connect } from 'react-redux'

function Category(props) {

    const returnToLogin = (<Redirect to={{
        pathname: "/"
    }}/>);

    return (
        <div>
            {props.isLogin ? '' : returnToLogin}
            haha
        </div>
    )
}

const mapStateToProps = (state) => ({
    isLogin: state.isLogin
})

export default connect(mapStateToProps)(Category)
