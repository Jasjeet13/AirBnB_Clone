import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardActions from '@mui/material/CardActions';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Slider from 'react-slick';

const beachData = {
  "Beach": [
    {
      "id": 1,
      "name": "Ko Samui,Thailand",
      "location": "On Laem Yai",
      "price": "₹4,890 night",
      "images": [
        "https://a0.muscache.com/im/pictures/893a4bed-34c1-400f-b8b9-bb8f482b3211.jpg?im_w=1200",
        "https://a0.muscache.com/im/pictures/5077d60f-8d0f-4bda-8387-6243977e4ffd.jpg?im_w=720",
        "https://a0.muscache.com/im/pictures/216de0cb-206e-459d-a128-6a96cdf69dfb.jpg?im_w=720",
        "https://a0.muscache.com/im/pictures/216de0cb-206e-459d-a128-6a96cdf69dfb.jpg?im_w=720",
        "https://a0.muscache.com/im/pictures/9634123c-6116-4895-aaf9-ca6d3aa0a5ef.jpg?im_w=720"
      ]
    }
  ]
};

const BeachCard = ({ beach }) => {
  const sliderSettings = {
    arrows: true,
  };

  return (
    <Card>
      <Slider {...sliderSettings}>
        {beach.images.map((image) => (
          <img key={image} src={image} alt={`${beach.name} Image`} />
        ))}
      </Slider>
      <CardHeader
        title={beach.name}
        subheader={beach.location}
      />
      <CardContent>
        <Typography variant="body2" color="textSecondary">
          Price: {beach.price} per night
        </Typography>
        {/* Add more content specific to the beach data */}
      </CardContent>
      {/* Rest of your card content */}
    </Card>
  );
};

export default BeachCard;
