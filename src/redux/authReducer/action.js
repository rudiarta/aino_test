export const loginUser = (props) => {
    props.dispatch({
        type: "LOGIN_SUCCESS"
    })
}

export const logoutUser = (props) => {
    props.dispatch({
        type: "LOGIN_FAILED"
    })
}