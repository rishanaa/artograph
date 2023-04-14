import React from "react";
import "../../Components/Stylesheet/CreateProduct.css";
import { useState } from "react";
import logo from "../../Components/Images/logo.png";
import { useNavigate, useParams } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import {getProductDetail,updateProduct} from '../../Store/Api'


function UpdateProduct() {
  const [file, setFile] = useState([]);

  function uploadSingleFile(e) {
    setFile([...file, URL.createObjectURL(e.target.files[0])]);
    console.log("file", file);
  }

  

  function deleteFile(e) {
    const s = file.filter((item, index) => index !== e);
    setFile(s);
    console.log(s);
  }
  const navigate = useNavigate();
  const dispatch=useDispatch();
  const params=useParams()
 
  const [updateProductData,setUpdateProductData]=useState({});

  useEffect(()=>{
    dispatch(getProductDetail(params.id))
  },[dispatch])
  const {productDetail}=useSelector((state)=>state.product)
  console.log(productDetail)

  useEffect(()=>{
    setUpdateProductData(productDetail)
  },[productDetail]);

  const handleUpdateProduct=(e)=>{
    setUpdateProductData({
      ...updateProductData,
      [e.target.name]:e.target.value
    })
  }
  const handleUpdateSubmit=(e)=>{
    e.preventDefault()
    dispatch(updateProduct({ptoductId:productDetail._id,productData:updateProductData}))
  }

  const {success}=useSelector((state)=>state.product)
  useEffect(()=>{
    if(success) navigate('/all-products')
  },[success])
  


  return (
    <div className="addProducts">
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <div>
        <img src={logo} alt="logo" className="img3" onClick={()=>{navigate('/')}}/>
          <h2>Update Product</h2>
          <p className="p1"></p>
        </div>
        <div></div>
      </div>
      <form onSubmit={handleUpdateSubmit} style={{boxShadow:'rgba(149, 157, 165, 0.2) 0px 8px 24px'}}>
      <div className="addproduct">
        {file.length > 0 &&
          file.map((item, index) => {
            return (
              <div key={item} className='products'>
                <button className="btn1" onClick={deleteFile} >
                  delete
                </button><br/>
                < img src={item} className='img1' alt="" />
                
              </div>
            );
          })}
      </div>

      <div>
        <input className="inputs1"
          type="file"
          disabled={file.length === 5}
          onChange={uploadSingleFile}
        />
      </div>
      <div className="listing">
        <h4>Listing Details</h4>
        <p>Tell the world all about your item and why they'll love it.</p>
          
        <div style={{ display: "flex" }}>
            <div className="group">
              <h3>Title :</h3>
              <p>This will help users to search for your item</p>
            </div>
            <input type="text" name="name" value={updateProductData?.name} 
                   onChange={handleUpdateProduct}/>
          </div>
          <div style={{ display: "flex" }}>
            <div className="group">
              <h3>Category :</h3>
              <p>
                Type a two- or three-word description of your item to get
                category suggestions that will help more shoppers find it.
              </p>
            </div>
            {/* <input  type="text" name="category" /> */}
          </div>

          <div style={{ display: "flex" }}>
            <div className="group">
              <h3>Description :</h3>
              <p>
                Start with a brief overview that describes your item's finest
                features
              </p>
            </div>
            <input type="text" name="description" value={updateProductData?.description} 
                   onChange={handleUpdateProduct}/>
          </div>
          <div style={{ display: "flex" }}>
            <div className="group">
              <h3>Tags :</h3>
              <p>
                This is what words might someone use to search for your product
              </p>
            </div>
            {/* <input type="text" placeholder="shape,color,functions etc" name="tags"/> */}
          </div>

          <div style={{ display: "flex" }}>
            <div className="group">
              <h3>Materials :</h3>
              <p></p>
            </div>
            {/* <input type="text" placeholder="Ingredients,components etc" name="materials" /> */}
          </div>

          <div style={{ display: "flex" }}>
            <div className="group">
              <h3>Price :</h3>
              <p></p>
            </div>

            <input type="number" name="price" value={updateProductData?.price} 
                                 onChange={handleUpdateProduct}/>
            {/* <input type="number" placeholder="$ Everywhere else" /> */}
          </div>
          <div className="button">
            <button
              className="but1"
              onClick={() => {
                navigate("/");
              }}
            >
              Back
            </button>
            <button className="but2" type="submit">
              Update</button>
          </div>
      </div>
      </form>

    </div>
  );
}

export default UpdateProduct;
