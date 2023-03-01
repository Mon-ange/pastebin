import React from "react";
import CodeBoard from "./CodeBoard";
import Grid from '@mui/material/Grid'
import axios from "axios";
import { useState } from "react";
export default function AppContent() {
    const urlParams = new URLSearchParams(window.location.search);
    const token = urlParams.get('token');

    return (
        <Grid container spacing={2} marginTop="20px" marginLeft="20px" >
            <Grid item xs={10}>
                <CodeBoard token={token}/>
            </Grid>
          
        </Grid>
    )
}