import Hostedby from "./Hostedby";
import Section2 from "./Section2";
import WhatPlaceOffers from "./WhatPlaceOffers";
import './AboutPlace.css';
import { useParams } from 'react-router-dom';

export default function AboutPlace({data}) {
  const { id } = useParams();
  const castle = data.find(castle => castle.id === parseInt(id));

  return (
    <>
      <h2>castle.</h2>
      <p className="sublie">3 guests. 1 bedroom. 1 bed. 1 bathroom</p>
      <Hostedby />
      <hr></hr>
      <Section2 />
      <hr></hr>
      <p className="about">
        Get ready to escape to the Grey Rock Cabins, where you'll immerse
        yourself in breathtaking mountain views and reconnect with nature. As an
        eco-friendly haven nestled within the Cebu Protected Landscape, we've
        woven sustainability into every aspect of our retreat. From preserving
        the natural soil structure to harnessing the power of solar panels for
        our outdoor jacuzzi, we're committed to eco-conscious practices. Your
        unforgettable mountain escape begins at Grey Rock Mountain Cabins!....{" "}
        <a href="#">Show more.</a>
      </p>
      <hr />
      <WhatPlaceOffers />
      <button className="facilities">Show all 46 facilities</button>
      <hr></hr>
      <h2>Select check-in date</h2>
      <p>Add your travel dates for exact pricing</p>
    </>
  );
}
