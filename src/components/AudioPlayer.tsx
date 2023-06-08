import { RefObject } from 'react';

interface AudioPlayerProps {
  audioRef: RefObject<HTMLAudioElement>;
  url: string;
}
function AudioPlayer({ audioRef, url }: AudioPlayerProps) {
  return (
    <div>
      <audio ref={audioRef} src={url} />
    </div>
  );
}

export default AudioPlayer;
