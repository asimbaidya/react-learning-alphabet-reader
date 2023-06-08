import { useRef } from "react";
import Img from "./Img";
import AudioPlayer from "./AudioPlayer";
import alphabets from "../data/alphabets";
import "./letterCard.css";

function LetterCard({ letter }) {
  const audioRef = useRef(null);

  const [imgUrl, audioUrl] = alphabets[letter];

  const playAudio = () => {
    audioRef.current.play();
  };

  return (
    <>
      <div className="letter-card" onClick={playAudio}>
        <span className="letter">{letter.toUpperCase()}</span>
        <div className="image">
          <Img imgSrc={imgUrl} />
        </div>
      </div>
      <AudioPlayer
        className="audio-player"
        audioRef={audioRef}
        url={audioUrl}
      />
    </>
  );
}

export default LetterCard;
