import React from 'react'
import {Box,Typography,styled} from "@mui/material";

import likeIcon from '../../assets/like.png';
import heartIcon from '../../assets/heart.png';
import shareIcon from '../../assets/share.png';


const CustomCard = ({img,price,item,likes,heart,share}) =>{
    const DishBox = styled(Box)(({theme})=>({
        borderTopLeftRadius: '10px',
        borderTopRightRadius: '10px',
        backgroundColor: '#fff',
        maxWidth: 350,
        [theme.breakpoints.down("md")]:{
            margin:theme.spacing(2,0,2,0),
        },
        "&:hover":{
            backgroundColor:'#f5f5f5',
            boxShadow:"0 0 5px rgba(0,0,0,0.2)",
            transform:"scale(1.05)",
            transition:'all 0.3s ease-in-out',
        }
        
    })) 

    const InfoBox = styled(Box)(()=>({
        display:'flex',
        flexDirection:'column',
        alignItems:'center',
        
        
    })) 

    const ImgContainer = styled(Box)(() =>({
        width:'100%',

    }));

  return (
    <DishBox>
        <ImgContainer>
        <img src={img} alt='housephoto' style={{ maxWidth:'100%'}}/>
        </ImgContainer>

        <Box sx={{padding:'1rem'}}>

            <Typography variant='body2' sx={{fontWeight:'700'}}>
                {price}Rs./

            </Typography>

            <Typography variant='body2' sx={{my:2}}>
                {item}

            </Typography>

            <Box sx={{ 
            display:'flex',
            justifyContent:'space-between',
            alignItems:'center',
        }}>
            <InfoBox>
                <img src ={ likeIcon} alt='likebutton'/>
                <Typography variant='body2' sx={{mt:1}}>
                    {likes}

                </Typography>

            </InfoBox>

            <InfoBox>
                <img src ={ heartIcon} alt='heartbutton'/>
                <Typography variant='body2' sx={{mt:1}}>
                    {heart}

                </Typography>


            </InfoBox>

            <InfoBox>
                <img src ={ shareIcon} alt='sharebutton'/>
                <Typography variant='body2' sx={{mt:1}}>
                    {share}

                </Typography>


            </InfoBox>

            </Box>
        </Box>


    </DishBox>
  )
}

export default CustomCard
