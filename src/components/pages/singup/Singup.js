import React, { useState } from 'react'
import './Singup.scss'
import { Input } from 'antd';
import { Button } from 'antd';
import { useDispatch } from 'react-redux'
import { addUser } from '../../../redux/actions/userAction';


const Singup = () => {
  const dispatch = useDispatch()

  const [singup,setSingup]=useState({
    firstName:"",
    lastName:"",
    email:"",
    userName:"",
    password:"",
    conformPassword:""
  })
  const changeHandler = (e) => {
    setSingup({...singup,[e.target.name]:e.target.value})
  }
  
  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(addUser(singup))
    setSingup("")
  }
  return (
    <div id='singup'>
      <h1 className='title'>Singup Page</h1>
        <div className="singupForm">
            <div className="firstAndLastNamelabel">
                <label className='firstNameLabel'> First Name </label>
                <label className='lastNameLabel'> Last Name </label>
            </div>
            <div className="firstAndLastNameInput">
                <Input size="large" placeholder="Enter First Name" className='firstNameInput' name='firstName'  value={singup.firstName} onChange={changeHandler}/>
                <Input size="large" placeholder="Enter Last Name" className='lastNameInput' name='lastName'  value={singup.lastName} onChange={changeHandler}/>
            </div>

            <div className="emailAndUserNamelabel">
                <label className='ageLabel'> Email </label>
                <label className='userNameLabel'> User Name </label>
            </div>
            <div className="emailAndUserNameInput">
                <Input size="large" placeholder="Enter Email" className='emailInput'  name='email' value={singup.email} onChange={changeHandler}/>
                <Input size="large" placeholder="Enter user Name" className='userNameInput' name='userName'  value={singup.userName} onChange={changeHandler}/>
            </div>

            <div className="passwordAndConformPassword">
                <label className='passwordLabel'> password </label>
                <label className='conformPasswordLabel'> Coform Password </label>
            </div>
            <div className="passwordAndConformPasswordInput">
                <Input size="large" placeholder="Enter Age" className='passwordInput' name='password'  value={singup.password} onChange={changeHandler}/>
                <Input size="large" placeholder="Enter Last Name" className='conformPasswordInput' name='conformPassword'  value={singup.conformPassword} onChange={changeHandler}/>
            </div>

            <div className="submitButton">
                <Button type="primary" className='submitButton' onClick={submitHandler}>Submit</Button>
            </div>
        </div>
    </div>
  )
}

export default Singup
