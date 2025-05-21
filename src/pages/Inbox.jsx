import { Link } from "react-router-dom";
import { Frame } from "../components/ui";
import { Search, BaseButton, Table } from "../components/common";
import { tableData } from "../utils/data";
import { Pagination } from "../components/table";
import { useState } from "react";
const Inbox = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(10);
  const [totalItems, setTotalItems] = useState(200); // Example total items

  // Function to handle page changes
  const handlePageChange = (newPage) => {
    console.log("Changing to page:", newPage);
    setCurrentPage(newPage);
  };

  // Function to handle items per page changes
  const handleItemsPerPageChange = (newItemsPerPage) => {
    console.log("Changing items per page to:", newItemsPerPage);
    setItemsPerPage(newItemsPerPage);
    setCurrentPage(1);
  };
  const data = [1, 2, 3, 4,  6, 7, 8, 9, 10];

  return (
    <div className="flex flex-col w-full py-6">
      {/* Top Section: Create Button and Search Bar */}
      <div className="flex justify-end items-center">
        <Link to="/add">
          <BaseButton text="انشاء" />
        </Link>
      </div>
      <Frame className="mt-6">
        <div className="overflow-x-auto">
          <div className="flex justify-start items-center mb-6">
            <Search />
          </div>
          <Table tableData={tableData} data={data} />
          <Pagination
            totalItems={totalItems}
            itemsPerPage={itemsPerPage}
            currentPage={currentPage}
            onPageChange={handlePageChange}
            onItemsPerPageChange={handleItemsPerPageChange}
          />
        </div>
      </Frame>
    </div>
  );
};

export default Inbox;
