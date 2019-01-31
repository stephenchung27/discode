import React from 'react';

const VideoEmbed = ({ videoId }) => {
  return (
    <div className="embed">
      <div className="embed-pill"></div>
      <div className="embed-inner">
        <span>YouTube</span>
        <iframe
          width="400"
          height="225"
          src={`https://www.youtube.com/embed/${videoId}?controls=0`}
          frameBorder="0"
          allowFullScreen></iframe>
      </div>
    </div>
  )
}

export default VideoEmbed;