import React from 'react'
import './Header.scss'
import { Link } from 'react-router-dom'; 
import { Button } from 'antd';
const Header = () => {
  let userfirstName = localStorage.getItem('userFirstName');

  const logoutHandler = () => {
    localStorage.removeItem('userFirstName');
  }
  return (
    <div id='header'>
      <div className='headerList'>
        <ul className='headerUl'>
        {/* <Link to="/Home" ><li><Button type="primary" ghost>Home123</Button></li></Link>  */}
        <Link to="/" ><li><Button type="primary" ghost>Home</Button></li></Link> 
        {/* <Link to="/About" ><li><Button type="primary" ghost>About</Button></li></Link>  */}
          {/* <li><Button type="primary" ghost>Product</Button></li> */}
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
          {/* <li><Button type="primary" ghost>Singup</Button></li> */}
        </ul>
      </div>

    </div>
  )
}

export default Header
