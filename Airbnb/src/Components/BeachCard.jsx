import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
// import Chevrolet from "../Images/Chevrolet.jpg";

export default function BeachCard() {
  return (
    <div style={{ margin: "25%" }}>
      <Card sx={{ maxWidth: 345 }}>
        <CardMedia
          component="img"
          height="140"
          image={Chevrolet}
          alt="Chevrolet"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Lizard
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Chevrolet is an iconic American car brand known for its reliable,
            dependable, and affordable vehicles. Founded in 1911, Chevy has
            become one of the most recognizable car brands in the world.
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">Share</Button>
          <Button size="small">Learn More</Button>
        </CardActions>
      </Card>
    </div>
  );
}