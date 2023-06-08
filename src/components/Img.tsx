interface ImgProp {
  imgSrc: string;
}

export default function Img({ imgSrc }: ImgProp) {
  return (
    <>
      <img src={imgSrc} alt='Imag for letter' />
    </>
  );
}
