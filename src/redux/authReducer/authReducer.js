const initialState = {
    isLogin: false
  }
  
export const reducer = (state = initialState, action) => {
    switch(action.type){
        case "LOGIN_SUCCESS":
            return {
                isLogin: true
        }
        case "LOGIN_FAILED":
            return {
                isLogin: false
            }
        default:
            return state
    }
}