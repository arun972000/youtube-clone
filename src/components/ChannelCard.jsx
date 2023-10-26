/* eslint-disable react/prop-types */
import {CardMedia,CardContent,Box, Typography } from "@mui/material"
import { Link } from "react-router-dom"
import { demoProfilePicture } from "./utils/constant"
const ChannelCard = ({channel}) => {
  return (
    <Box  sx={{
        boxShadow: 'none',
        borderRadius: '20px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: { xs: '356px', md: '320px' },
        height: '326px',
        margin: 'auto',
        
      }}>
       <Link to={`/channel/${channel?.id.channelId}`}>
        <CardContent sx={{display:"flex", justifyContent:"center", flexDirection:"column", textAlign:"center",color:"#fff"}}>
            <CardMedia image={channel?.snippet?.thumbnails?.high?.url || demoProfilePicture} alt={channel?.snippet?.title} sx={{borderRadius:"50%", height:180, width:180,mb:2}}/>
            <Typography varient="h6" sx={{fontSize:14}}>{channel?.snippet?.title}</Typography>
            <Typography >{channel?.statitics?.subscriberCount && (<Typography>{parseInt(channel?.statitics?.subscriberCount).toLocaleString}</Typography>)}</Typography>
            </CardContent>
        
       </Link>
    </Box>
  )
}

export default ChannelCard