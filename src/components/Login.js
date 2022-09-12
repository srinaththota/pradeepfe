import { useState } from "react";
import { useDispatch } from "react-redux";
import { LoginAction } from "../store/actions/LoginAction";
import classes from "./Login.module.css"
import { FormControlLabel } from '@mui/material';
import { Paper,Typography, Checkbox } from '@mui/material';

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
        <input className={classes.input} type="text" onChange={handleUsername} value={username}/><br/>
        <input type="password" onChange={handlePassword} value={password}/><br/>
        <button type="submit" onClick={submitHandler}>Submit</button>
        <Paper style={{display:"flex", justifyContent:"center", alignItems:"center", marginTop:80, marginLeft:70, marginRight:70}}>
        <Typography variant="title"  >Configure Component</Typography>
          </Paper>
        </>
    )
}

export default Login;