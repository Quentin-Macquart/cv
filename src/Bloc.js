const Bloc = ({ image, imgName }) => {
  return (
    <section className='content'>
      <img className='myImgBloc' src={image} alt='Knowledge logo' />
      <p>{imgName}</p>
    </section>
  );
};

export default Bloc;
