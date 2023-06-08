import { RefObject } from 'react';
import './letterCard.css';

import AudioPlayer from './AudioPlayer';
import Img from './Img';
import alphabets from '../data/alphabets';
import { useRef } from 'react';

interface LetterCardProps {
  letter: string;
}

function LetterCard({ letter }: LetterCardProps) {
  const audioRef: RefObject<HTMLAudioElement> = useRef(null);

  const [imgUrl, audioUrl] = alphabets[letter];

  const playAudio = () => {
    if (audioRef.current !== null) {
      audioRef.current.play();
    }
  };

  return (
    <>
      <div className='letter-card' onClick={playAudio}>
        <span className='letter'>{letter.toUpperCase()}</span>
        <div className='image'>
          <Img imgSrc={imgUrl} />
        </div>
      </div>
      <AudioPlayer audioRef={audioRef} url={audioUrl} />
    </>
  );
}

export default LetterCard;
