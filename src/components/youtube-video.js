import React from 'react'
import styled from 'styled-components'
import YouTube from 'react-youtube-embed'

const VideoContainer = styled.div`
  margin: 0 5px;
`

const YTVideo = ({ id }) => {
  return (
    <VideoContainer>
      <YouTube id={id}></YouTube>
    </VideoContainer>
  )
}

export default YTVideo
