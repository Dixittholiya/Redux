import React from 'react'
import {  Divider } from 'antd';
import Table from 'react-bootstrap/Table';
import { useSelector,useDispatch } from 'react-redux';
import { Button } from 'antd';
import { deleteList,editTodoList } from '../../../redux/actions/Index';
import {useNavigate} from "react-router-dom" 
import { FaUserEdit } from "react-icons/fa";
import { AiOutlineDelete } from "react-icons/ai";



const List = () => {
  const dispatch = useDispatch()
    const myState = useSelector((state)=>state.addtodoData)
    const userdata = useSelector((state)=>state.userdata)
    console.log("userData : ",userdata);
    console.log("myState : ",myState);
  let navigate = useNavigate() 
    // interface DataType {
    //     key: React.Key;
    //     name: string;
    //     age: number;
    //     address: string;
    //     lastname : string
    //   }
    const array = [
        {FirstName:"dixit",lastName:"Tholiya",Email:"dixit@gmail.com",MobileNumber:"1234567890"},
        {FirstName:"dixit",lastName:"Tholiya",Email:"dixit@gmail.com",MobileNumber:"1234567890"},
        {FirstName:"dixit",lastName:"Tholiya",Email:"dixit@gmail.com",MobileNumber:"1234567890"},
        {FirstName:"dixit",lastName:"Tholiya",Email:"dixit@gmail.com",MobileNumber:"1234567890"},
    ]
      const columns= [
        {
          title: 'firstName',
          dataIndex: 'firstName',
        },
        {
          title: 'lastName',
          dataIndex: 'lastName',
        },
        {
          title: 'email',
          dataIndex: 'email',
        },
        {
          title: 'mobileNumber',
          dataIndex: 'mobileNumber',
        },
      ];
      
      const data = myState.list

      const deleteHandler = (id) => {
        dispatch(deleteList(id))
      }
      const editHandler = (id) => {
        dispatch(editTodoList(id))
        navigate("/forms")
      }
  return (
    <div>
      <h1>Todo List</h1>

        <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>Mobile Number</th>
            <th>Delete</th>
            <th>Edit</th>
          </tr>
        </thead>
        <tbody>
          {
            myState.list &&
            myState.list.map(item => (
              <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.firstName}</td>
                <td>{item.lastName}</td>
                <td>{item.email}</td>
                <td>{item.mobileNumber}</td>
                <td><Button type="primary" ghost onClick={() => deleteHandler(item.id)}> <AiOutlineDelete /> Delete</Button></td>
                <td><Button type="primary" ghost onClick={() => editHandler(item.id)}> <FaUserEdit /> Edit</Button></td>
              </tr>
            ))
          }
          
        </tbody>
      </Table>


      <h1>User List</h1>

        <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>User Name</th>
            <th>password</th>
          </tr>
        </thead>
        <tbody>
          {
            userdata.user &&
            userdata.user.map(item => (
              <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.firstName}</td>
                <td>{item.lastName}</td>
                <td>{item.email}</td>
                <td>{item.userName}</td>
                <td>{item.password}</td>
              </tr>
            ))
          }
          
        </tbody>
      </Table>




        <Divider>Middle size table</Divider>
        <Table columns={columns} dataSource={data} size="middle" />
    </div>
  )
}

export default List
