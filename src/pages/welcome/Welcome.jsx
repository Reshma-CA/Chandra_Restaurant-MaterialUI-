import React from 'react'
import {Box,Button,Typography} from '@mui/material';
import {styled} from '@mui/system';
import {Container} from '@mui/system';
import CustomButton from '../../components/Header/CustomButton/CustomButton';
import welcome from '../../assets/welcome.png';

// function Welcome() {
  
// }

const Welcome = () =>{
    const CustomBox = styled(Box)(({theme})=>({
        display:'flex',
        justifyContent:'center',
        gap:theme.spacing(5),
        marginTop:theme.spacing(3),
        [theme.breakpoints.down("md")]:{
            flexDirection:'column',
            alignItems:"center",
            textAlign:'center',
        }
        
    }))   
    
    const Title = styled(Typography)(({theme})=>({
        fontSize:"64px",
        color:'#fff',
        fontWeight:'bold',
        margin:theme.spacing(4,0,4,0),
        [theme.breakpoints.down("sm")]:{
            fontSize:'40px',
        },
        
    })) 

    return (
       <Box sx = {{backgroundColor: "#e7f213", minHeight: "80vh"}}>
        <Container>
            <CustomBox>
                <Box sx = {{flex:"1"}}>
                    <Typography variant = "body2"
                    sx ={{
                        fontSize:"18px",
                        color:"#f21331",
                        fontWeight:'500',
                        fontWeight: 'bold',
                        mt:10,
                        mb:4,
                      }}
                      >
                   " Welcome to the Chandra Restaurant "
                   

                    </Typography>
                    <Title variant="h1">
                        Discover a place where you'll love to Eat.

                    </Title>
                    <Typography variant = 'body2'
                    sx = {{fontSize:"18px",color:"#994708", fontWeight:'bold',my:4}}
                    
                    >
                       "Savor the art of relaxation at Chandra, where every stay is a masterpiece of comfort and style."

                    </Typography>
                    <CustomButton
                    backgroundColor='#313632'
                    color = '#fff'
                    buttonText = "More about Us"
                    welcomeBtn={true}
                     /> 

                </Box>
                <Box sx ={{flex:"1.25"}}>
                    <img
                    src={welcome} 
                    alt="welcome"
                    style={{maxWidth:'100%', marginBottom:'2rem'}}
                    
                    
                    />

                </Box>
            </CustomBox>
        </Container>

       </Box>
      )
}

export default Welcome
