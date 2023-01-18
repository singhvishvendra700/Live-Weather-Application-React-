import { Box, Divider, Typography } from '@mui/material'
import React from 'react'
import LocationCityIcon from '@mui/icons-material/LocationCity';
import DeviceThermostatIcon from '@mui/icons-material/DeviceThermostat';
import ThermostatAutoIcon from '@mui/icons-material/ThermostatAuto';
import LanguageIcon from '@mui/icons-material/Language';
import AirIcon from '@mui/icons-material/Air';
import CycloneIcon from '@mui/icons-material/Cyclone';

const DisplayData = ({ data }) => {
    return (
        <Box sx={{ display: "flex", flexDirection: "column", marginTop: "10%" }}>
            <Box sx={{ display: "flex", alignItems: "center", gap: "10px", flexDirection: "column", marginBottom: "20px" }}>
                <Box sx={{ display: "flex", alignItems: "center" }}>
                    <LocationCityIcon fontSize='large' />
                    <Typography sx={{ fontSize: "3rem", alignItems: "center" }}>
                        {data?.name}
                    </Typography>
                </Box>
                <Box sx={{ display: "flex", alignItems: "center" }}>
                    <LanguageIcon fontSize='small' />
                    <Typography sx={{ fontSize: "1.5rem", alignItems: "center" }}>
                        {data?.sys?.country}
                    </Typography>
                </Box>
            </Box>
            <Divider />
            <Box sx={{ display: "flex", gap: "10px", flexDirection: "column ", width: "100%", justifyContent: "space-around", alignItems: "center", margin: "10% 0%" }}>
                <Box sx={{ display: "flex", flexDirection: "row", gap: "10px" }}>
                    <Box sx={{ display: "flex", gap: "7px" }}>
                        <DeviceThermostatIcon />
                        <Typography> {data?.main?.temp} Kelvin</Typography>
                    </Box>
                    <Box sx={{ display: "flex", gap: "7px" }}>
                        <ThermostatAutoIcon />
                        <Typography>{data?.main?.feels_like} Kelvin</Typography>
                    </Box>
                </Box>
                <Box sx={{ display: "flex", flexDirection: "row", gap: "10px" }}>
                    <Box sx={{ display: "flex", gap: "7px" }}>
                        <Typography> Humidity: <b>{data?.main?.humidity}%</b></Typography>
                    </Box>
                    <Box sx={{ display: "flex", gap: "7px" }}>
                        <Typography>Pressure: <b>{data?.main?.pressure} hPa</b></Typography>
                    </Box>
                </Box>
            </Box>
            <Divider />
            <Box sx={{ display: "flex", flexDirection: "row", gap: "10px", alignItems: "center", justifyContent: "center", margin: "10% 0%" }}>
                <AirIcon />
                <Typography>
                    {data?.weather[0]?.description}
                </Typography>
            </Box>
            <Divider />
            <Box sx={{ display: "flex", flexDirection: "column", gap: "10px", alignItems: "center", justifyContent: "center", marginTop: "10%", marginBottom: "10%" }}>
                <Box sx={{ display: "flex", gap: "7px" }}>
                    <Typography sx={{ fontWeight: 600 }}>Wind Stats</Typography>
                </Box>
                <Box sx={{ display: "flex", gap: "10px" }}>
                    <Box sx={{ display: "flex", gap: "7px" }}>
                        <CycloneIcon />
                        <Typography>
                            {data?.wind?.speed} meter/sec
                        </Typography>
                    </Box>
                    <Box sx={{ display: "flex", gap: "7px" }}>
                        <Typography>
                            <b>Degree</b>: {data?.wind?.deg}°
                        </Typography>
                    </Box>
                </Box>
            </Box>
        </Box >
    )
}

export default DisplayData
