interface Prop {
  imgSrc: string;
}

export default function Img({ imgSrc }: Prop) {
  return (
    <>
      <img src={imgSrc} alt="Imag for letter" />
    </>
  );
}
