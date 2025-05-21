const Pagination = ({ totalItems, itemsPerPage, currentPage, onPageChange, onItemsPerPageChange }) => {
  const totalPages = Math.ceil(totalItems / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage + 1;
  const endIndex = Math.min(currentPage * itemsPerPage, totalItems);

  const handlePageChange = (page) => {
    if (page > 0 && page <= totalPages) {
      onPageChange(page);
    }
  };

  const handleItemsPerPageChange = (event) => {
    onItemsPerPageChange(Number(event.target.value));
  };

  const renderPageNumbers = () => {
    const pageNumbers = [];
 
    const maxPageButtons = 5; 
    const startPage = Math.max(1, currentPage - Math.floor(maxPageButtons / 2));
    const endPage = Math.min(totalPages, startPage + maxPageButtons - 1);

    if (startPage > 1) {
      pageNumbers.push(1);
      if (startPage > 2) {
        pageNumbers.push('...');
      }
    }

    for (let i = startPage; i <= endPage; i++) {
      pageNumbers.push(i);
    }

    if (endPage < totalPages) {
      if (endPage < totalPages - 1) {
        pageNumbers.push('...');
      }
      pageNumbers.push(totalPages);
    }

    return pageNumbers.map((number, index) => (
      number === '...' ? (
        <span key={`ellipsis-${index}`} className="relative rounded-xl inline-flex items-center px-4 py-2 text-sm font-medium text-gray-700">
          ...
        </span>
      ) : (
        <a
          key={`page-${number}`}
          href="#"
          onClick={() => handlePageChange(number)}
          aria-current={currentPage === number ? 'page' : undefined}
          className={`relative inline-flex items-center px-4 py-2 rounded-xl text-sm font-medium ${currentPage === number ? 'z-10 bg-brownColor border-brownColor text-white' : 'bg-white border-gray-300 text-gray-500 hover:bg-gray-50'}`}
        >
          {number}
        </a>
      )
    ));
  };

  return (
    <div className="flex justify-between items-center mt-4 px-4 py-3  sm:px-6 rounded-xl shadow-md text-[13px]">
      <div className="flex-1 flex justify-between sm:hidden">
        {/* Mobile Pagination (if needed) */}
      </div>
      <div className="hidden sm:flex-1 sm:flex sm:items-center sm:justify-between">
        {/* Desktop Pagination */}
        <div className="flex items-center gap-1">
          <div className="text-gray-700">
            عرض <span>{startIndex}</span> إلى <span>{endIndex}</span> من{" "}
            <span>{totalItems}</span> إدخال
          </div>
          <div className="relative ml-4 rounded-xl">
            <select
              className="block appearance-none w-full bg-white border cursor-pointer border-gray-300 text-gray-700 py-1.5 px-3 pr-8 rounded-xl leading-tight focus:outline-none focus:shadow-outline text-sm"
              value={itemsPerPage}
              onChange={handleItemsPerPageChange}
            >
              {[10, 20, 50].map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
              <svg
                className="fill-current h-4 w-4"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
              </svg>
            </div>
          </div>
    
        </div>

        <div className="flex items-center">
          <nav
            className="relative z-0 inline-flex rounded-md shadow-sm -space-x-px"
            aria-label="Pagination"
          >
            <a
              href="#"
              onClick={() => handlePageChange(currentPage - 1)}
              className={`relative inline-flex items-center px-2 py-2 rounded-r-xl border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50 ${
                currentPage === 1 ? "pointer-events-none opacity-50" : ""
              }`}
              disabled={currentPage === 1}
            >
              <span className="sr-only">Previous</span>

              <svg
                className="h-5 w-5"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M7.293 14.707a1 1 0 010-1.414L10.586 10l-3.293-3.293a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                  clipRule="evenodd"
                />
              </svg>
            </a>
            {/* Page Numbers */}
            {renderPageNumbers()}
            <a
              href="#"
              onClick={() => handlePageChange(currentPage + 1)}
              className={`relative inline-flex items-center px-2 py-2 rounded-l-xl border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50 ${
                currentPage === totalPages
                  ? "pointer-events-none opacity-50"
                  : ""
              }`}
              disabled={currentPage === totalPages}
            >
              <span className="sr-only">Next</span>
              <svg
                className="h-5 w-5"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                  clipRule="evenodd"
                />
              </svg>
            </a>
          </nav>
        </div>
      </div>
    </div>
  );
}

export default Pagination