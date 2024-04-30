import React from 'react'
import { Grid,Box } from '@mui/material'

function ImageLayout({images}) {

  const image = images;
  // console.log("Images",image);

  const styles = {

    gridConatiner :{
      marginTop:'10px',
      marginBottom:'10px',
      // justifyContent:'center',
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
      <Grid item xs={6} md={6} sx={styles.gridItem}>
        <Box sx={styles.box}>
          <img src={image[0]} alt="Images 1" style={styles.imageBox}/>
        </Box>
      </Grid>

      <Grid item xs={6} md={5} sx={styles.gridItem}>

        <Grid container spacing={0.5}>
            {images.slice(1).map( (img , index) => (

              <Grid item key={index} xs={6} md={6} sx={styles.gridItem}>
                <Box sx={styles.subBox}>
                  <img src={img} alt={`Image $(index+2)`} style={styles.imageBox}/>
                </Box>
              </Grid>
            ))}
        </Grid>

      </Grid>
    </Grid>
    
  )
}

export default ImageLayout