import React, { useEffect } from "react";
import { Formik } from "formik"; // import Formik from formik
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import useLocalStorage from "../Hooks/useLocalStorage";
import { USER_LOGIN_API } from "../Common/constants";
import axios from "axios";

const Login = () => {

  const [email, setMail] = useState("");
  const [password, setPassword] = useState("");
  const [display, setDisplay] = useState(false);
  const navigate = useNavigate();

  const [getLocalStorage, setLocalStorage] = useLocalStorage("user");

  useEffect(() => {
    // if length of token is equal to 100 then navigate to previous page
    if (getLocalStorage?.token) {
      navigate('/admin/Home');
    }
  }, []);
  if (getLocalStorage?.token) {
    navigate('/admin/Home');
  }
  const HandleChange = (e) => {
      const { name, value } = e.target;
      if (name === 'email') {
          setMail(value);
      }
      if (name === 'password') {
          setPassword(value);
      }
  }
  const Submit = async (e) => {
      e.preventDefault();
      try {
          const response = await axios.post(USER_LOGIN_API, {
              "email": email,
              "password": password,
          })
          let index = email.indexOf('@');
          let name = email.slice(0, index);
          const token = response.headers.get('Authorization');
          console.log("token" , token);

          setLocalStorage({
            ...getLocalStorage,
            "userName": name,
            "token": token 
          })
          navigate(`/admin/Home`);
      }
      catch (error) {
          console.error(error);
          setDisplay(true);
      }
  }

  return (
    <>
      <div className="login-container">
           <form className="login-form" onSubmit={Submit}>
                    <h2>Admin Login</h2>
                    <h4>Hey,Enter your details to get sign in to your account</h4>
                    <input type="email" className="form-control" placeholder="Enter your email" onChange={HandleChange} name="email" autoComplete="off" value={email} />
                    
                    <input type="password" className="form-control" placeholder="Enter your password" onChange={HandleChange} name="password" value={password} />
                   
                    <button type="submit" >Login</button>
                    {display &&(
                        <h3>Please Enter Valid Credentials</h3>
                    )}
            </form>
    </div>
    </>
  );
};

export default Login;
