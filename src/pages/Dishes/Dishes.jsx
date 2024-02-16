import React from 'react'

import CustomCard from '../../components/customCard/CustomCard';
import { Data } from '../../StaticData/Data';
import {Box,Container,Typography} from '@mui/material';
import {styled} from '@mui/system';



const Dishes = () => {

    const DishesBox = styled(Box)(({theme})=>({
        display:'flex',
        justifyContent:'space-between',
        marginTop:theme.spacing(5),
        [theme.breakpoints.down("md")]:{
            flexDirection:'column',
            alignItems:'center',
            
        },
        
    })) 

    const PropertiesTextBox = styled(Box)(({theme})=>({
        [theme.breakpoints.down("md")]:{
           textAlign:'center',
            
        },
        
    }))

  return (
   <Box sx = {{mt:5, backgroundColor:"#F5FAFE", py:10}}>

    <Container>
            <PropertiesTextBox>
                <Typography sx ={{color:"#000339",fontSize:"35px",fontWeight:"bold",ml:'13px' }}>
                    Featured Dishes

                </Typography>

                <Typography sx ={{color:"#5A6473",fontSize:"16px",fontWeight:"bold",ml:'13px',mt:1 }}>
                    Explore Variety of south Indian Dishes

                </Typography>

            </PropertiesTextBox>

            <DishesBox>
                {Data.map((Item) =>(
                    <CustomCard
                    
                    key={Item.id}
                    img={Item.img}
                    price={Item.price}
                    item={Item.item}
                    heart={Item.heart}
                    share={Item.share}
                    
                    
                    
                    
                    />
                ))}

            </DishesBox>
    </Container>

   </Box>
  )
};

export default Dishes
