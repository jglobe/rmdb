import React from "react";

function Paginator({ currentPage, pageCount, onNextPage, onPrevPage }) {
  return (
    <div className="Paginator">
      <button disabled={currentPage === 1} onClick={onPrevPage}>
        prev
      </button>
      <span>{currentPage}</span>
      <button disabled={currentPage === pageCount} onClick={onNextPage}>
        next
      </button>
    </div>
  );
};

export default Paginator;
