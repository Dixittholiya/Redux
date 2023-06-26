import React, { useEffect, useState } from 'react'
import './Forms.scss'
import { Input } from 'antd';
import { Button, Space } from 'antd';
import { useDispatch,useSelector } from 'react-redux' 
// import todoData from '.../redux/reducers/todoForms';
import { addTodoList,updateTOdoList } from '../../../redux/actions/Index';


const Forms = () => {
  const dispatch = useDispatch()
  const myState = useSelector((state)=>state.addtodoData)

  const [form,setForm]=useState({
    firstName:"",
    lastName:"",
    email:"",
    mobileNumber:"",
  })

  useEffect(() => {
    console.log("myState");
    const find = myState.list.filter(x => x.id === myState.edittId)
      if (find.length >= 1) {
        console.log("form filter find : ",find);
        setForm(find[0])
      }
  }, [myState.edittId !== null])

  const changeHandler = (e) => {
    e.preventDefault()
    setForm({...form,[e.target.name]:e.target.value});
  }
  const submitHandler = () => {
    console.log("form : ",form);
    dispatch((addTodoList(form)))
    setForm("")
  }
  const updateHandler = () => {
    dispatch((updateTOdoList(form)))
    setForm("")
  }
  return (
    <div id='todoForms'>
      <h1>Form Page</h1>
      <div className="form">
        <form action="">
            <div className="firstName">
                <label className='firstNameLabel'> First Name </label>
                <Input size="large" placeholder="Enter First Name" className='firstNameinput' name='firstName' value={form.firstName} onChange={changeHandler}/>
            </div>
            <div className="lastName">
                <label> last Name </label>
                <Input size="large" placeholder="Enter last Name" className='latNameInput' name='lastName' value={form.lastName} onChange={changeHandler}/>
            </div>
            <div className="email">
                <label> Email </label>
                <Input size="large" placeholder="Enter Email" className='emailInput' name='email' value={form.email} onChange={changeHandler}/>
            </div>
            <div className="mobileNumber">
                <label> Mobile Number </label>
                <Input size="large" placeholder="Enter Mobile Number" className='mobileNumberInput' name='mobileNumber' value={form.mobileNumber} onChange={changeHandler}/>
            </div>
            <div className="submit">
            {
              myState.edittId >= 1 ? 
                  <Button type="primary" className='submitButton' onClick={updateHandler}>Update</Button> : 
                  <Button type="primary" className='submitButton' onClick={submitHandler}>Submit</Button> 

            }
                </div>
        </form>
      </div>
    </div>
  )
}

export default Forms
