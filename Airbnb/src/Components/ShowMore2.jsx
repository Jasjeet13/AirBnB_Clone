import { Box,Typography } from '@material-ui/core'
// import './ShowMore2.css'
import './ShowMore.css'
import React from 'react'

function ShowMore2() {

  const paraStyles = {
    typoHeading : {
      fontWeight : '600',
      fontSize:'25px',
      margin : '12px 0 12px 0'
    },

    typoPara : {
      fontSize: '14px',
      margin: '10px 0 10px 0',
      color : 'rgb(57, 57, 57)',
      letterSpacing : '1'
    }
  }
  return (
    // <Box className='ShowMore2-overlay'>
    <Box className='ShowMore2-box'>
        <Typography variant="h4" heading style={paraStyles.typoHeading} >
            About this space
        </Typography>

        <Typography variant='body2' paragraph style={paraStyles.typoPara}>

        Escape the hustle and bustle of the city and immerse yourself in the beauty of traditional South Indian architecture at Honeychilk Palace, an epitome and tradition and luxury near Bangalore. As you step through the unique red brick facade, you'll be transported to a world of rustic old-world charm, with interiors that exude warmth and character. While you lounge on the beautiful lawns and take in the South Indian landscape, don't forget to appreciate the enchanting ambiance that surrounds you.
        The space
        The traditional architecture of this home seamlessly blends with its modern amenities, ensuring a comfortable and luxurious stay. Every element of this home has been carefully chosen to represent the rich culture and tradition of the South Indian locale in order to provide a truly authentic South Indian experience. You will be made to feel welcome by the staff's cordial South Indian hospitality. This opulent mansion has plenty to offer everyone, whether you're planning a family holiday or a romantic trip. You can also visit the bustling metropolis of Bangalore during the day, and in the evenings retire to the tranquility of this abode.

        This palatial home is not just a place to stay, but an experience to be savored. Let the charm of South India and the warmth of our hospitality envelop you, making your vacation truly unforgettable.

        For a comfortable and secure stay, please take the time to read the Home Truths, House Rules, and Policies thoroughly.
        </Typography>

        <Typography variant="h4" heading style={paraStyles.typoHeading} >
        Honeychilk Palace is special because of its:
        </Typography>

        <Typography variant='body2' paragraph style={paraStyles.typoPara}>
        - Rustic and old-world interiors with all modern conveniences <br />
        - Quintessential location with unending views of the vivid hues of the surrounding flora<br />
        - Unique facade and structure made up of red bricks and wooden craftsmanship<br />
        - Quaint and traditional aangan<br />
        - Luxurious and culture-rich South-Indian hospitality<br />
        - Lush landscaped lawn that blends well with the equally verdurous surroundings<br />
        - Proximity to Dharampuri and Bangalore’s famous tourist attractions<br />
        </Typography>

        <Typography variant='body2' paragraph style={paraStyles.typoPara}>
        We care for your absolute comfort! To that effect, we provide:
        - Wi-Fi, TV, inverter, generator
        - Medical kit, mosquito repellent, fire extinguisher
        - Wardrobes, hangers, electric kettles
        - Geysers, towels, toiletries
        - Secured parking space for up to 20 cars

        This is neither a wheelchair-friendly nor a pet-friendly property.

        </Typography>
    </Box>
    // </Box>
  )
}

export default ShowMore2