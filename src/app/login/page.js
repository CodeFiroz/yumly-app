"use client";
import { useState } from 'react';
import style from './login.module.css'
import Head from 'next/head';

const page = () => {

  const [login, setLogin] = useState(true);
  const [loginError, setLoginError] = useState("");
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const [loginBtn, setLoginBtn] = useState("Login");

  const loginUser = (e)=>{
  
    e.preventDefault();
    setLoginError("");

    if(loginEmail === ""){
      setLoginError("*Enter your email address to continue.");
      return false;
    }else if(loginPassword === ""){
      setLoginError("*Enter your password");
      return false;
    }else{
      setLoginBtn("Processing...");

      const data = {
        "email": loginEmail,
        "password": loginPassword,
        "action": "login"
      }

      fetch('/api/user', {
        method : "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      }).then((response)=>{
        if(!response.ok){
          throw new Error("Network response was not okay " + response.statusText)
        }
        return response.json();
      }).then((responseData)=>{
        console.log("Success : ", responseData);
      }).catch((error)=>{
        console.log("Error : ", error);
      })

    }
  }

  const [registerError, setRegisterError] = useState("");
  const [registerName, setRegisterName] = useState("");
  const [registerEmail, setRegisterEmail] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");
  const [registerBtn, setRegisterBtn] = useState("Sign in");

  const RegisterUser = (e)=>{
  
    e.preventDefault();
    setRegisterError("");

    if(registerName === ""){
      setRegisterError("*Enter your name to continue.");
      return false;
    }
    else if(registerEmail === ""){
      setRegisterError("*Enter your email address to continue.");
      return false;
    }else if(registerPassword === ""){
      setRegisterError("*Enter your password");
      return false;
    }else{
      setRegisterBtn("Processing...");

      const data = {
        "name": registerName,
        "email": registerEmail,
        "password": registerPassword,
        "action": "register"
      }

      fetch('/api/user', {
        method : "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      }).then((response)=>{
        if(!response.ok){
          throw new Error("Network response was not okay " + response.statusText)
        }
        return response.json();
      }).then((responseData)=>{
        console.log("Success : ", responseData);
      }).catch((error)=>{
        console.log("Error : ", error);
      })

    }
  }


  return (


    <div className={style.signIn}>

      <div className={style.wrapper}>
        {
          login ? <div><h1>Login</h1>
         
        
          <form action="#">
            <input 
              type="text" 
              name='email' 
              placeholder='Email Address' 
              value={loginEmail} 
              onChange={(e)=> setLoginEmail(e.target.value)} 
              required 
              />


            <input 
              type="password" 
              name='password' 
              id='password' 
              placeholder='Password'
              value={loginPassword} 
              onChange={(e)=> setLoginPassword(e.target.value)}
              required 
              />

            <span className={style.error}>
            {loginError}
          </span>
            <button onClick={loginUser}>{loginBtn}</button>
          </form>
          <p>
          New to App ? <button onClick={(prev)=> setLogin(!login)}>Create Account </button>
          </p> </div> : <div>
          <h1>
          Register
        </h1>
        
        <form action="#">
          <input 
            type="text" 
            name='name' 
            placeholder='Name' 
            value={registerName}
            onChange={(e)=> setRegisterName(e.target.value)}
            required 
            />
          
          <input 
            type="text" 
            name='email' 
            placeholder='Email Address' 
            value={registerEmail}
            onChange={(e)=> setRegisterEmail(e.target.value)}
            required 
            />

          <input 
            type="password" 
            name='password' 
            id='password' 
            placeholder='Password' 
            value={registerPassword}
            onChange={(e)=> setRegisterPassword(e.target.value)}
            required
            />
          <span className={style.error}>
            {registerError}
          </span>
          <button onClick={RegisterUser}>{registerBtn}</button>
        </form>
        <p>
        Already Register ? <button onClick={(prev)=> setLogin(!login)}>Login Here </button>
        </p> 
          </div>
        }
      

      </div>

    </div>

  )
}

export default page