import React, { useState, useEffect } from "react";
import axios from "axios";
import PasteListItem from "./PasteListItem";
import { Box } from "@mui/system";
import { Pagination, TextField, Grid } from "@mui/material";
export default function PasteList() {
    const [pages, setPages] = useState();
    const [pasteList, setList] = useState([]);
    useEffect(() => {
        updateList(1);
    }, [])

    function updateList(pageNum) {
        //axios.get('/api/paste/page',{
        //    page:pageNum
        //})
        axios.get('/api/page/' + pageNum)
            .then((response) => {
                setList(response.data.items);
                setPages(response.data.pages);

            })
            .catch(function (error) {
                // handle error
                console.log(error);
            })
            .finally(function () {
                // always executed
            });
    }



    return (
        <Box sx={{ width: "80%", ml: "10vw", mt: "20px" }}>
            {pasteList.map((item) =>
                <PasteListItem key={item.token} token={item.token} poster={item.poster} language={item.language} expire_time={item.expire_time} paste_time={item.paste_time}></PasteListItem>
            )}
                <Pagination count={pages} shape="rounded" onChange={(e, num) => { updateList(num) }} />
                {/* <TextField size="small" label="Standard" variant="standard" /> */}

        </Box>
    )
}
