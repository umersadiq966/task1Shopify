import React from "react";
import { Grid, Button, IconButton} from "@mui/material";
import './ProfileCard.css';

export const ProfileCard = () => {
    return(
        <Grid className='profileCard' container item xl={9} xs={11.8} left={{xl:'14.2%', xs:'1%'}} top={{xl:'4.6%', lg:'10%', md:'10%', sm:'5%', xs:'2%'}} height={{xl:'35.6%', lg:'50%', md:'50%', sm:'50%', xs: '40%'}}> 
            <Grid className='coverContainer' container item xl={12} xs={12} height={{xl:'33%', lg:'10%', md:'10%', sm:'8%', xs:'10%'}}>
                <img className='coverPicture' src='./cover-01.svg'></img>
                <Button size="small" variant="contained" startIcon={<img src='./cam.svg'></img>} sx={{position: 'absolute',top:{xl:'28%', lg:'23%', md:'15%', sm:'9%', xs:'6%'}, right:{xl:'2%', lg:'3%', md: '4%', sm:'5%', xs:'4%'},zIndex: 1,textTransform: 'none', bgcolor: '#3C50E0' }}>
                    Edit
                </Button>
            </Grid>

            <Grid className='profilePicContainer' item xl={5} top={{xl:'24%', lg:'20%',md:'10%' ,sm: '5%', xs:'7%'}} left={{xl:'42%',lg:'43%',md:'42%' ,sm: '40%', xs:'25%'}}>
                <img className='profilePicture' src='./Ellipse 2836.png'></img>
                <IconButton sx={{bgcolor:'#3C50E0', position: 'absolute', top:{xl:'70%', lg:'70%', md:'70%', sm:'70%', xs:'70%'}, right:{xl:'8%', lg:'8%', md: '8%', sm:'8%', xs:'8%'}}}>
                    <img src='./cam.svg'></img>
                </IconButton>
            </Grid>
            <Grid className='dataContainer' container item direction='column' marginTop={{xl: '10%'}} height={{xl:'50%', lg:'30%', md:'30%', sm:'40%', xs: '80%'}} xl={12} xs={12}>
                <h1 className='username'>Danish Helium</h1>
                <h2 className='text1'>Ui/Ux Designer</h2>
                <Grid className='userDataContainer' container item gap={{xl:'10px', xs:'5px'}} paddingBottom={{xl:'50px'}} width={{xl:'38.2%',lg:'30%',md:'40%',sm:'60%', xs:'95%'}} height={{xl:'9.1%'}}>
                    <h2 className='text3'>259</h2>
                    <h2 className='text4'>Posts</h2>
                    <div className='line'></div>
                    <h2 className='text3'>129K</h2>
                    <h2 className='text4'>Followers</h2>
                    <div className='line'></div>
                    <h2 className='text3'>2K</h2>
                    <h2 className='text4'>Following</h2>
                </Grid>
                <h2 className='text5'>About Me</h2>
                <p className='text6'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque posuere fermentum urna, eu condimentum<br/>
                                    mauris tempus ut. Donec fermentum blandit aliquet. Etiam dictum dapibus ultricies. Sed vel aliquet libero. Nunc a<br/>
                                    augue fermentum, pharetra ligula sed, aliquam lacus.</p>
                <h2 className='text5'>Follow me On</h2>
                <Grid className='socialBox' container item width={{xl:'20%', lg:'15%', md:'15%', sm:'25%', xs:'40%'}}>
                    <img src='./fb.svg'></img>
                    <img src='./twitter.svg'></img>
                    <img src='./linkedin.svg'></img>
                    <img src='./ball.svg'></img>
                    <img src='./git.svg'></img>
                </Grid>
            </Grid>
            
        </Grid>
    );
}