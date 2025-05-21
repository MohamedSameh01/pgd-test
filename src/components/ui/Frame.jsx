
const Frame = ({ className, children,heading }) => {
  return (
    <div
      className={`bg-white overflow-hidden rounded-xl mt-4 shadow-[0_4px_24px_rgba(0,0,0,0.08)]  p-4 ${className}`}
    >
      {heading && (
        <h2 className="text-lg font-bold text-gray-800 mb-6">{heading}</h2>
      )}
      {children}
    </div>
  );
};

export default Frame