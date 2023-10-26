import { Box, Typography, } from "@mui/material"
import { fetchFromAPI } from "./FetchVideos"

import { useEffect, useState } from "react"
import Videos from "./Videos"
import { useParams } from "react-router-dom"

const Feed = () => {
const {searchTerm}=useParams()
    
    const [videos,setVideos]=useState([])

    useEffect(()=>{
        fetchFromAPI(`search?part=snippet&q=${searchTerm}`).then((data)=>{
            console.log(data.items)
            setVideos(data.items)})
    },[searchTerm])
    return (
      <Box p={2} sx={{ overflowY: "auto", height: "90vh", flex: 2 }}>
      <Typography varient="h4" fontWeight="bold" mb={2} sx={{ color: "white" }}>
          Search result for <span style={{ color: "#F3510" }}>Videos</span>
      </Typography>
      <Videos video={videos}/>
  </Box>
    )
}

export default Feed