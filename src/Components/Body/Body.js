import React from "react";
import { Grid } from "@mui/material";
import './Body.css';
import { ProfileCard } from "../ProfileCard/ProfileCard";

export const Body = () => {
  return (
    <Grid className='body' container item xl={10} xs={11} left={{xl:'16.7%', xs:'8.3%'}} top={{xl:'3.5%'}}>
        <ProfileCard/>
    </Grid>
  )
}
