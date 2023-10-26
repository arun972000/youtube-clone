/* eslint-disable react/prop-types */
import { Stack, Box } from "@mui/material"
import VideoCard from "./VideoCard"
import ChannelCard from "./ChannelCard"


const Videos = ({ video,direction }) => {

  return (
    <Stack direction={direction || "row"} flexWrap="wrap" justifyContent="start" gap={2}>
      {video.map((item, index) => (
        <Box key={index}>
          {item.id.videoId && <VideoCard videos={item} />}
          {item.id.channelId && <ChannelCard channel={item} />}
        </Box>
      ))}
    </Stack>
  )
}

export default Videos