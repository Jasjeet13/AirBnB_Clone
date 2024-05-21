import React, { useState, useEffect } from 'react';
import { Container, Grid } from "@mui/material";
import CreditCardForm from './CreditCardForm';
import { useParams  } from 'react-router-dom';

function Payment() {
    const { price } = useParams();
    console.log("price in payment",price);
    const priceNumeric = parseFloat(price.match(/[\d,]+/)[0].replace(/,/g, ''));
    console.log("numericprice in payment",priceNumeric);
    
    const [dates, setDates] = useState({ checkInDate: '', checkOutDate: '' });
    const [guests, setGuests] = useState({ totalGuests: '' });
    const [numberOfDays, setNumberOfDays] = useState(0);

    useEffect(() => {
        const fetchReservationData = async () => {
            try {
                // Fetch the reservation JSON file
                const response = await fetch('http://localhost:3001/reserve');
                if (!response.ok) {
                    throw new Error('Failed to fetch reservation data');
                }
                const data = await response.json();
                console.log("Fetched data: ", data);

                if (data.length === 0) {
                    throw new Error('No reservations found');
                }

                // Get the last username from the state
                const lastUserName = data[data.length - 1].username;
                console.log("Last username: ", lastUserName);

                // Filter the data to get the reservations for the last username
                const lastUserReservations = data.filter(obj => obj.username === lastUserName);
                console.log("Last user reservations: ", lastUserReservations);

                // Combine the reservations to get complete details
                const combinedReservation = lastUserReservations.reduce((acc, curr) => ({
                    ...acc,
                    ...curr
                }), {});

                console.log("Combined reservation: ", combinedReservation);

                // Set the dates state
                setDates({
                    checkInDate: combinedReservation.checkInDate || '',
                    checkOutDate: combinedReservation.checkOutDate || ''
                });

                // Set the guests state
                setGuests({
                    totalGuests: combinedReservation.totalGuests || ''
                });

                if (combinedReservation.checkInDate && combinedReservation.checkOutDate) {
                    const checkIn = new Date(combinedReservation.checkInDate);
                    const checkOut = new Date(combinedReservation.checkOutDate);
                    const differenceInTime = checkOut.getTime() - checkIn.getTime();
                    const differenceInDays = differenceInTime / (1000 * 3600 * 24);
                    setNumberOfDays(Math.floor(differenceInDays));
                }

            } catch (error) {
                console.error('Error fetching reservation data:', error);
            }
        };

        fetchReservationData();
    }, []);

    console.log(dates.checkInDate);
    console.log(dates.checkOutDate);

    const Pstyle = {
        info: {
            margin: '10px 0 10px 10px',
            fontSize: '20px',
            fontWeight: '800'
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
        <Grid container sx={{ width: '85%', margin: '20px auto' }}>
            <Grid item xs={6} style={Pstyle.gridItemStyle2}>
                <p style={{ fontSize: '30px', fontWeight: '650', margin: '10px 0 20px 10px' }}>Confirm and pay</p>
                <p style={{ fontSize: '25px', margin: '10px 0 20px 10px', fontWeight: '600' }}>Your trip</p>
                <p style={Pstyle.info}>Dates</p>
                <p style={Pstyle.infoText}>From {dates.checkInDate} To {dates.checkOutDate}</p>
                <p style={Pstyle.info}>Guests</p>
                <p style={Pstyle.infoText}>{guests.totalGuests} guests</p>
            </Grid>
            <Grid item xs={6} style={Pstyle.gridItemStyle1}>
                <p style={{ fontSize: '30px', fontWeight: '650', margin: '10px 0 10px 0' }}>Payment Details</p>
                <CreditCardForm numberOfDays={numberOfDays} pricePerDay={priceNumeric} />
            </Grid>
        </Grid>
    );
}

export default Payment;
