import React from 'react'
import ReactPlayer from 'react-player'
import './VideoPlayer.css'

const VideoPlayer = () => {

      return (
        <div className='player-wrapper'>
          <ReactPlayer
            className='react-player'
                  url="https://dianne-adair-s3.s3-us-west-1.amazonaws.com/Videos/epilogFinal2.mp4"
                  
            width='40%'
                  height='40%'
                  controls={true}
          />
        </div>
      )
    }

    export default VideoPlayer