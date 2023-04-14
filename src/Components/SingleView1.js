import React, { useState } from "react";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import { AiTwotoneStar, AiOutlineStar } from "react-icons/ai";
import "../Components/Stylesheet/SingleView.css";
import frame1 from "../Components/Images/frame1.webp";
import frame2 from "../Components/Images/frame1.3.webp";
import frame3 from "../Components/Images/frame1.2.webp";
import "../Components/Stylesheet/Login.css";
import {BiRupee} from 'react-icons/bi'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { Navigation, Pagination} from 'swiper';



function SingleView1() {
  const [count, setCounter] = useState(1);

  const Increment = () => {
    if (count >= 10) return;
    setCounter(count + 1);
  };
  const Decrement = () => {
    if (count <= 1) return;
    setCounter(count - 1);
  };
  
  

  return (
    <div className="main">
      <Container>
        <div className="card-div">
          <Card className="table-card shadow-lg p-3 mb-5 bg-white rounded ">
            <Row>
              <Col md-6>
                <div className="aa">
                  <div className="img">
                  <Swiper

      modules={[Navigation, Pagination]}
      spaceBetween={1}
      slidesPerView={1}
      slidesPerGroup={1}
      loop={true}
      loopFillGroupWithBlank={true}
      navigation={true}
      pagination={{ clickable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
    >
      <SwiperSlide><img src={frame1} style={{width:'200px',height:'250px',marginTop:'50px',marginBottom:'50px',marginLeft:'90px'}}/></SwiperSlide>
      <SwiperSlide><img src={frame2} style={{width:'240px',height:'250px',marginTop:'50px',marginBottom:'50px',marginLeft:'90px'}}/></SwiperSlide>
      <SwiperSlide><img src={frame3} style={{width:'220px',height:'250px',marginTop:'50px',marginBottom:'50px',marginLeft:'90px'}}/></SwiperSlide>
      
    </Swiper>
                  
      
                  </div>

                  <div className="col-md-3 col-lg-2 col-xl-2 d-flex counter"style={{justifyContent: "center",
                      marginLeft: "-50px",marginTop: "-15px"}}>

                    <button style={{fontSize: "20px",height: "43px",border: "none",backgroundColor:'black',color:'white',marginLeft:'40px',paddingLeft:'30px'
                      }} onClick={() => Decrement()}>-</button>

                    <h3 style={{padding: "8px 3px",fontSize: "21px",fontWeight:'100',height:'43px',paddingTop:'9px',
                      backgroundColor:'black',color:'white'}}>{count}
                      </h3>

                    <button style={{fontSize: "20px",height: "43px",border: "none",backgroundColor:'black',color:'white',paddingRight:'30px'
                      }} onClick={() => Increment()}>+</button>
                  </div>
                </div>
              </Col>
              <Col md-6>
                <h4 className="review">
                  <AiTwotoneStar />
                  <AiTwotoneStar />
                  <AiTwotoneStar />
                  <AiTwotoneStar />
                  <AiOutlineStar />
                </h4>

                <h3>Moments photo frame with costomised photos</h3>

                <h6>Availabilty(In stock)</h6>
                <h3 style={{ color: "#b60d5d", marginTop: "15px" }}><BiRupee/>
                  497
                </h3>

                <div className="login-html" style={{ marginTop: "5px" }}>
                  <input id="tab-1" type="radio" name="tab" className="sign-in"/>
                  <label for="tab-1" className="tab">Specifications</label>
                  <input id="tab-2" type="radio" name="tab" className="sign-up"/>
                  <label for="tab-2" className="tab"> About</label>
                  <div class="login-form">
                    <div className="sign-in-htm">
                      <p>This is an costomised photo frame with 16 photos with width and height 30*30 
                        and sixe also can be customised</p>
                    </div>
                    <div className="sign-up-htm">
                      <p>Black,16 photos
                      </p>
                    </div>
                  </div>
                </div>
                <div className="d-flex justify-content-center button2">
                  <Button color="light" className="m-1" style={{backgroundColor: "white", width: "190px",
                      marginLeft: "-50px",height: "45.88px",borderColor: "#b60d5d",color: "black",}}>Add to Cart
                  </Button>
                  <Button type="submit" className="shadow m-1" style={{backgroundColor: "#b60d5d",width: "190px",
                      border: "none",height: "45.88px",}}>Contact
                  </Button>
                </div>
              </Col>
            </Row>
          </Card>
        </div>
      </Container>
    </div>
  );
}

export default SingleView1;
