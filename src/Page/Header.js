import React from 'react'
import logo from '../Components/Images/logo.png'
import {BsSearch,BsCart3} from 'react-icons/bs'
import { MdAccountCircle } from 'react-icons/md'
import '../Components/Stylesheet/Header.css'
import { useNavigate } from 'react-router-dom'
import Dropdown from 'react-bootstrap/Dropdown';
import { useSelector } from 'react-redux'
   

function Header() {
  let navigate=useNavigate();
  const {userDetail}=useSelector((state)=> state.sellerLogin)
    console.log(userDetail);
    
   

  return (
    <div className='header'
    style={{display:'flex'}}>
      <img src={logo} alt='logo' onClick={()=>{navigate('/')}}/>
      <div className='input'
       style={{height:'25px'}}>
      <select className='form'>
        <option>All Categories</option>
        <option>Art</option>
        <option>Craft</option>
        <option>Home decor</option>
        
      </select>
      <span className='slash'>|</span>
     <input className='input1'
            type='text' 
            placeholder=' Search for items  '
            style={{outline:'none',border:'none'}}/>
                  
            
            <BsSearch color='grey' className='search'/>
            </div>
            <button className='button1' onClick={()=>{navigate('/login');
        }} >Sign In</button>
        <Dropdown>
      <Dropdown.Toggle id="dropdown-basic" className='butt2' title='Your account'>
      <MdAccountCircle/>
      </Dropdown.Toggle>

      <Dropdown.Menu>
      <Dropdown.Item><MdAccountCircle size={'25px'}/>{userDetail?.userName}</Dropdown.Item>
        <Dropdown.Item onClick={()=>{navigate('/seller-login')}}>Sell Something</Dropdown.Item>
        
      </Dropdown.Menu>
    </Dropdown>
         <button className='butt3' onClick={()=>{navigate('/user-cart');
        }} title='Go to cart' >< BsCart3 className='cart' /></button>
    </div>
  )
}


export default Header