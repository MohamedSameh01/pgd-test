
const HeaderIcon = ({image ,alt="icon"}) => {
  return (
    <button className="bg-white cursor-pointer rounded-lg w-10 h-10 flex items-center justify-center">
      <img src={image} alt={alt} className="w-full" />
    </button>
  );
}

export default HeaderIcon