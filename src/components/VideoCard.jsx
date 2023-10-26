/* eslint-disable react/prop-types */
import { Typography, Card, CardContent, CardMedia } from "@mui/material"
import { Link } from "react-router-dom"
import { CheckCircle } from "@mui/icons-material"
import {  demoVideoUrl, demoChannelUrl, demoVideoTitle, demoThumbnailUrl } from "./utils/constant"

const VideoCard = ({videos:{id:{videoId},snippet}}) => {
  return (
   <Card sx={{width:{md:320,xs:"100%",sm: '358px'}}}>
    <Link to={videoId?`/video/${videoId}` : "demovideoUrl"}>
        <CardMedia image={snippet?.thumbnails?.high?.url || demoThumbnailUrl} alt={snippet?.title} sx={{width:358, height:180}}></CardMedia>
    </Link>
    <CardContent sx={{backgroundColor:"#1e1e1e", height:130}}>
        <Link to={videoId?`/video/${videoId}` : demoVideoUrl}>
            <Typography variant="subtitle1" fontWeight="bold" color="#fff">
                {snippet?.title.slice(0,60) || demoVideoTitle.slice(0,60)}
            </Typography>
        </Link>
        <Link to={snippet?.channelId? `/channel/${snippet.channelId}` : demoChannelUrl}>
            <Typography variant="subtitle2" fontWeight="bold" color="grey">
                {snippet?.channelTitle || demoVideoTitle.slice(0,60)}
                <CheckCircle sx={{fontSize:12,color:"grey",ml:2}}/>
            </Typography>
        </Link>
    </CardContent>
   </Card>
  )
}

export default VideoCard