import React, { useEffect, useState } from 'react'
import { Button, Container } from 'react-bootstrap'
import frame1 from '../Components/Images/frame1.webp'
import { MdDelete } from 'react-icons/md';
import { BiRupee} from 'react-icons/bi'
import {Row,Col} from 'react-bootstrap'
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getCartProducts,deleteCartProduct } from "../Store/Api";


function Cart() {

    const[count,setCounter] =useState(1);

    const Increment = () => {
        if (count >= 10) return;
        setCounter(count + 1);
      };
    const Decrement = ()=>{
        if(count <= 1) 
        return
        setCounter(count - 1)
    }

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { carts} = useSelector((state) => state.cart);
  
  

  useEffect(() => {
    dispatch(getCartProducts());
  }, [dispatch]);

  // delete cart
  const DeleteCartProduct=(_id)=>{
    dispatch(deleteCartProduct(_id))
  }
   
    
    
    return (
       <div>
        <div>{'Total : ' + carts.length}</div>
        {carts.map((item)=>(
        <Row style={{justifyContent:'center',alignItems:'center',boxShadow:'rgba(149, 157, 165, 0.2) 0px 8px 24px',marginTop:'40px',paddingLeft:'40px'}}>
            {/* <div style={{display:'flex',justifyContent:'center',alignItems:'center',boxShadow:'rgba(149, 157, 165, 0.2) 0px 8px 24px',marginTop:'40px'}}> */}
            
              <Col md-12>
                        <div style={{width:'100px',height:'150px'}}>
                            <img src={frame1} style={{width:'100%',height:'auto'}}
                                 alt="product" ></img>
                        </div>
                </Col>
                <Col md-6>

                        <div >
                            <h5 >Moments photo frame with costomised photos</h5>
                        </div>
                        </Col>
                        <Col md-6>
                        <div className='d-flex' style={{justifyContent:'baseline'}} title='quantity'>
                        <button style={{fontSize: "20px",height: "43px",border: "none",backgroundColor:'black',color:'white',marginLeft:'40px',paddingLeft:'30px'
                      }} onClick={() => Decrement()}>-</button>

                    <h3 style={{padding: "8px 3px",fontSize: "21px",fontWeight:'100',height:'43px',paddingTop:'9px',
                      backgroundColor:'black',color:'white'}}>{count}
                      </h3>

                    <button style={{fontSize: "20px",height: "43px",border: "none",backgroundColor:'black',color:'white',paddingRight:'30px'
                      }} onClick={() => Increment()}>+</button>

                        </div>
                        </Col>
                        <Col md-6>
                        <div>
                            <h5 className="mb-0" style={{fontSize:'25px'}}><BiRupee />499</h5>
                        </div>
                        </Col>
                        <Col md-6>
                        <div >
                            <MdDelete size={27} color={'#DC3545'} title='delete item' onClick={()=>{DeleteCartProduct(item?._id)}}/>
                        </div>
                        </Col>
                        <Col md-6>
                        <div 
                        >
                            <Button type="button"  style={{ fontSize:'16px' ,color:'white',backgroundColor:'#b60d5d',border:'none',padding:'15px 30px'}}>Contact</Button>
                            
                          
                        </div>
                        </Col>
                        
                    {/* </div>    */}
                    </Row> 
                     ))}        
                    </div>  
    )
}

export default Cart