import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Card, CardContent, Typography, Button, CardMedia } from '@mui/material';
import './DisplayCard.css'

function DisplayCard() {
  const images = [
    "https://a0.muscache.com/im/pictures/893a4bed-34c1-400f-b8b9-bb8f482b3211.jpg?im_w=1200",
    "https://a0.muscache.com/im/pictures/5077d60f-8d0f-4bda-8387-6243977e4ffd.jpg?im_w=720",
    "https://a0.muscache.com/im/pictures/216de0cb-206e-459d-a128-6a96cdf69dfb.jpg?im_w=720",
    "https://a0.muscache.com/im/pictures/216de0cb-206e-459d-a128-6a96cdf69dfb.jpg?im_w=720",
    "https://a0.muscache.com/im/pictures/9634123c-6116-4895-aaf9-ca6d3aa0a5ef.jpg?im_w=720"
  ];

  const PrevArrow = (props) => {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", left: "10px", zIndex: "1" }}
        onClick={onClick} >
      </div>
    );
  };

  const NextArrow = (props) => {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", right: "10px", zIndex: "1" }}
        onClick={onClick}>
      </div>
    );
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,

    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
    appendDots: (dots) => (
        <div style={{ position: "absolute", bottom: "10px", width: "100%" }}>
          <ul className="custom-dots">
            {React.Children.toArray(dots).map((dot, index) => (
              <li key={index} className="custom-dot">{dot}</li>
            ))}
          </ul>
        </div>
      )
  
  };

  return (
    <Card elevation={0} style={{ width: 350, height: 400 }}>
      <CardContent>
        <Slider {...settings}>
          {images.map((image, index) => (
            <div key={index}>
              <CardMedia
                component="img"
                height="280"
                image={image}
                alt={`Image ${index + 1}`}
                style={{borderRadius:"10px"}}
              />
            </div>
          ))}
        </Slider>
        <Typography variant="h6" style={{fontSize:"15px" , fontWeight:"700", margin:"10px"}}>
            Ko Samui,Thailand <br/>
        </Typography>

        <Typography variant="h4" style={{fontSize:"14px" ,margin:"10px",color:"#9fa1a1"}}>
            On Laem Yai <br/>
        </Typography>

        <Typography variant="h4" style={{fontSize:"14px" ,margin:"10px",color:"#9fa1a1"}}>
            <span style={{fontWeight:"700",color:"black"}}>₹68,981</span> night <br/>
        </Typography>

      </CardContent>
    </Card>
  );
}

export default DisplayCard;