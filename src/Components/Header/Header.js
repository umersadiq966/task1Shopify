import React from "react";
import { Grid } from "@mui/material";
import { AppProvider,TextField } from "@shopify/polaris";
import './Header.css';

export const Header = () => {
    return(
        <AppProvider>
        <Grid className='headerContainer' container item xl={10} xs={11} left={{xl:'16.7%', xs:'8.3%'}}> 
           
        </Grid>
        </AppProvider>
    );
}