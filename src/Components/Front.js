import React, { useState } from 'react'
import { Box, TextField, Typography } from '@mui/material'
import DisplayData from './ApiCallDisplay'
const Front = () => {
    const paperStyles = {
        width: "50%",
        display: "flex",
        alignItems: "center",
        marginTop: "",
        height: "55%",
        paddingTop: "0px",
        padding: "35px",
        border: "2px solid #DBDBDB",
        flexDirection: "column",
        backgroundColor: "#E9E4F0",
        overflow: "hidden",
    }
    const [text, setText] = useState("Bengaluru")

    const cityInput = (e) => {
        setText(e.target.value)
    }

    return (
        <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", background: "#F2F2F2", overflow: "hidden", height: "100vh", }}>
            {/* <Box sx={{ display: "flex" }}>
                <Typography sx={{ fontSize: "3rem" }}>
                    Live Weather Application
                </Typography>
            </Box> */}
            <Box sx={paperStyles}>

                <Box sx={{ display: "flex", marginTop: "", marginBottom: "" }}>
                    <TextField id="outlined-basic" label="Enter City name" variant="outlined" sx={{ width: "400px" }} onChange={(e) => cityInput(e)} />
                </Box>
                <Box>
                    <DisplayData value={text} />
                </Box>
            </Box>
        </Box>
    )
}

export default Front
