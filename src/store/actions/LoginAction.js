import axios from "axios"
import * as actionTypes from "./ActionTypes"
export const LoginAction=(username,password)=>{
    console.log(username,password)
        return async dispatch=>{
    
            try{
             const responseData=await axios.post("http://localhost:8080" + "/login",{
                    
                        username:username,
                        password:password
                    }
                )
            console.log(responseData)
             dispatch({
                 type:actionTypes.LOGIN,
                 payload:responseData.data.token
             })
            }catch(err){
                console.log(err.message)
                dispatch({
                        type:actionTypes.LOGIN,
                        payload:"abcdefghijk"
                })
            }
            
        }
    }