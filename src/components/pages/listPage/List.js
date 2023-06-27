import React from 'react'
// import {  Divider } from 'antd';
// import Table from 'react-bootstrap/Table';
import { useSelector,useDispatch } from 'react-redux';
import { Button } from 'antd';
import { deleteList,editTodoList } from '../../../redux/actions/Index';
import {useNavigate} from "react-router-dom" 
import { FaUserEdit } from "react-icons/fa";
import { AiOutlineDelete } from "react-icons/ai";
import {DeleteTwoTone,EditTwoTone} from '@ant-design/icons'

import { Space, Table, Tag } from 'antd';
const { Column, ColumnGroup } = Table;


const List = () => {
  const dispatch = useDispatch()
  let navigate = useNavigate() 
  
    const myState = useSelector((state)=>state.addtodoData)
    const userdata = useSelector((state)=>state.userdata)
    // console.log("userData : ",userdata);
    // console.log("myState : ",myState);



      const deleteHandler = (id) => {
        const confirmBox =  window.confirm("You Wont To Delete This data");

        if (confirmBox === true) {
            // console.log("ok confirm");
            dispatch(deleteList(id))
          }
      }
      const editHandler = (id) => {
        dispatch(editTodoList(id))
        navigate("/forms")
      }
  return (
    <div>
      {/* <h1>Todo List</h1> */}

        {/* <Table striped bordered hover>
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
      </Table> */}





          {/*  */}
          <h1>todo list width Antd</h1>

          <Table dataSource={myState.list}>
            <ColumnGroup title="Todo List">
                <Column title="#" dataIndex="id" key="id" />
                <Column title="First Name" dataIndex="firstName" key="id" />
                <Column title="Last Name" dataIndex="lastName" key="id" />
                <Column title="Email" dataIndex="email" key="id" />
                <Column title="MobileNumber" dataIndex="mobileNumber" key="id" />
            </ColumnGroup>
            
            <Column
                title="Action"
                key="action"
                render={(record) => (
                    <Space size="middle">
                    {/* <Button type="primary" ghost onClick={() => alert(record.id)}>Delete alert</Button> */}
                    <Button type="primary" ghost onClick={() => editHandler(record.id)}> <EditTwoTone style={{fontSize:"23px"}} className='edit-icon'/>{' - '} Edit</Button>
                    <Button type="primary" ghost onClick={() => deleteHandler(record.id)}> <DeleteTwoTone style={{fontSize:"23px"}}/>{' - '}Delete</Button>
                    </Space>
                )}
                />
          </Table>
          {/*  */}




        {/* <Divider>Middle size table</Divider>
        <Table columns={columns} dataSource={data} size="middle" /> */}
    </div>
  )
}

export default List
