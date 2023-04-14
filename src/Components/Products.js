import React from "react";
import { useEffect } from "react";
import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router";
import frame1 from "../Components/Images/frame1.webp";
import {BiRupee} from 'react-icons/bi'
import "../Components/Stylesheet/TrendingProducts.css";
import { getProductDetail } from "../Store/Api";
import { Link } from "react-router-dom";
import { cartProduct} from '../Store/Api'
import { useState } from "react";

function Products() {
  const dispatch = useDispatch();
  const params = useParams();
  const navigate = useNavigate();
 
  useEffect(() => {
    dispatch(getProductDetail(params.id));
  },[]);
  const {products} =useSelector((state)=> state.product)

  const [cartData]=useState({});
   console.log(cartData);

  const addCartSubmit=(e)=>{
    e.preventDefault();
    dispatch(cartProduct({cartData,navigate}))
  }

  return (
    <div className="gallery">
      {/* Trending products */}

      <div className="cards">
        
        <CardGroup className="group" style={{ border: "none" }}>
          {products.map((item)=>(
<Card
className="single-card"
            style={{ border: "none", borderRadius: "5px" }}
          >
            <div className="image-container">
             <Link to={`/single-view/${item?._id}`}>
              <Card.Img
                className="image"
                src={frame1}
            
              />
              </Link>
            </div>
            <Card.Body>
              <p>{item?.name}</p>
              <Card.Text
                className="description"
                onClick={() => {
                  navigate(`/single-view/${item?._id}`);
                }}
              >{item?.description}</Card.Text>
              <p></p>
              <div className="rate">
                <h4><BiRupee/>{item?.price}</h4>
                <button>
                add +
                </button>
              </div>
            </Card.Body>
          </Card>
          ))}

          
              
               
           
        </CardGroup>
      </div>
    </div>
  );
}

export default Products;
