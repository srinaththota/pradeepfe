import { useState } from "react";
import { useDispatch } from "react-redux";
import { LoginAction } from "../store/actions/LoginAction";
import classes from "./Login.module.css"


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
    const submitHandler=(e)=>{
        e.preventDefault();
        console.log("reached here")
        loginDispatch(LoginAction(username,password))
 
    }
    return(
        <form onSubmit={submitHandler}>
        <input className={classes.input} type="text" onChange={handleUsername} value={username}/><br/>
        <input type="password" onChange={handlePassword} value={password}/><br/>
        <button type="submit">Submit</button>
        
        </form>
    )
}

export default Login;