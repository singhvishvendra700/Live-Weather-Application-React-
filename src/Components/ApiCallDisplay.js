import { Box, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import DisplayData from './DisplayData'

const ApiCallDisplay = ({ value }) => {
    const [data, setData] = useState()

    useEffect(() => {
        let API_key = "b380f79051d189a84009273079c2e1b6"
        let url = `https://api.openweathermap.org/data/2.5/weather?q=${value}&appid=${API_key}`
        fetch(url)
            .then((response) => response.json())
            .then((data) => setData(data));
    }, [value])
    console.log(data)
    return (
        <Box>
            {value === "" ? <Typography sx={{ fontSize: "2rem", fontWeight: 550, padding: 20, justifyContent: "center", textAlign: "center" }}>No Data to Show. Please Enter City Name.</Typography>
                : (data?.message === 'city not found' ? <Typography sx={{ fontSize: "2rem", fontWeight: 550, padding: 20 }}>Please enter a valid name.</Typography> :
                    <DisplayData data={data} />
                )
            }
        </Box >
    )
}

export default ApiCallDisplay
