import React from 'react'
import { Link } from 'react-router-dom';
import { Container,Button,Grid,Typography } from '@mui/material'
import "./Categories.css"

function Categories() {
  return (
    <Container className='main-container'>
        <Grid container spacing={2} justifyContent={'center'}>
            <Grid item>
                
                <Button className='button'>
                <Link to="/Surfing" className='link'>
                    <div>
                        <img src='https://a0.muscache.com/pictures/957f8022-dfd7-426c-99fd-77ed792f6d7a.jpg' style={{ marginRight: '8px',height: '24px' , opacity:'0.7' }}/>
                    </div>
                    <Typography className='typo' variant="body1" sx={{fontSize:'12px',fontWeight:'600'}}>
                        Surfing
                    </Typography>
                </Link>
                </Button>
            </Grid>

            <Grid item>
                <Button className='button'>
                    <Link to="/Castles" className='link'>
                    <div>
                        <img src='https://a0.muscache.com/pictures/1b6a8b70-a3b6-48b5-88e1-2243d9172c06.jpg' style={{ marginRight: '8px',height: '24px' , opacity:'0.7'}}/>
                    </div>
                    <Typography className='typo' variant="body1" sx={{fontSize:'12px',fontWeight:'600'}}>
                        Castles
                    </Typography>
                    </Link>
                </Button>
            </Grid>


            <Grid item>
                <Button className='button'>
                    <Link to="/Treehouses" className='link'>
                    <div>
                        <img src='https://a0.muscache.com/pictures/4d4a4eba-c7e4-43eb-9ce2-95e1d200d10e.jpg' style={{ marginRight: '8px',height: '24px' , opacity:'0.7'}}/>
                    </div>
                    <Typography className='typo'  variant="body1" sx={{fontSize:'12px',fontWeight:'600'}}>
                        Treehouses
                    </Typography>
                    </Link>
                </Button>
            </Grid>

            <Grid item>
                <Button className='button'>
                    <Link to="/Beaches" className='link'>
                    <div>
                        <img src='https://a0.muscache.com/pictures/10ce1091-c854-40f3-a2fb-defc2995bcaf.jpg' style={{ marginRight: '8px',height: '26px', opacity:'0.7' }}/>
                    </div>
                    <Typography className='typo' variant="body1" sx={{fontSize:'12px',fontWeight:'600'}}>
                        Beaches
                    </Typography>
                    </Link>
                </Button>
            </Grid>

            <Grid item>
                <Button className='button'>
                    <Link to="/AmazingViews" className='link'>
                    <div>
                        <img src='https://a0.muscache.com/pictures/3b1eb541-46d9-4bef-abc4-c37d77e3c21b.jpg' style={{ marginRight: '8px',height: '24px', opacity:'0.7' }}/>
                    </div>
                    <Typography className='typo' variant="body1" sx={{fontSize:'12px',fontWeight:'600'}}>
                        Amazing Views
                    </Typography>
                    </Link>
                </Button>
            </Grid>
            

        </Grid>
    </Container>
  )
}

export default Categories