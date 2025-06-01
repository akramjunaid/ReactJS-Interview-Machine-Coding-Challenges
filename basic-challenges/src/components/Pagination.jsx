import React, { useState } from "react";

function Pagination({ items, itemsPerPage }) {
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(items.length / itemsPerPage);
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = items.slice(indexOfFirstItem, indexOfLastItem);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div>
      <ul>
        {currentItems.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>

      <nav>
        <ul style={{ display: "flex", listStyle: "none", padding: 0 }}>
          {Array.from({ length: totalPages }, (_, i) => i + 1).map((num) => (
            <li
              key={num}
              onClick={() => handlePageChange(num)}
              style={{
                margin: "0 5px",
                cursor: "pointer",
                fontWeight: currentPage === num ? "bold" : "normal",
              }}
            >
              {num}
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}

export default Pagination;
