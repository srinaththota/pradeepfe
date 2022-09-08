import { useState } from "react";
import { useDispatch } from "react-redux";
import { LoginAction } from "../store/actions/LoginAction";
const Login = () =>{
   
    const [username,setUsername] = useState("")
    const [password,setPassword] = useState("")

    const loginDispatch = useDispatch();
    const handleUsername=(e)=>{
        setUsername(e.target.value)
    }
    const handlePassword=(e)=>{
        setPassword(e.target.value)
    }
    const submitHandler=()=>{
        console.log("reached here")
        loginDispatch(LoginAction(username,password))
 
    }
    return(
        <>
        <input type="text" onChange={handleUsername} value={username}/><br/>
        <input type="password" onChange={handlePassword} value={password}/><br/>
        <button type="submit" onClick={submitHandler}>Submit</button>
        
        </>
    )
}

export default Login;