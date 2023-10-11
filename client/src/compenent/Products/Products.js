import React, { useState } from "react";
import CardList from "../cardList/cardList";
import Cards from "../cards/Cards";
import "./products.css";
function Products({
  products = [1, 2, 3, 4, 5, 8, 5, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 5,5,5],
  productsPerPage = 6,})
{
  const [currentPage, setCurrentPage] = useState(1);

  // Calculate pagination
  const totalPages = Math.ceil(products.length / productsPerPage);
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = products.slice(indexOfFirstProduct,indexOfLastProduct);

  // Handle pagination actions
  const handleNextPage = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };

  const handlePrevPage = () => {
    setCurrentPage((prevPage) => prevPage - 1);
  };

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div id="products">
      <div className="slct">
        <div className="sousslct">
          <input className="chkd" type="checkbox" />
          <label> pc </label>
        </div>
        <div className="sousslct">
          <input className="chkd" type="checkbox" />
          <label>Tablette</label>
        </div>
        <div className="sousslct">
          <input className="chkd" type="checkbox" />
          <label>Smartphone</label>
        </div>
      </div>
      <hr />
      <div className="cards">
        {currentProducts.map((el) => (
          <Cards el={el} />
        ))}
      </div>
      <div className="pagination">
        <button
          className="btnPrvs"
          onClick={handlePrevPage}
          disabled={currentPage === 1}
        >
       Previous
        </button>
        {Array.from({ length: totalPages }, (_, index) => (
          <button
            className="btnpagt"
            key={index + 1}
            onClick={() => handlePageChange(index + 1)}
          >
            {index + 1}
          </button>
        ))}
        <button
          className="btnNext"
          onClick={handleNextPage}
          disabled={currentPage === totalPages}
        >
          Next
        </button>
      </div>
    </div>
  );
}

export default Products;
