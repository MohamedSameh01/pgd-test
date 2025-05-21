import arrowRight from "../../assets/icons/sidebar/arrow-right-03.png";

const CollabseButton = ({ handleCollabseSidebar ,open}) => {
  return (
    <button
      onClick={handleCollabseSidebar}
      className={`${
        open ? "left-[-24px]" : "left-[-16px]"
      } absolute cursor-pointer flex justify-center items-center top-6  z-10 bg-white w-[32px] h-[32px] shadow-md rounded-xl p-2`}
    >
      <img
        className={`w-[25px] h-[25px] ${open ? "rotate-180" : ""}`}
        src={arrowRight}
        alt="collabse button"
      />
    </button>
  );
};

export default CollabseButton;
