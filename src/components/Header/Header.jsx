import React from 'react'
import { useState } from 'react';

import {Box,Typography} from "@mui/material";
import {styled} from '@mui/system';
import CustomButton from './CustomButton/CustomButton';
import logoImg from '../../assets/logo.png';

import MenuIcon from '@mui/icons-material/Menu';
import FeaturedPlayListIcon from '@mui/icons-material/FeaturedPlayList';
import MiscellaneousServicesIcon from '@mui/icons-material/MiscellaneousServices';
import HomeIcon from  '@mui/icons-material/Home';
import ContactsIcon from '@mui/icons-material/Contacts';
import {Drawer,List,ListItem,ListItemButton,ListItemIcon,ListItemText} from '@mui/material';
import { useNavigate } from 'react-router-dom';


function Header() {
    

    const [mobileMenu,setMobileMenu] = useState({left:false})

    const Navigate = useNavigate()

    const toggledrower = (anchor,open)=>(event)=>{
        if(event.type === "keydown" && (event.type === "Tab" || event.type === "shift")){
            return;
        }
        setMobileMenu({...mobileMenu,[anchor]:open})
    }

    const list = (anchor)=>(
    <Box sx = {{
        width:anchor === 'top' || anchor === "bottom" ? "auto": 250
    }}
    role = "presentation"
    onClick={toggledrower(anchor,false)}
    onKeyDown = {toggledrower(anchor,false)}
    
    >
        <List>

            {
        nav_titles.map((item,index) =>(
                    
          <ListItem key={item.index} disablePadding onClick={()=>Navigate(item.path)}>
          <ListItemButton>
            <ListItemIcon>
                {
                    index === 0 && <HomeIcon/>
                }
                {
                    index === 1 && <FeaturedPlayListIcon/>
                }
                {
                    index === 2 && <MiscellaneousServicesIcon/>
                }
                {
                    index === 3 && <ContactsIcon/>
                }
              
            </ListItemIcon>
            <ListItemText primary={item.display} />
          </ListItemButton>
        </ListItem>

                ))


            }
        
       
      </List>
        </Box>

    )

const nav_titles = [{
    path :'/',
    display: "Home"
},
{
    path :'/dishes',
    display: "Dishes"
},
{
    path :'/services',
    display: "Services"
},
{
    path :'/about',
    display: "About Us"
}
]

const NavbarLinksBox = styled(Box)(({theme})=>({
    display:'flex',
    alignItems:'center',
    justifyContent:'center',
    gap:theme.spacing(3),
    [theme.breakpoints.down("md")]:{    // => My application seen in mobile devices
        display:'none'
    }

}))

const NavbarTypography = styled(Typography)(()=>({
    fontSize:'15px',
    color:'#4f5361',
    fontWeight:'bold',
    cursor:'pointer',
    '&:hover':{
        color:'#fff'
    }

}))

const NavbarImglogo = styled("img")(({theme})=>({
    cursor:'pointer',
    [theme.breakpoints.down("md")]:{    // => My application seen in mobile devices
        display:'none'
    }

}))

const CustomMobileIcon = styled(MenuIcon)(({theme})=>({
    cursor:'pointer',
    display:'none',
    marginRight:theme.spacing(2),
    [theme.breakpoints.down("md")]:{    // => My application seen in mobile devices
        display:'block'
    }

}))

  return (
    
   <Box
   sx = {{
    display:'flex',
    alignItems:'center',
    justifyContent:'space-between',
    padding:'40px',
    maxWidth:'auto',
    backgroundColor:'#f1f72f',
    marginLeft:'0px',
    marginBottom:'-24px',


   }}
   
   
   >

  <Box>
    <Box  sx = {{
    display:'flex',
    alignItems:'center',
    justifyContent:'center',
    gap:'2.5rem'
    

   }}
   >
    <Box sx = {{
    display:'flex',
    alignItems:'center',
    
   }}>
    
    <CustomMobileIcon onClick={toggledrower("left",true)}/>    {/* MenuIcon is customized */}

    
    <Drawer 
    anchor = "left"
    open = {mobileMenu["left"]}
    onClose = {toggledrower("left",false)}
       
     >
        {list("left")}
    
    </Drawer>

  < NavbarImglogo  img src={logoImg} />

    </Box>

        <NavbarLinksBox>
        {
            nav_titles.map((item,index) =>(
                <NavbarTypography variant = 'body2' onClick={()=>Navigate(item.path)}>
                {item.display}
              </NavbarTypography>

            ))
        }
       </NavbarLinksBox>

       

    </Box>

  </Box>

  <Box sx = {{
    display:'flex',
    alignItems:'center',
    justifyContent:'center',
    gap:'1rem'
    

   }}>

  <NavbarTypography variant = 'body2'>
    Sign Up
  </NavbarTypography>
  <CustomButton
  backgroundColor= '#0F1B4C'
  color='#fff'
  buttonText="Register"

  />


  </Box>
   </Box>
  )
}

export default Header
