import React, { useEffect, useState } from 'react'
import './Header.scss'
import { Menu, } from 'antd'

import { useNavigate } from 'react-router-dom';
import { HomeOutlined, SolutionOutlined, FormOutlined, LoginOutlined, PoweroffOutlined } from '@ant-design/icons';
import { GiLoincloth } from "react-icons/gi";
import { FaWpforms } from "react-icons/fa";

import { useDispatch, useSelector } from 'react-redux';
import { removeUserData } from '../../redux/actions/userAction';

const Header = () => {
  const dispatch = useDispatch()
  let myUserState = useSelector((state) => state.userdata.loginUserData.firstName)

  const [newDisabled, setNewDisabled] = useState(false)
  const [logoutDisabled, setLogoutDisabled] = useState(false)
  const navigate = useNavigate()

  useEffect(() => {

    if (myUserState) {
      setNewDisabled(true)
      setLogoutDisabled(false)
    }
    if (myUserState === undefined) {
      setNewDisabled(false)
      setLogoutDisabled(true)
    }
  }, [myUserState])


  return (

    <>

      <Menu style={{ display: "flex", fontSize: "17px", backgroundColor: "#f4f4f4" }}
        onClick={(info) => {
          if (info.key === "/logout") {
            // navigate("/")
            // localStorage.removeItem("userFirstName")
            dispatch(removeUserData(myUserState))

          }
          else {
            navigate(info.key)
          }
        }}
        items={[
          { label: "Home", key: "/", icon: <HomeOutlined style={{ fontSize: "17px" }} /> },
          { label: "Product", key: "/Product", icon: <GiLoincloth style={{ fontSize: "17px" }} /> },
          { label: "List", key: "/list", icon: <SolutionOutlined style={{ fontSize: "17px" }} /> },
          { label: "Forms", key: "/forms", icon: <FormOutlined style={{ fontSize: "17px" }} /> },

          { label: "Login", key: "/login", icon: <LoginOutlined style={{ fontSize: "17px" }} />, disabled: newDisabled },
          { label: "Singup", key: "/Singup", icon: <FaWpforms style={{ fontSize: "17px" }} />, disabled: newDisabled },

          { label: "Logout", key: "/logout", icon: <PoweroffOutlined style={{ fontSize: "17px" }} />, danger: true, disabled: logoutDisabled },
        ]}>

      </Menu>






      {/* <div id='header'>
        <div className='headerList'>
          <ul className='headerUl'>
            <Link to="/Home" ><li><Button type="primary" ghost>Home123</Button></li></Link> 
            <Link to="/" ><li><Button type="primary" ghost>Home</Button></li></Link>
            <Link to="/About" ><li><Button type="primary" ghost>About</Button></li></Link> 
            <li><Button type="primary" ghost>Product</Button></li>
            <Link to="/product" ><li><Button type="primary" ghost>Product</Button></li></Link>
            <Link to="/list" ><li><Button type="primary" ghost>List</Button></li></Link>
            <Link to="/forms" ><li><Button type="primary" ghost>Forms</Button></li></Link>
            {
              userfirstName ?
                <li><Button type="primary" ghost onClick={logoutHandler}>Logout</Button></li>
                :
                <>
                  <Link to="/login" ><li><Button type="primary" ghost>Login</Button></li></Link>
                  <Link to="/singup" ><li><Button type="primary" ghost>Singup</Button></li></Link>
                </>
            }
            <li><Button type="primary" ghost>Singup</Button></li>
          </ul>
        </div>

      </div> */}




    </>
  )
}

export default Header
