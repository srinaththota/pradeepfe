import * as actionTypes from "../actions/ActionTypes"
const initialState={
    token:null
}

const LoginReducer = (state=initialState,action)=>{

    if(action.type===actionTypes.LOGIN){
        return {
            ...state,
            token:action.payload
        }
    }

    return state;
}

export default LoginReducer