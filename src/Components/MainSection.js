import React from 'react'
import '../Components/Stylesheet/MainSection.css'
import {BsArrowUpRight} from 'react-icons/bs'
import img from '../Components/Images/img.png'
import { useNavigate } from 'react-router-dom'
import about3 from '../Components/Images/about3.webp';
import about2 from '../Components/Images/about2.jpg';
import img1 from '../Components/Images/img1.jpg'
import {BsArrowRight} from 'react-icons/bs'


function CreativeSection() {

       let navigate=useNavigate();
  return (
    <div>
    <div className='container1'>
      <div className='first-half'>
      <div className='square1'></div>
      <div className='square2'></div>
      <div className='heading'>
        <p>Just Droped</p>
        <h1>Feel Authentic Peace</h1>
        <div className='button1' onClick={()=>{navigate('/products')}}><button>
         <span>Shop Now <BsArrowUpRight/></span> 
          </button></div>
      </div>
      </div>
      <div className='second-half'>
      <img src={img} alt="" />
   <div className='img-div'>
    </div>  
    <div className='round2'></div>
    <div className='round3'></div>
   
      </div>
      </div>

{/* About section */}

      <div className='about'>
        <div className='ab1'>
        <div className='ab11'>
          <h1>Get Customised Craft Products</h1>
          <button onClick={()=>{navigate('/Craft-products')}}>Shop Now <BsArrowRight/></button>
          </div>
          <div>
          <img src={about2} alt="" />
        </div>
        </div>

        <div className='ab2'>
        <div className='ab22'>
          <h1>Buy our Premium Art Works</h1>
          <button  onClick={()=>{navigate('/Art-products')}}>Shop Now <BsArrowRight/></button>
          </div>
          <div>
          <img src={about3} alt="" className='img1'/>
        </div>
        </div>

        <div className='ab3'>
        <div className='ab33'>
          <h1>Check these Beautiful Decors</h1>
          <button onClick={()=>{navigate('/Home-decor')}}>Shop Now <BsArrowRight/></button>
          </div>
          <div>
          <img src={img1} alt="" />
        </div>
        </div>
       
      </div>
      </div>
  )
}

export default CreativeSection