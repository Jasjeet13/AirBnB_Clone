import React from 'react'
import { Container, Grid } from "@mui/material";
import CreditCardForm from './CreditCardForm';

function Payment() {
    const Pstyle = {
        info: {
            margin: '10px 0 10px 10px',
            fontSize: '20px',
            fontWeight: '500'
        },

        infoText: {
            fontSize: '15px',
            margin: '10px 0 10px 10px'
        },

        gridItemStyle1: {
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            textAlign: 'center',

        },

        gridItemStyle2: {
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'left',
            justifyContent: 'center',
            textAlign: 'left',

        }
    };

  return (
    <Grid container sx={{width:'85%',margin:'20px auto'}}>

        <Grid item xs={6} style={Pstyle.gridItemStyle2}>
            <p style={{fontSize:'30px' , fontWeight:'650', margin:'10px 0 20px 10px'}}>Confirm and pay</p>

            <p style={{fontSize:'25px',margin:'10px 0 20px 10px',fontWeight:'600'}}>Your trip</p>

            <p style={Pstyle.info}>Dates</p>
            <p style={Pstyle.infoText}>sedfghjkl</p>

            <p style={Pstyle.info}>Guests</p>
            <p style={Pstyle.infoText}>cvbnm</p>
        </Grid>

        <Grid item xs={6} style={Pstyle.gridItemStyle1}>
            <p style={{fontSize:'30px',fontWeight:'650',margin:'10px 0 10px 0'}}>Payment Details</p>
            <CreditCardForm />
        </Grid>
    </Grid>

  )
}

export default Payment