import React from 'react'
import { useState } from 'react';
import {Form,Row,Col,FormGroup} from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom'
import '../Components/Stylesheet/SellerRegister.css'
import { sellerRegisterAdmin } from '../Store/Api';


function SellerRegister() {

  const dispatch=useDispatch();
	const navigate=useNavigate();

	const {loading}=useSelector((state)=>state.sellerLogin)  

	const [sellerRegisterData,setSellerRegisterData]=useState({name:"",userName:"",email:"",password:"",isSeller:true,phoneNumber:"",shopName:"",})


		const handleSubmitSellerRegister=(e)=>{
			e.preventDefault();
			dispatch(sellerRegisterAdmin({sellerRegisterData,navigate}))
		}


  return (
       <div className='dpage3'>
        <h5>Register here!!!</h5>
        <div className='mains'>
         <Form onSubmit={handleSubmitSellerRegister}>
          <Row>
         <Col md={6}>
          <FormGroup>
            <label htmlFor="">Mobile</label><br/>
           <input type="number"
            placeholder='Enter Mobile Number' name='phoneNumber' onChange={(e)=>setSellerRegisterData({
              ...sellerRegisterData,phoneNumber:e.target.value
            })}/>
            </FormGroup>
         </Col>
         <Col md={6}>
          <FormGroup>
         <label htmlFor="">Shop name</label><br/>
            <input type="text" 
            placeholder='Enter Your Shop Name'
            name='shopName' 
            onChange={(e)=>setSellerRegisterData({
              ...sellerRegisterData,shopName:e.target.value
            })}
            />
            </FormGroup>
         </Col>
         <Col md={6}>
          <FormGroup>
            <label htmlFor="">Email</label><br/>
            <input type="email" 
            placeholder='Enter Email Address'
            name='email'
            onChange={(e)=>setSellerRegisterData({
              ...sellerRegisterData,email:e.target.value
            })}
            />
            </FormGroup>
         </Col>
         <Col md={6}>
          <FormGroup>
           <label htmlFor="">Username</label><br/>
            <input type="userName" 
            placeholder='Enter username'
            name='userName' 
            onChange={(e)=>setSellerRegisterData({
              ...sellerRegisterData,userName:e.target.value
            })}
            />
            </FormGroup>
         </Col>
         <Col md={6}>
          <FormGroup>
            <label htmlFor="">Name</label><br/>
            <input type="text"
            placeholder='Enter Your Full Name'
            name='name' 
            onChange={(e)=>setSellerRegisterData({
              ...sellerRegisterData,name:e.target.value
            })}
             />
            </FormGroup>
         </Col>
         <Col md={6}>
          <FormGroup>
         <label htmlFor="">Password</label><br/>
            <input type="password" 
            placeholder='Enter Password'
            name='password' 
            onChange={(e)=>setSellerRegisterData({
              ...sellerRegisterData,password:e.target.value
            })}
            />
            </FormGroup>
         </Col>
 
         <Col md={6}>
          <FormGroup>
            <div >
           </div>
            </FormGroup>
         </Col>
         <Col md={6}>
          <FormGroup>
            <div className='button' >
     <button className='but1' onClick={()=>{navigate("/")}}>Back</button>
     <button className='but2' type='submit' >{loading ? 'loading...' : 'REGISTER'}</button>
     
           </div>
            </FormGroup>
         </Col>
            </Row> 
          
          </Form> 
          </div>
          
    </div>
  )
}

export default SellerRegister