import React from 'react'
import {styled,Typography} from '@mui/material';
import  {Box,Container}from '@mui/system';
import AmbienceImg from '../../assets/ambience.jpg';

const Ambience = () => {

    const CustomBox  = styled(Box)(({theme})=>({
        display:'flex',
        gap:theme.spacing(5),
        alignItems:'center',
        [theme.breakpoints.down("md")]:{
            flexDirection:'column',
            textAlign:'center',
            
        },
        
    })) 

    const ImgContainer  = styled(Box)(({theme})=>({
        width:'100%',
        [theme.breakpoints.down("md")]:{
            display:'flex',
            flexDirection:'column',
            alignItems:'center',
            
        },
        
    }))
    
    const Largetext  = styled(Typography)(({theme})=>({
        fontSize:"64px",
        color:'#000',
        fontWeight:'700',
        [theme.breakpoints.down("md")]:{
            fontSize:'32px',
            
        },
        
    })) 

    const Smalltext  = styled(Typography)(({theme})=>({
        fontSize:"18px",
        color:'#7B8087',
        fontWeight:'500',
        [theme.breakpoints.down("md")]:{
            fontSize:'14px',
            
        },
        
    })) 

    const TextFlexBox  = styled(Box)(({theme})=>({
        marginTop:theme.spacing(7),
        display:'flex',
        justifyContent:'space-between',
        padding:theme.spacing(0,5,0,5),
        [theme.breakpoints.down("sm")]:{
            flexDirection:'column',
            gap:theme.spacing(5),
            
        },
        
    })) 

    const Divider  = styled('div')(({theme})=>({
        width:'13%',
        height:'5px',
        backgroundColor:'#000339',
        [theme.breakpoints.down("md")]:{
            marginLeft:'auto',
            marginRight:'auto',
        },
        
    })) 

  return (
    <Box sx={{py:10}}>
        <Container>
            <CustomBox>
                <ImgContainer>
                <img src ={AmbienceImg} alt="ambienceimg" style ={{ maxWidth:'100%'}}/>
                </ImgContainer>

                <Box>
                    <Divider/>
                        <Typography sx={{
                            fontSize:"35px",
                            color:'#000339',
                            fontWeight:'700',
                            my:3,
                        }}>
                            You've found a ambience you love.

                        </Typography>

                        <Typography sx={{
                            fontSize:"16px",
                            color:'#5A6473',
                            lineHeight:'27px',
                            
                        }}>
                            Indulge your senses in a culinary journey at our restaurant,
                             where artful dishes meet the perfect ambiance for an unforgettable dining experience.

                        </Typography>
                   
                </Box>
            </CustomBox>

            <TextFlexBox>
                <Box sx={{
                    display:'flex',
                    flexDirection:'column',
                    alignItems:'center',

                }}>
                    <Largetext>250+</Largetext>
                    <Smalltext>Dishes.</Smalltext>

                </Box>

                <Box sx={{
                    display:'flex',
                    flexDirection:'column',
                    alignItems:'center',

                }}>
                    <Largetext>300+</Largetext>
                    <Smalltext>Trusted Clients.</Smalltext>

                </Box>

                <Box sx={{
                    display:'flex',
                    flexDirection:'column',
                    alignItems:'center',

                }}>
                    <Largetext>350+</Largetext>
                    <Smalltext>Delivery per Day.</Smalltext>

                </Box>

            </TextFlexBox>
        </Container>

    </Box>
  )
}

export default Ambience