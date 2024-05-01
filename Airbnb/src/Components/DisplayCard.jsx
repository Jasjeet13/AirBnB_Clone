import React from 'react';
import { Link } from 'react-router-dom';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Card, CardContent, Typography, CardMedia, Grid } from '@mui/material';
import './DisplayCard.css';

function DisplayCard({ data, category }) {
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
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
  };
  

  return (
    <Grid container spacing={3} style={{ padding: "10px" }}>
      {data && data.map((item, index) => (
        <Grid item xs={6} sm={3} key={index}>
          <Card elevation={0} style={{ height: "100%" }}>
            <CardContent>
              <Slider {...settings}>
                {item.images && item.images.map((image, imageIndex) => (
                  <div key={imageIndex}>
                    <CardMedia
                      component="img"
                      height="280"
                      image={image}
                      alt={`Image ${imageIndex + 1}`}
                      style={{ borderRadius: "10px" }}
                    />
                  </div>
                ))}
              </Slider>

              <Link to={{ pathname: `/${category}/${item.id}`}} style={{textDecoration:'none',cursor:'pointer'}} >


                <Typography variant="h6" style={{ fontSize: "15px", fontWeight: "700", margin: "10px" , color:'black'}}>
                  {item.name} <br />
                </Typography>
                <Typography variant="h4" style={{ fontSize: "14px", margin: "10px", color: "#9fa1a1" }}>
                  {item.location} <br />
                </Typography>
                <Typography variant="h4" style={{ fontSize: "14px", margin: "10px", color: "#9fa1a1" }}>
                  <span style={{ fontWeight: "700", color: "black" }}>{item.price}</span> <br />
                </Typography>
              </Link>


            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
}

export default DisplayCard;
