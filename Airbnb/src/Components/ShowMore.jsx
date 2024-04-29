import React, { useState } from 'react'
import './ShowMore.css'
import './ShowMore2.css'
import { Box, Typography } from '@material-ui/core'
import { Link } from 'react-router-dom'

function ShowMore() {
    const [showMoreVisible,setshowMoreVisible]=useState(false);

    const handleVisible = () => {
        setshowMoreVisible(true);
    };

  return (
    <Box className={`Main-box-${showMoreVisible ? 'Notvisible' : ''}`}>
        <Typography variant="body1" paragraph className='para'>
            Escape the hustle and bustle of the city and immerse yourself in the beauty of 
            traditional South Indian architecture at Honeychilk Palace, an epitome and 
            tradition and luxury near Bangalore. As you step through the unique red brick 
            facade, you'll be transported to a world of rustic old-world charm, with 
            interiors that exude warmth and character. While you lounge on the beautiful 
            lawns and take in the South Indian landscape, don't forget to appreciate the 
            enchanting ambiance that surrounds you ....
        </Typography>

        <Link to="/ShowMore2" className="show-more-link" onClick={handleVisible}>Show More</Link>
    </Box>
  )
}

export default ShowMore