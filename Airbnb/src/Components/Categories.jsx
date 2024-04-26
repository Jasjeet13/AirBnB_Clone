import React from 'react'
import { Container,Button,Grid,Typography } from '@mui/material'

function Categories() {
  return (
    <Container>
        <Grid container spacing={2} justifyContent={'center'}>
            <Grid item>
                <Button sx={{ flexDirection: 'column',
                    '&:hover': {
                        '& img': {
                          opacity: 1, 
                        },
                        '& .MuiTypography-root': {
                          opacity: 1, 
                        },
                      },
                    }}>
                    <div>
                        <img src='https://a0.muscache.com/pictures/957f8022-dfd7-426c-99fd-77ed792f6d7a.jpg' style={{ marginRight: '8px',height: '26px' , opacity:'0.7' }}/>
                    </div>
                    <Typography sx={{textTransform:'none',fontSize:'14px',color:'black',margin:'0',padding:'0',fontWeight:'bolder', opacity:'0.7'}}>
                        Surfing
                    </Typography>
                </Button>
            </Grid>

            <Grid item>
                <Button sx={{ flexDirection: 'column'}}>
                    <div>
                        <img src='https://a0.muscache.com/pictures/1b6a8b70-a3b6-48b5-88e1-2243d9172c06.jpg' style={{ marginRight: '8px',height: '26px' , opacity:'0.7'}}/>
                    </div>
                    <Typography sx={{textTransform:'none',fontSize:'14px',color:'black',margin:'0',padding:'0',fontWeight:'bolder', opacity:'0.7'}}>
                        Castles
                    </Typography>
                </Button>
            </Grid>

            <Grid item>
                <Button sx={{ flexDirection: 'column' }}>
                    <div>
                        <img src='https://a0.muscache.com/pictures/3b1eb541-46d9-4bef-abc4-c37d77e3c21b.jpg' style={{ marginRight: '8px',height: '26px', opacity:'0.7' }}/>
                    </div>
                    <Typography sx={{textTransform:'none',fontSize:'14px',color:'black',margin:'0',padding:'0',fontWeight:'bolder', opacity:'0.7'}}>
                        Amazing Views
                    </Typography>
                </Button>
            </Grid>

            <Grid item>
                <Button sx={{ flexDirection: 'column' }}>
                    <div>
                        <img src='https://a0.muscache.com/pictures/4d4a4eba-c7e4-43eb-9ce2-95e1d200d10e.jpg' style={{ marginRight: '8px',height: '26px' , opacity:'0.7'}}/>
                    </div>
                    <Typography sx={{textTransform:'none',fontSize:'14px',color:'black',margin:'0',padding:'0',fontWeight:'bolder', opacity:'0.7'}}>
                        Treehouses
                    </Typography>
                </Button>
            </Grid>

            <Grid item>
                <Button sx={{ flexDirection: 'column' }}>
                    <div>
                        <img src='https://a0.muscache.com/pictures/10ce1091-c854-40f3-a2fb-defc2995bcaf.jpg' style={{ marginRight: '8px',height: '26px', opacity:'0.7' }}/>
                    </div>
                    <Typography sx={{textTransform:'none',fontSize:'14px',color:'black',margin:'0',padding:'0',fontWeight:'bolder', opacity:'0.7'}}>
                        Beaches
                    </Typography>
                </Button>
            </Grid>

        </Grid>
    </Container>
  )
}

export default Categories