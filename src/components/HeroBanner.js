import React from 'react'
import { Box,Stack,Typography,Button } from '@mui/material'
import Exercises from './Exercises';
import HeroBannerImage from '../assets/images/banner.png'
const HeroBanner = () => {
  return (
<Box sx={{
    mt :{lg : '212px',xs :'70px'},
    ml: {sm: '50px'}




}}
position= "relative" p= "20px"

>
    <Typography color= "#1976D2"
    fontWeight= "600" fontSize= "26px">
     The Gym Shark  
    </Typography>
    <Typography fontWeight={700}
    sx ={{ fontSize :{lg :'36px',xs: '40px'}}}
mb='23px' mt ='36px'
    >
       Nothing will Work<br/>
       Untill You Do
      
    </Typography>
    <Typography fontSize= '22px'
    lineHeight= '35px' mb= {4}>
       Check Out the Most Effective Exercises.      
    </Typography>
    <Button variant='contained'
    color = 'primary'
    sx={{
      backgroundColor : "#1976D2",padding: "10px"
    }}
    >
    Let's Dive In
    </Button>
    <Typography 
    fontWeight={600}
    color={'#1976D2'}
    sx ={
      {opacity: 0.1,
      display :{lg :'block',xs:'none'}}

    }
    fontSize= '120px'
    >
      Exercises
    </Typography>
    <img src={HeroBannerImage} alt ="banner" 
    className='hero-banner-img'
    />
</Box>  )
}

export default HeroBanner