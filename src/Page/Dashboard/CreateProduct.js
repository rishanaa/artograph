import React from "react";
import "../../Components/Stylesheet/CreateProduct.css";
import { useState } from "react";
import logo from "../../Components/Images/logo.png";
import { useNavigate } from "react-router-dom";
import { useDispatch,useSelector } from "react-redux";
import { createProduct } from "../../Store/Api";


function CreateProduct() {
  
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
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const {loading}=useSelector((state)=>state.product)

  const [createData,setCreateData]=useState({name:"",description:"",price:""});
   console.log(createData);

const productCreateSubmit=(e)=>{
  e.preventDefault();
  dispatch(createProduct({createData,navigate}))
}

// const handleChange = (e)=>{
//   setCreateData({
//     ...createData,
//     [e.target.name]:e.target.value
//   })
// }
  return (
    <div className="addProducts">
      <div >
        
        <div>
         
            <img src={logo} alt="logo" className="img3" onClick={()=>{navigate('/')}}/>
            <div style={{display:"flex",justifyContent:'space-between'}}>
              <div>
            <h2>Add New Product</h2>
            </div>
            <div>
          <button style={{border:"none",backgroundColor:'#b60d5d',color:'white',borderRadius:'3px',padding:'10px 25px'}}
            
            onClick={() => {
              navigate("/all-products");
            }}
          >
            Check Your Products
          </button>
        </div>
        </div>
          
          <p className="p1">
            Add some photos about your item.Fill out what you can for now.You
            will be able to update later.
          </p>
        </div>
        
      </div>
      <form onSubmit={productCreateSubmit} style={{boxShadow:'rgba(149, 157, 165, 0.2) 0px 8px 24px'}}>
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
     
      
   
      <div className="list">
      
      
      <div className="listing">
        <h4>Listing Details</h4>
        <p>Tell the world all about your item and why they'll love it.</p>

        
        <div style={{ display: "flex" }}>
            <div className="group">
              <h3>Title :</h3>
              <p>This will help users to search for your item</p>
            </div>
            <input type="text" name="name"  onChange={(e)=>setCreateData({
					...createData,name:e.target.value
				})}/>
          </div>
          <div style={{ display: "flex" }}>
            <div className="group">
              <h3>Category :</h3>
              <p>
                Type a two- or three-word description of your item to get
                category suggestions that will help more shoppers find it.
              </p>
            </div>
            <input  type="text" name="category" />
          </div>

          <div style={{ display: "flex" }}>
            <div className="group">
              <h3>Description :</h3>
              <p>
                Start with a brief overview that describes your item's finest
                features
              </p>
            </div>
            <input type="text" name="description" onChange={(e)=>setCreateData({
					...createData,description:e.target.value
				})}/>
          </div>
          <div style={{ display: "flex" }}>
            <div className="group">
              <h3>Tags :</h3>
              <p>
                This is what words might someone use to search for your product
              </p>
            </div>
            <input type="text" placeholder="shape,color,functions etc" name="tags"/>
          </div>

          <div style={{ display: "flex" }}>
            <div className="group">
              <h3>Materials :</h3>
              <p></p>
            </div>
            <input type="text" placeholder="Ingredients,components etc" name="materials" />
          </div>

          <div style={{ display: "flex" }}>
            <div className="group">
              <h3>Price :</h3>
              <p></p>
            </div>

            <input type="number" name="price" onChange={(e)=>setCreateData({
					...createData,price:e.target.value
				})}/>
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
              {loading ? 'saving...' : 'Save'}</button>
          </div>
    
       
      </div>
      </div>
     
      </form> 
    </div>
  );
}

export default CreateProduct;
