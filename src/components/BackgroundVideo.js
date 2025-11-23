import React from 'react'


function BackgroundVideo() {
  return (
    <div className="wrapper-video-section wrapper">
      <svg className="svg-text" viewBox="0 0 1000 300">
        <defs>
          <mask id="text-mask">
            <rect width="100%" height="100%" fill="black"></rect>

            <text 
              x="50%" 
              y="50%" 
              textAnchor="middle" 
              dy=".35em" 
              fontSize="120" 
              fontWeight="900"
              fill="white"
            >
              Amazing Video
            </text>
          </mask>
        </defs>

        <foreignObject width="100%" height="100%" mask="url(#text-mask)">
          <video
            className="video-inside"
            src="/assets/img/4k-video.mp4"
            autoPlay
            loop
            muted
            playsInline
          ></video>
        </foreignObject>
      </svg>
    </div>
  )
}

export default BackgroundVideo
