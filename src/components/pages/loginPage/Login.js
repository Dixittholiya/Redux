import React from 'react'
import './Login.scss'
import { Button, Space } from 'antd';
import { useState } from 'react';
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

const Login = () => {
  const myState = useSelector((state) => state.userdata)
  
  let navigate = useNavigate()
  const [login,setLogin]=useState({
    email : "",
    password : ""
  })

  const changeHandler = (e) => {
    setLogin({...login,[e.target.name]:e.target.value})
  }
  

  const submitHandler = (e) => {
    e.preventDefault();
    let find = myState.user.find(a =>a.email === login.email)
      if (find) {
        let findPassword = find.password
          if (findPassword === login.password) {
            alert("Login SuccessFull")
            localStorage.setItem('userFirstName', find.firstName);
            navigate("/")
          }
          else{
            alert("invalid Password")
          }
      }else{
        alert("invalid email address")
      }
    
    setLogin("")
  }
  
  return (
    <div id='login'>
      <div className="form">
      
        <h1 className='title'>Login</h1>
        <form action="">
          <div className="email">
            <label className='labelEmail'>Email</label>
            <input type="email" className='emailInput' placeholder='Enter Email' name='email' value={login.email || ''} onChange={changeHandler}/>
          </div>
          <div className="Password">
            <label className='labelPassword'>Password</label>
            <input type="email" className='PasswordInput' placeholder='Enter Password' name='password' value={login.password || ''} onChange={changeHandler}/>
          </div>
          <div className="submitButton">
                <Button type="primary" className='submitButton' onClick={submitHandler}>Submit</Button>
            </div>
        </form>
      </div>
    </div>
  )
}

export default Login
