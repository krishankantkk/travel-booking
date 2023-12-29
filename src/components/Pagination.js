// src/components/Pagination.js
import React from 'react';

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  return (
    <div className="flex justify-center relative">
      {Array.from({ length: totalPages }, (_, index) => (
        <div className=''>
        <button
          key={index}
          onClick={() => onPageChange(index + 1)}
          className={`mx-1 px-3 py-2 border ${
            currentPage === index + 1 ? 'bg-blue-500 text-white' : ''
          }`}
        >
          {index + 1}
        </button>
        </div>
      ))}
    </div>
  );
};

export default Pagination;
