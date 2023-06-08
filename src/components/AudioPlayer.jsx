import React from "react";

function AudioPlayer({ audioRef, url }) {
  return (
    <div>
      <audio ref={audioRef} src={url} />
    </div>
  );
}

export default AudioPlayer;
