import React from 'react'
import {Box,Typography,styled} from '@mui/material';

const Notfound = () => {
    const CustomBox  = styled(Box)(({theme})=>({
        width:'30%',
       [theme.breakpoints.down("md")]:{
        width:'85%',
        },
        
    })) 
    
    return (
        <Box sx={{
            display:'flex',
            flexDirection:'column',
            justifyContent:'center',
            alignItems:'center',
            padding:'40px',
            mt:'65px',
            mb:'100px',
        }}>
    
            <div
    
            style={{
                width:'5%',
                height:'5px',
                backgroundColor:'#000339',
                margin:'0 auto',
            }}
            ></div>
    
            <Typography 
            variant='h3'
             sx={{color:"#000339",fontSize:"35px",fontWeight:"bold",my:3 }}
            
            > 
            404: Page Not Found
                
            </Typography>
    
            <CustomBox>
    
                <Typography variant='body2'
                sx={{color:"#5A6473",fontSize:"16px",fontWeight:"500",textAlign:'center'}}
                
                >
                    We could not find what you were looking for.
    
                </Typography>
            </CustomBox>
    
        </Box>
      )
    }

export default Notfound
