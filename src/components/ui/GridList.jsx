const GridList = ({ children,className }) => {
  return (
    <div className={`grid grid-cols-1 md:grid-cols-4 gap-4 auto-rows-auto ${className}`}>
      {children}
    </div>
  );
};

export default GridList;
