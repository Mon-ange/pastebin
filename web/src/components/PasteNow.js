import React, { useState } from "react";
import { Card, CardContent, Typography, CardActions, Button, TextField, Grid } from "@mui/material";
import { Select, MenuItem, InputLabel, FormControl } from "@mui/material";
import { Alert } from "@mui/material";

import axios from "axios";
export default function PasteNow() {
    const [poster, setPoster] = useState("");
    const [language, setLanguage] = useState("");
    const [lifetime, setLifetime] = useState("");
    const [is_public, setSecret] = useState("");
    const [content, setContent] = useState("");
    const [token, setToken] = useState("");
    const [alert, setAlert] = useState()
    function postPaste() {
        axios.post('/api/paste', {
            "poster": poster,
            "language": language,
            "content": content,
            "lifetime": lifetime,
            "is_public": is_public
        })
            .then(function (response) {
                setToken(response.data.token);
                setAlert(true);
                // console.log(response.data.token);
            })
            .catch(function (error) {
                console.log(error);
            });
        // console.log(poster)
    }



    return (
        <Card sx={{ width: "80%", ml: "10vw", mt: "20px" }}>
            <CardContent>
                <Grid container spacing={5} >
                    <Grid item >
                        <div>
                            <InputLabel >Author</InputLabel>
                            <TextField id="poster" label="Author" onChange={(e) => { setPoster(e.target.value) }} />
                        </div>
                    </Grid>
                    <Grid item xs={2}>
                        
                    <InputLabel >Language</InputLabel>
                        <Select
                            sx={{width:"100%"}}
                            label="Language"
                            value={language}
                            onChange={(e) => { setLanguage(e.target.value) }}
                        >
                            <MenuItem value='javascript'>Javascript</MenuItem>
                            <MenuItem value='java'>JAVA</MenuItem>
                            <MenuItem value='python'>Python</MenuItem>
                            <MenuItem value='cpp'>C++</MenuItem>
                            <MenuItem value='c'>C</MenuItem>
                            <MenuItem value='markdown'>Markdown</MenuItem>
                            <MenuItem value='shell'>SHELL</MenuItem>
                        </Select>
                        
                    </Grid>
                    
                    <Grid item >
                        <div>
                            <InputLabel >Life Time</InputLabel>
                            <TextField label="Life time" onChange={(e) => { setLifetime(e.target.value) }} />
                        </div>
                    </Grid>
                    <Grid item xs={2}>
                        
                        <InputLabel >Privacy</InputLabel>
                        <Select
                            sx={{width:"100%"}}
                            value={is_public}
                            label="Privacy"
                            onChange={(e) => { setSecret(e.target.value) }}
                        >
                            <MenuItem value={true}>Public</MenuItem>
                            <MenuItem value={false}>Private</MenuItem>
                        </Select>
                       
                    </Grid>
                    

                </Grid>

                <Grid container >
                    <Grid item xs={12} >
                        <div>
                            <InputLabel >Content</InputLabel>
                            <TextField
                                fullWidth
                                label="Paste your code here:"
                                multiline
                                rows={20}
                                onChange={(e) => { setContent(e.target.value) }}
                            // sx = {{width : "100%"}} the same as fullWidth
                            />
                        </div>
                    </Grid>
                </Grid>
                <Grid>
                    {alert ? <Alert severity="success" >http://127.0.0.1:3000/paste?token={token}</Alert> : <></>}
                </Grid>

            </CardContent>
            <CardActions>
                <Button color="inherit" sx={{ ml: "10px" }} variant="contained" onClick={postPaste} >Paste</Button>
            </CardActions>
        </Card>
    )

}