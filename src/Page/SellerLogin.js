import React from 'react'
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Navigate, useNavigate } from 'react-router-dom/dist'
import '../Components/Stylesheet/SellerLogin.css'
import { sellerLoginAdmin } from '../Store/Api';

function SellerLogin() {


  const navigate=useNavigate();

  const dispatch=useDispatch();

	const {loading}=useSelector((state)=>state.sellerLogin)  

	const [sellerLoginData,setSellerLoginData]=useState({email:"",password:""})

  const handleSubmitSellerLogin=(e)=>{
			e.preventDefault();
			dispatch(sellerLoginAdmin({sellerLoginData,navigate}))
		}


  return (
    <div className='login2'>
      <div className='login-cont'>
            <h1>Welcome back!!!</h1>
      
            <div className='register'>
            <p>Don't have an account?Click here</p>
            <button onClick={()=>{navigate('/seller-register')}}>Register</button>
            </div>
        <form onSubmit={handleSubmitSellerLogin}>
            <div className='inputs'>
            <input type="email" name='email' placeholder='Email' onChange={(e)=>setSellerLoginData({
					...sellerLoginData,email:e.target.value
				})}/>
            <input type="password" name='password' placeholder='Password' onChange={(e)=>setSellerLoginData({
					...sellerLoginData,password:e.target.value
				})}/><br/>
      <input type="checkbox" className="check" checked/>
		<label for="check"> Keep me Signed in</label><br/>
            
            <button type='submit' className='login-but'>{loading ? 'loading...' : 'LOGIN'}</button></div>
      </form>
      </div>
    </div>
  )
}

export default SellerLogin