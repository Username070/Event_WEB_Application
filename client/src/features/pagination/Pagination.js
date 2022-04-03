import React, { useState, useEffect } from "react";

export function Pagination({ data, RenderComponent, pageLimit, dataLimit }) {

  const pages = Math.ceil(data.length / dataLimit);
  const [currentPage, setCurrentPage] = useState(1);

  function goToNextPage() {
    setCurrentPage((page) => page + 1);
  }

  function goToPreviousPage() {
    setCurrentPage((page) => page - 1);
  }

  function changePage(event) {
    const pageNumber = Number(event.target.textContent);
    setCurrentPage(pageNumber);
  }

  const getPaginatedData = () => {
    const startIndex = currentPage * dataLimit - dataLimit;
    const endIndex = startIndex + dataLimit;
    return data.slice(startIndex, endIndex);
  };

  const getPaginationGroup = () => {
    let start = Math.floor((currentPage - 1) / pageLimit) * pageLimit;
    return new Array(pageLimit).fill().map((_, idx) => start + idx + 1);
  };

  useEffect(() => {
    window.scrollTo({ behavior: "smooth", top: "0px" });
  }, [currentPage]);

  return (
    <>
      {getPaginatedData().map((data) => (
        <RenderComponent key={data._id} data={data} />
      ))}

      <nav aria-label="Page navigation">
        <ul className="pagination pagination-lg justify-content-center">

          <li className={`page-item ${currentPage === 1 ? "disabled" : ""}`}>
            <button
              onClick={goToPreviousPage}
              className={`page-link`}>
              &laquo;
            </button>
          </li>

          {getPaginationGroup().map((item, index) => (
            <li key={index} className={`page-item ${currentPage === item ? "active" : ""}`}>
              <button
                onClick={changePage}
                className={`page-link`}>
                <span>{item}</span>
              </button>
            </li>
          ))}

          <li className={`page-item ${currentPage === pages ? "disabled" : ""}`}>
            <button
              onClick={goToNextPage}
              className={`page-link`}>
              &raquo;
            </button>
          </li>
          
        </ul>
      </nav>
    </>
  );
}