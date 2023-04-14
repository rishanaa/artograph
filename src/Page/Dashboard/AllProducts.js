import React from "react";
import { useEffect } from "react";
import { Table } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Navigate, useNavigate } from "react-router-dom";
import { Form } from "reactstrap";
import logo from "../../Components/Images/logo.png";
import { allProducts, deleteProduct } from "../../Store/Api";

function AllProducts() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { products, loading } = useSelector((state) => state.product);

  useEffect(() => {
    dispatch(allProducts());
  }, [dispatch]);

  // delete costomer
  const DeleteProduct=(_id)=>{
    dispatch(deleteProduct(_id))
  }

  return (
    <div
      style={{
        marginTop: "-5%",
        backgroundColor: "white",
        position: "absolute",
        width: "100%",
      }}
    >
      <img
        src={logo}
        alt="logo"
        style={{ marginTop: "10px", marginLeft: "3%" }}
        className="img3"
        onClick={() => {
          navigate("/");
        }}
      />

      <div
        className="next"
        style={{ marginBottom: "30px", marginLeft: "30px" }}
      >
        {" "}
        <h2>All Products</h2>
      </div>
      <Form>
        {/* {
          loading ? 'loading...':
        <> */}
          <div style={{display:"flex",justifyContent:"space-between",margin:"30px"}}>
        <div>{'Total : ' + products.length}</div>
        <div>
      <button style={{border:"none",backgroundColor:'#b60d5d',color:'white',borderRadius:'3px',padding:'10px 15px'}}
            className="button1"
            onClick={() => {
              navigate("/add-items");
            }}
          >
            Add new Product
          </button>
          </div>
          </div>
      <div className="allproducts" style={{ margin: "30px" }}>
       
        <Table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Product Name</th>
              <th>Description</th>
              <th>Price</th>

              <th>Action</th>
            </tr>
          </thead>
          <tbody>{products.map((item,key)=>(
            <tr key={key}>
              <th scope="row">{key = key + 1}</th>
              <td>{item?.name}</td>
              <td>{item?.description}</td>
              <td>{item?.price}</td>
              <td>
                <div>
                  <button
                    style={{
                      border: "2px solid #b60d5d",
                      backgroundColor: "white",
                      color: "#b60d5d",
                      borderRadius: "3px",
                      padding: "5px 15px",
                    }}
                    onClick={()=>{DeleteProduct(item?._id)}}
                  >
                    Delete
                  </button>
                  <button
                    style={{
                      border: "2px solid #b60d5d",
                      backgroundColor: "#b60d5d",
                      color: "white",
                      borderRadius: "3px",
                      padding: "5px 15px",
                      marginLeft: "20px",
                    }}
                    onClick={() => {
                      navigate(`/update-product/${item?._id}`);
                    }}
                  >
                    Update
                  </button>
                </div>
              </td>
            </tr>
            ))}
          </tbody>
        </Table>
        </div>
        {/* </>
        } */}
      
      </Form>
    </div>
  );
}
export default AllProducts;
