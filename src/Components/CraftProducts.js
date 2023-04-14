import React from 'react';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import frame1 from '../Components/Images/frame1.webp';
import frame2 from '../Components/Images/frame2.webp'
import frame3 from '../Components/Images/frame3.webp'
import frame41 from '../Components/Images/frame4.1.webp';
import frame5 from '../Components/Images/frame5.webp';
import scrap1 from '../Components/Images/scrap1.webp';
import '../Components/Stylesheet/TrendingProducts.css';
import {BiRupee} from 'react-icons/bi'

function CraftProducts() {
  return (
    <div>
     <div className='cards'>
     
  <CardGroup className='group' style={{border:'none'}}>
  
      <Card className='single-card' style={{border:'none',borderRadius:'5px'}}>
        
        <div className='image-container'>
          <Card.Img className='image' src={frame1} /></div>
        <Card.Body>
          <p>Artograph</p>
          <Card.Text className='description'>
           Memories customised gift for {'friends and couples'}
          </Card.Text>
          <p>Black,16 photos</p>
          <div className='rate'>
            <h4><BiRupee/>497</h4>
            <button>Add +</button>
          </div>
        </Card.Body>
       
      </Card>
      <Card className='single-card' style={{border:'none',borderRadius:'5px'}}>
      <div className='image-container'>
          <Card.Img className='image' src={frame2} /></div>
        <Card.Body>
        <p>Artograph</p>
          <Card.Text className='description'>
            Wooden gifts Good Vibes Only {' Multi color frames '}
          </Card.Text>
          <p>Multi Color,3 frames</p>
          <div className='rate'>
            <h4><BiRupee/>175</h4>
            <button>Add +</button>
          </div>
        </Card.Body>
        
      </Card>
      <Card className='single-card' style={{border:'none',borderRadius:'5px'}}>
      <div className='image-container'>
          <Card.Img className='image' src={frame3} /></div>
        <Card.Body>
        <p>Artograph</p>
          <Card.Text className='description'>
            Wooden Gifts Good Vibes Only {' multi color Frame'}
          </Card.Text>
          <p>Black,1 frames</p>
          <div className='rate'>
            <h4><BiRupee/>134</h4>
            <button>Add +</button>
          </div>
        </Card.Body>
        
      </Card>
      <Card className='single-card' style={{border:'none',borderRadius:'5px'}}>
      <div className='image-container'>
          <Card.Img className='image' src={frame41} /></div>
        <Card.Body>
        <p>Artograph</p>
          <Card.Text className='description'>
          Personalised Photo Frame wooden {' for your loved ones'}
          </Card.Text>
          <p>Wooden,1 photo</p>
          <div className='rate'>
            <h4><BiRupee/>218</h4>
            <button>Add +</button>
          </div>
        </Card.Body>
        
      </Card >
      <Card className='single-card' style={{border:'none',borderRadius:'5px'}}>
      <div className='image-container'>
          <Card.Img className='image' src={frame5} /></div>
        <Card.Body>
        <p>Artograph</p>
          <Card.Text className='description'>
           Personalised Photo Frame white {' for your loved ones'}
          </Card.Text>
          <p>White,3 frames</p>
          <div className='rate'>
            <h4><BiRupee/>378</h4>
            <button>Add +</button>
          </div>
        </Card.Body>
        
      </Card>
      <Card className='single-card' style={{border:'none',borderRadius:'5px'}}>
      <div className='image-container' >
          <Card.Img className='image' style={{height:'100px'}} src={scrap1} /></div>
        <Card.Body>
        <p>Artograph</p>
          <Card.Text className='description'>
          Beautiful blue scrap book with black pages
           
          </Card.Text>
          <p> Blue & black,Pack of 1</p>
          <div className='rate'>
            <h4><BiRupee/>499</h4>
            <button>Add +</button>
          </div>
        </Card.Body>
        
      </Card>
    </CardGroup>

      </div>
     

    </div>
  )
}

export default CraftProducts