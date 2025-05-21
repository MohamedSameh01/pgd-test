import searchIcon from "../../assets/icons/table/Search.png";

const Search = () => {
  return (
    <div className="relative flex items-center">
      <img src={searchIcon} alt="search" className="absolute right-2 " />
      <input
        type="search"
        placeholder="بحث"
        className="ps-10 py-2 text-base bg-grayColor border border-gray-300 h-10 rounded-xl outline-none w-[250px]"
      />
    </div>
  );
};

export default Search;
