import React, { useState } from 'react'
import '../Components/Stylesheet/Login.css'
import logo from '../Components/Images/logo.png';
import anmtn from '../Components/Images/3d1.png'
import anmtn1 from '../Components/Images/3d3.png'
import anmtn2 from '../Components/Images/3d5.png'
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { loginAdmin } from '../Store/Api';
import { registerAdmin } from '../Store/Api';


function Login() { 
	
	const dispatch=useDispatch();
	const navigate=useNavigate();

	const {loading}=useSelector((state)=>state.auth)  

	const [loginData,setLoginData]=useState({email:"",password:""})

	 const [registerData,setRegisterData]=useState({name:"",userName:"",email:"",password:"",isSeller:false})
    //   console.log(registerData);

		const handleSubmitLogin=(e)=>{
			e.preventDefault();
			dispatch(loginAdmin({loginData,navigate}))
		}

		const handleSubmitRegister=(e)=>{
			e.preventDefault();
			dispatch(registerAdmin({registerData,navigate}))
		}

	return (
    <div className='login'>

          <div className='cont12'></div>
         <div className='cont2'>

          <div>
            <img src={logo} alt="logo" className='img1' onClick={()=>{navigate("/")}} />
            <div>
            <h5>Always Choose The Right !!!</h5>
              <div className='image-div'></div>
              <img src={anmtn2} alt="" className='img4'/>
            <img src={anmtn} alt="" className='img2'/>
            <img src={anmtn1} alt="" className='img3'/>
            </div>           
          </div>

          <div className='cont22'>
          <div className="login-html">
		<input id="tab-1" type="radio" name="tab" className="sign-in" /><label for="tab-1" className="tab">SIGN IN</label>
		<input id="tab-2" type="radio" name="tab" className="sign-up"/><label for="tab-2" className="tab">SIGN UP</label>
		<div className="login-form">
			<form onSubmit={handleSubmitLogin}>
			<div className="sign-in-htm">
				<label htmlFor="" className='label' >EMAIL</label><br/>
				<input type="email" name='email' onChange={(e)=>setLoginData({
					...loginData,email:e.target.value
				})}/><br/>
				<label htmlFor="">PASSWORD</label><br/>
				<input type="password" name='password' onChange={(e)=>setLoginData({
					...loginData,password:e.target.value
				})} /><br/>
				<input type="checkbox" className="check" />
				<label htmlfor="check"><span className="icon"></span> Keep me Signed in</label><br/>
				<button type='submit'>
					{loading ? 'loading...' : 'SIGN IN'}</button>
			</div>
			</form>

	{/* user register */}
	
			<form onSubmit={handleSubmitRegister}>
			<div className="sign-up-htm">
				<input type="text" placeholder='NAME' name='name' onChange={(e)=>setRegisterData({
					...registerData,name:e.target.value
				})}/><br/>
			
				<input type="email" placeholder='EMAIL' name='email' onChange={(e)=>setRegisterData({
					...registerData,email:e.target.value
				})}/><br/>
				
				<input type="text" placeholder='USERNAME' name='userName' onChange={(e)=>setRegisterData({
					...registerData,userName:e.target.value
				})}/><br/>
				
				<input type="password" placeholder='PASSWORD' name='password' onChange={(e)=>setRegisterData({
					...registerData,password:e.target.value
				})}/><br/>
				<button type='submit'>
					{loading ? 'loading...' : 'SIGN UP'}</button>
			</div>
			</form>
		</div>
	</div>

          </div>
         </div>

    </div>
  )
}
export default Login