import { Stack, Box, Typography, } from "@mui/material"
import { fetchFromAPI } from "./FetchVideos"
import Sidebar from "./Sidebar"
import { useEffect, useState } from "react"
import Videos from "./Videos"

const Feed = () => {

    const [selectmenu,setSelectmenu]=useState("New")
    const [videos,setVideos]=useState([])

    useEffect(()=>{
        fetchFromAPI(`search?part=snippet&q=${selectmenu}`).then((data)=>{
            console.log(data.items)
            setVideos(data.items)})
    },[selectmenu])
    return (
        <Stack sx={{ flexDirection: { sx: "column", md: "row" } }}>
            <Box sx={{ height: { sx: "auto", md: "92vh" }, borderRight: "1px solid #3d3d3d", px: { sx: 0, md: 2 } }}>
                <Sidebar selectmenu={selectmenu} setSelectmenu={setSelectmenu}/>
            </Box>
            <Box p={2} sx={{ overflowY: "auto", height: "90vh", flex: 2 }}>
                <Typography varient="h4" fontWeight="bold" mb={2} sx={{ color: "white" }}>
                    {selectmenu} <span style={{ color: "#F3510" }}>Videos</span>
                </Typography>
                <Videos video={videos}/>
            </Box>
            
        </Stack>
    )
}

export default Feed