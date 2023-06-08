import LetterCard from './LetterCard';

interface Style {
  [key: string]: string;
}

const style: Style = {
  display: 'flex',
  flexDirection: 'column',
  gap: '0.5em 0',
  userSelect: 'none',
};
export default function AlphabetList() {
  return (
    <div className='alphabet-list' style={style}>
      <LetterCard letter='a' />
      <LetterCard letter='b' />
      <LetterCard letter='c' />
      <LetterCard letter='d' />
      <LetterCard letter='e' />
      <LetterCard letter='f' />
      <LetterCard letter='g' />
      <LetterCard letter='h' />
      <LetterCard letter='i' />
      <LetterCard letter='j' />
      <LetterCard letter='k' />
      <LetterCard letter='l' />
      <LetterCard letter='m' />
      <LetterCard letter='n' />
      <LetterCard letter='o' />
      <LetterCard letter='p' />
      <LetterCard letter='q' />
      <LetterCard letter='r' />
      <LetterCard letter='s' />
      <LetterCard letter='t' />
      <LetterCard letter='u' />
      <LetterCard letter='v' />
      <LetterCard letter='w' />
      <LetterCard letter='x' />
      <LetterCard letter='y' />
      <LetterCard letter='z' />
    </div>
  );
}
