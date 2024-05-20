import React from "react";
import { useState, useEffect } from "react";
import Hostedby from "./Hostedby";
import Section2 from "./Section2";
import Reserve from "./Reserve";
import WhatPlaceOffers from "./WhatPlaceOffers";
import "./AboutPlace.css";
import { useParams } from "react-router-dom";
import { Card, CardContent, Typography, CardMedia, Grid } from "@mui/material";
import ImageLayout from "./ImageLayout";
import { Link } from "react-router-dom";
import GuestDropdown from "./GuestDropdown";
import Footer2 from "./Footer2";
import Footer from "./Footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

export default function AboutPlace() {
  const { placeId, category } = useParams();
  const [placeData, setPlaceData] = useState({});
  const [showMore, setShowMore] = useState(false);

  const handleShowMoreClick = () => {
    setShowMore(true);
  };

  const handleCloseModal = () => {
    setShowMore(false);
  };

  useEffect(() => {
    console.log("placeId:", placeId);
    console.log("category:", category);

    const fetchData = async () => {
      const response = await fetch(
        `http://localhost:3000/${category}/${placeId}`
      );
      const data = await response.json();
      setPlaceData(data);
    };

    fetchData();
  }, [placeId, category]);

  console.log(placeData);

  const placeStyle = {
    gc: {
      width: "100%",
      alignItems: "center",
      justifyContent: "center",
      borderTop: "solid 1px rgba(0, 0, 0, 0.1)",
      // marginTop: "2%",
    },

    gc2: {
      width: "60%",
      alignItems: "center",
      justifyContent: "center",
    },

    h: {
      fontSize: "26px",
      fontWeight: "600",
      marginTop: "2%",
      marginBottom: "1%",
    },
  };

  return (
    <Grid container sx={placeStyle.gc}>
      <Grid container sx={{ width: "80%" }}>
        <Typography className="placename" variant="h3" sx={placeStyle.h}>
          <div>{placeData.heading}</div>
          {/* <div className="buttons">
            <button className="share">
              <a href="#">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  class="bi bi-box-arrow-up"
                  viewBox="0 0 16 16"
                >
                  <path
                    fill-rule="evenodd"
                    d="M3.5 6a.5.5 0 0 0-.5.5v8a.5.5 0 0 0 .5.5h9a.5.5 0 0 0 .5-.5v-8a.5.5 0 0 0-.5-.5h-2a.5.5 0 0 1 0-1h2A1.5 1.5 0 0 1 14 6.5v8a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 2 14.5v-8A1.5 1.5 0 0 1 3.5 5h2a.5.5 0 0 1 0 1z"
                  />
                  <path
                    fill-rule="evenodd"
                    d="M7.646.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1-.708.708L8.5 1.707V10.5a.5.5 0 0 1-1 0V1.707L5.354 3.854a.5.5 0 1 1-.708-.708z"
                  />
                </svg>
                Share
              </a>
            </button>
            <button className="save">
              <a href="#">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  class="bi bi-heart"
                  viewBox="0 0 16 16"
                >
                  <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143q.09.083.176.171a3 3 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15" />
                </svg>
                Save
              </a>
            </button>
          </div> */}
        </Typography>

        <Grid item xs={12}>
          {placeData.images && <ImageLayout images={placeData.images} />}
        </Grid>

        <Typography variant="h6" sx={{ fontWeight: "600" }}>
          {placeData.subheading}
        </Typography>

        <Grid item xs={12} />

        <Typography variant="body1" sx={{ fontSize: "15px", opacity: "0.7" }}>
          {placeData.bedroom} bedrooms . {placeData.bed} beds
        </Typography>

        <Grid item xs={12}>
          <Hostedby host={placeData.host} aboutHost={placeData.aboutHost} />
        </Grid>

        <Grid item xs={7}>
          <Section2 host={placeData.host} />
        </Grid>

        <Grid item xs={5}>
          <Reserve price={placeData.price} />
        </Grid>

        {/* <Grid item xs={12}>  */}
        <Grid
          item
          xs={6}
          sx={{
            borderTop: "solid 1px rgba(0, 0, 0, 0.1)",
            borderbottom: "solid 1px rgba(0, 0, 0, 0.1)",
          }}
        >
          <Typography
            variant="h6"
            sx={{ fontWeight: "600", margin: "4% 0 2% 0" }}
          >
            About this place
          </Typography>

          <Typography
            variant="body1"
            paragraph
            sx={{
              fontSize: "15px",
              color: "rgb(57, 57, 57)",
              letterSpacing: "1.5",
              marginBottom: "2%",
            }}
          >
            {placeData.aboutPlace}
          </Typography>

          <Grid item xs={12}>
            <Link
              to="#"
              style={{ color: "black", fontSize: "15px" }}
              onClick={handleShowMoreClick}
            >
              Show More ....
            </Link>
          </Grid>
        </Grid>
        {/* </Grid> */}

        <Grid item xs={12} sx={{ marginTop: "3%", marginBottom: "3%" }}>
          <Grid item xs={6} sx={{ borderTop: "solid 1px rgba(0, 0, 0, 0.1)" }}>
            <WhatPlaceOffers />
          </Grid>
        </Grid>

        <Grid
          item
          xs={12}
          sx={{ borderTop: "solid 1px rgba(0, 0, 0, 0.1)", marginBottom: "4%" }}
        >
          <Footer2 />
        </Grid>
      </Grid>

      {/* <Grid item xs={12}>
        <Footer />
      </Grid> */}

      {showMore && (
        <div className="modal-container">
          <div className="modal">
            <FontAwesomeIcon icon={faTimes} onClick={handleCloseModal} />

            <Typography
              variant="h6"
              sx={{ fontWeight: "600", margin: "4% 0 2% 0" }}
            >
              About this place
            </Typography>

            <Typography
              variant="body1"
              paragraph
              sx={{
                fontSize: "15px",
                color: "rgb(57, 57, 57)",
                letterSpacing: "1.5",
                marginBottom: "2%",
              }}
            >
              {placeData.aboutPlace}
            </Typography>

            <Typography
              variant="body1"
              paragraph
              sx={{
                fontSize: "15px",
                color: "rgb(57, 57, 57)",
                letterSpacing: "1.5",
                marginBottom: "2%",
              }}
            >
              {placeData.showMore}
            </Typography>
          </div>
        </div>
      )}

      {showMore && <div className="blur-background"></div>}
    </Grid>
  );
}
