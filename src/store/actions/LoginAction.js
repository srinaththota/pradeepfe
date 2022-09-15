import axios from "axios"
import * as actionTypes from "./ActionTypes"
export const LoginAction=(username,password)=>{
    console.log(username,password)
        return async dispatch=>{
    
            try{
             const responseData=axios.post("http://localhost:8080" + "/login",{
                    
                        username:username,
                        password:password
                    }
                ).then(()=>{
                    console.log(responseData)
                    dispatch({
                        type:actionTypes.LOGIN,
                        payload:responseData.data.token
                    })
                }).catch((err)=>{
                    dispatch({
                        type:actionTypes.ERROR,
                        payload:"abcdefghijk"
                })
                })
            
            }catch(err){
                console.log(err.message)
                
            }
            
        }
    }