import React from "react";

import './Paginator.css';

function Paginator({ currentPage, pageCount, onNextPage, onPrevPage }) {
  return (
    <div className="paginator">
      <button disabled={currentPage === 1} onClick={onPrevPage}>
        Back
      </button>
      <span>{currentPage}</span>
      <button disabled={currentPage === pageCount} onClick={onNextPage}>
        Next
      </button>
    </div>
  );
};

export default Paginator;
