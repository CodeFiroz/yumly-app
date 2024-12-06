// ** CREATING LOGIN / SIGN UP PAGE FOR RESTAURANTS ** //

"use client";

import { useState, useEffect } from 'react';
import style from './login.module.css'
import { useRouter } from 'next/navigation';

const page = () => {

  const router = useRouter();

  const [login, setLogin] = useState(true);
  const [loginError, setLoginError] = useState("");
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const [loginBtn, setLoginBtn] = useState("Login");


  useEffect(()=>{
    let localStorageData = localStorage.getItem('shop');
    if(localStorageData){
      router.push('/dashboard');
    }
  })

  // get all login input, button, error state s

  // functiom to login a user 
  const loginUser = (e) => {

    e.preventDefault();

    // prevent form submit redirection

    setLoginError("");

    // empty all errors

    // ** validating all fields 

    if (loginEmail === "") {
      setLoginError("*Enter your email address to continue.");
      return false;
    } else if (loginPassword === "") {
      setLoginError("*Enter your password");
      return false;
    } else {

      // change login button text
      setLoginBtn("Processing...");

      // creating a object to send  to an api request to login 

      const data = {
        "email": loginEmail,
        "password": loginPassword,
        "action": "login"
      }

      // sending api request 

      fetch('/api/user', {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      }).then((response) => {
        if (!response.ok) {
          // if api didn't work properly
          throw new Error("Network response was not okay " + response.statusText);
        }
        // if works return reponse into json
        return response.json();
      }).then((responseData) => {
        // printing response in console
        console.log("Success : ", responseData);
      }).catch((error) => {
        // printing api errors  in console
        console.log("Error : ", error);
      })

    }
  }

  const [registerError, setRegisterError] = useState("");
  const [registerName, setRegisterName] = useState("");
  const [registerEmail, setRegisterEmail] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");
  const [registerCity, setRegisterCity] = useState("");
  const [registerAdd, setRegisterAdd] = useState("");
  const [registerPhone, setRegisterPhone] = useState("");
  const [registerBtn, setRegisterBtn] = useState("Sign in");

  // getting all input, button, errors states


  // function to register a retaurant using sending api request
  const RegisterUser = async (e) => {

    e.preventDefault();
    // preventing form submit redrection

    setRegisterError("");
    // empty all eroors

    // ** validating all fields
    if (registerName === "") {
      setRegisterError("*Enter your name to continue.");
      return false;
    }
    else if (registerEmail === "") {
      setRegisterError("*Enter your email address to continue.");
      return false;
    }else if (registerCity === "") {
      setRegisterError("*Enter your city name.");
      return false;
    } else if (registerAdd === "") {
      setRegisterError("*Enter your  address to continue.");
      return false;
    }else if (registerPhone === "") {
      setRegisterError("*Enter your phone number to continue.");
      return false;
    }  else if (registerPassword === "") {
      setRegisterError("*Enter your password");
      return false;
    } else {
      // change button text
      setRegisterBtn("Processing...");

      // creating object to pass to an api
      const data = {
        "name": registerName,
        "email": registerEmail,
        "city": registerCity,
        "address": registerAdd,
        "phone": registerPhone,
        "password": registerPassword,
        "action": "register"
      }

      // requesting to api 

      await fetch('/api/restaurants', {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      }).then((response) => {
        if (!response.ok) {
          // if api didn't work properly
          throw new Error("Network response was not okay " + response.statusText);
          // change button text
          setRegisterBtn("Sign in");
        }
        // if works return reponse into json
        return response.json();
      }).then((responseData) => {
        // printing response in console
        console.log("Success : ", responseData);

        setRegisterName("");
        setRegisterEmail("");
        setRegisterCity("");
        setRegisterAdd("");
        setRegisterPhone("");
        setRegisterPassword("");

        const {result} = responseData;
        delete result.password;

        localStorage.setItem('shop', JSON.stringify(result));

        router.push('/dashboard');

        
        // change button text        
        setRegisterBtn("Sign in");
      }).catch((error) => {
        // printing api errors  in console
        console.log("Error : ", error);
        // change button text
        setRegisterBtn("Sign in");
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
                onChange={(e) => setLoginEmail(e.target.value)}
                required
              />


              <input
                type="password"
                name='password'
                id='password'
                placeholder='Password'
                value={loginPassword}
                onChange={(e) => setLoginPassword(e.target.value)}
                required
              />

              <span className={style.error}>
                {loginError}
              </span>
              <button onClick={loginUser}>{loginBtn}</button>
            </form>
            <p>
              New to App ? <button onClick={(prev) => setLogin(!login)}>Create Account </button>
            </p> </div> : <div>
            <h1>
              Register
            </h1>

            <form action="#">
              <input
                type="text"
                name='name'
                placeholder='Restaurant Name'
                value={registerName}
                onChange={(e) => setRegisterName(e.target.value)}
                required
              />

              <input
                type="text"
                name='email'
                placeholder='Email Address'
                value={registerEmail}
                onChange={(e) => setRegisterEmail(e.target.value)}
                required
              />

              <input
                type="text"
                name='city'
                placeholder='City Name'
                value={registerCity}
                onChange={(e) => setRegisterCity(e.target.value)}
                required
              />
              
              <input
                type="text"
                name='address'
                placeholder='Full Address'
                value={registerAdd}
                onChange={(e) => setRegisterAdd(e.target.value)}
                required
              />

              <input
                type="tel"
                name='phone'
                placeholder='Contact Number'
                value={registerPhone}
                onChange={(e) => setRegisterPhone(e.target.value)}
                required
              />


              

              <input
                type="password"
                name='password'
                id='password'
                placeholder='Password'
                value={registerPassword}
                onChange={(e) => setRegisterPassword(e.target.value)}
                required
              />
              <span className={style.error}>
                {registerError}
              </span>
              <button onClick={RegisterUser}>{registerBtn}</button>
            </form>
            <p>
              Already Register ? <button onClick={(prev) => setLogin(!login)}>Login Here </button>
            </p>
          </div>
        }


      </div>

    </div>

  )
}

export default page