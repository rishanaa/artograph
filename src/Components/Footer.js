import React from 'react'
import logo from '../Components/Images/logo2.jpg'
import {BsFacebook,BsInstagram,BsYoutube} from 'react-icons/bs'
import '../Components/Stylesheet/Header.css'

function Footer() {
  return (
    <div className='footer' >
      <div className='foot1' >
        <img src={logo} alt="logo" />
        <p>It is a platform for all those who make handmade products to sell them.
            and buyers goods at lowest price.here buyers can directly interact with sellers.
        </p>
        </div>
        <div className='foot2'>
            <h4>CONTACT US</h4>
            <h5>Phone: +(00) 0000000000</h5>
            <h5>Email: artograph@gmail.com</h5>
            <h5>Address: Sixth street armenia,abudabi city , AAA ,999999</h5>
            <h4>Connect with Us</h4>
        <div style={{display:'flex'}} className='icons'>
            <h4><BsFacebook/></h4>
            <h4><BsInstagram/></h4>
            <h4><BsYoutube/></h4>
        </div>
        </div>
        <div className='foot3'>
             <h4>LINKS</h4>
             <h5>Website Builder</h5>
             <h5>Download for windows</h5>
             <h5>Download for mac</h5>

        </div>
      
    </div>
  )
}

export default Footer
