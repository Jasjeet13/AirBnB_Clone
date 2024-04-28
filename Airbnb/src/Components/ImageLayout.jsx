import React from 'react'
import { Grid,Box } from '@mui/material'

function ImageLayout() {

  const images = ["https://a0.muscache.com/im/pictures/b922ad1f-c1dd-43d9-9277-cb6afe4a78d9.jpg?im_w=960",
  "https://a0.muscache.com/im/pictures/f53744a3-c49f-4b45-8e11-5abd87ba29cf.jpg?im_w=480",
  "https://a0.muscache.com/im/pictures/miso/Hosting-47575422/original/c4b056af-1880-4d66-9bbd-aa1cca41c992.jpeg?im_w=480",
  "https://a0.muscache.com/im/pictures/miso/Hosting-47575422/original/d9e7bdae-f147-42b5-a457-c7dff0535dc9.jpeg?im_w=480",
  "https://a0.muscache.com/im/pictures/miso/Hosting-47575422/original/18087f64-ddbd-4d4e-9eb6-95d2fe297da6.jpeg?im_w=480"];

  const styles = {

    gridConatiner :{
      margin:'10px',
      justifyContent:'center',
      alignItems:'stretch'
    },

    gridItem:{
      padding:'5px',
    },

    box:{
      // border:'1px solid black',
      height:'370px',
      padding:'0px'
    },

    subBox:{
      background:'black',
      height:'180px',
      padding:'0'

    },

    imageBox:{
      width: '100%',
      height: '100%'
    }
  }
  return (
    
    <Grid container spacing={0.5} sx={styles.gridConatiner}>
      <Grid item xs={6} md={4} sx={styles.gridItem}>
        <Box sx={styles.box}>
          <img src={images[0]} alt="Images 1" style={styles.imageBox}/>
        </Box>
      </Grid>

      <Grid item xs={6} md={5} sx={styles.gridItem}>

        <Grid container spacing={0.5}>
            {images.slice(1).map( (image , index) => (

              <Grid item key={index} xs={6} md={5} sx={styles.gridItem}>
                <Box sx={styles.subBox}>
                  <img src={image} alt={`Image $(index+2)`} style={styles.imageBox}/>
                </Box>
              </Grid>
            ))}
        </Grid>

      </Grid>
    </Grid>
    
  )
}

export default ImageLayout