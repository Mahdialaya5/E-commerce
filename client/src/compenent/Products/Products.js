import React, { useState } from "react";
import Cards from "../cards/Cards";
import "./products.css";
import { useDispatch, useSelector } from "react-redux";
import { getAllProduct, searchPc, searchPhone, searchTablette } from "../../redux/Actions/actionsProduct";

function Products(){

  const [show_reset, setshow_reset] = useState(false)
  const [currentPage, setCurrentPage] = useState(1);
  const  productsPerPage = 6
  const products=useSelector(state=> state.productReducer.products)
  console.log(products);
  // Calculate pagination
  const totalPages = Math.ceil(products.length / productsPerPage);
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = products.slice(indexOfFirstProduct,indexOfLastProduct);
console.log(products);
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
 
  const disptach=useDispatch()
 
  return (
    <div id="products">
      <div className="slct">
        <div className="sousslct">
          <input className="chkd" type="checkbox"  onClick={(e)=>disptach(searchPc(),setshow_reset(true))} />
          <label style={{color:"#2470bc"}}   > pc </label>
        </div>
        <div className="sousslct">
          <input className="chkd" type="checkbox"  onClick={(e)=>disptach(searchTablette(),setshow_reset(true))}   />
          <label style={{color:"#2470bc"}}   >Tablette</label>
        </div>
        <div className="sousslct">
          <input className="chkd" type="checkbox"   onClick={(e)=>disptach(searchPhone(),setshow_reset(true))}  />
          <label style={{color:"#2470bc"}}   >Smartphone</label>
        </div>
   { show_reset ?     <button  className="btn_reset" onClick={()=>disptach(getAllProduct())} >reset</button>:null}
      </div>
   
      <hr />
   {  <div className="cards">
        {currentProducts.map((el) =>   <Cards el={el} />)}
        </div>}
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
