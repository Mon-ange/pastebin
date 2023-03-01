import React from "react";
import { Card, Button, CardActions, CardContent, Typography } from '@mui/material'
import { DateTime } from "luxon";
export default function PasteListItem(props) {
    // console.log(DateTime.now());
    console.log(DateTime.fromISO(props.paste_time).toLocaleString(DateTime.DATETIME_MED))
    return (
        <Card sx={{ margin: "5px" }}>
            <CardContent>
                <Typography variant="h5" component="div">{props.token}</Typography>
                <Typography
                    sx={{ fontSize: 14 }}
                    color="text.secondary"
                    gutterBottom>
                    author: {props.poster}
                    / Language: {props.language}
                    / Paste Time: {DateTime.fromISO(props.paste_time).toLocaleString(DateTime.DATETIME_MED)}
                    / Expired Time: {DateTime.fromISO(props.expire_time).toLocaleString(DateTime.DATETIME_MED)} </Typography>
            </CardContent>
            <CardActions>
                <Button size="small" href={"/paste?token=" + props.token}  >Learn More</Button>
            </CardActions>
        </Card>
    )
}