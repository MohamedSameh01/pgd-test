
const Card = ({card}) => {
  return (
    <div
      className={`flex flex-col items-center justify-center cursor-pointer rounded-xl px-8 py-6 shadow-sm ${card.color}`}
      style={{
        minWidth: "240px",
        flex: "1 1 260px",
        maxWidth: "330px",
      }}
    >
      <span className="flex items-center justify-center rounded-full bg-white w-[56px] h-[56px] mb-2">
        <img src={card.icon} alt="icon" className="w-7 h-7" />
      </span>
      <span className="text-3xl font-bold text-gray-700">{card.number}</span>
      <span className="font-bold text-gray-500 text-md  mt-1">{card.label}</span>
    </div>
  );
}

export default Card