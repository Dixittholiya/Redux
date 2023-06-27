import React from 'react'
import './Login.scss'
import { Button, Space } from 'antd';
import { Input } from "antd";
import { useState } from 'react';
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import axios from 'axios';

const Login = () => {
  const myState = useSelector((state) => state.userdata)
  let navigate = useNavigate()

  const [apiGetdata, setApiGetdata] = useState(null)
  const [login, setLogin] = useState({
    email: "",
    password: ""
  })

  const changeHandler = (e) => {
    setLogin({ ...login, [e.target.name]: e.target.value })
  }


  const submitHandler = (e) => {
    e.preventDefault();

    axios.post("http://localhost:9000/users/user-login", login)
      .then((response) => {
        setApiGetdata(response.data)

        localStorage.setItem('userFirstName', response.data.find.firstName);
        alert("Login Successfull");

        navigate("/")

        // setTimeout(() => {
        //   window.location.reload();
        // }, navigate);

      })


    // let find = myState.user.find(a =>a.email === login.email)
    //   if (find) {
    //     let findPassword = find.password
    //       if (findPassword === login.password) {
    //         alert("Login SuccessFull")
    //         localStorage.setItem('userFirstName', find.firstName);

    //         navigate("/")
    //         setTimeout(() => {
    //           window.location.reload();
    //         }, 800);

    //       }
    //       else{
    //         alert("invalid Password")
    //       }
    //   }else{
    //     alert("invalid email address")
    //   }

    setLogin("")
  }

  return (
    <>

      <div id='login'>
        <div className="man-div">
          <div className="child-div">
            <h1 className='page-title'>Login Page</h1>
            <div className="email">
              <label className="labelEmail">Email</label>
              <Input size="large" type="email" className='emailInput' placeholder='Enter Email' name='email' value={login.email || ''} onChange={changeHandler} />
            </div>
            <div className="Password">
              <label className="labelPassword">Password</label><br />
              <Input size="large" type="text" className='PasswordInput' placeholder='Enter Password' name='password' value={login.password || ''} onChange={changeHandler} />
            </div>
            <div className="submitButton">
              <Button type="primary" className='submitButton' onClick={submitHandler}>Submit</Button>
            </div>
          </div>
        </div>
      </div>

    </>
  )
}

export default Login
