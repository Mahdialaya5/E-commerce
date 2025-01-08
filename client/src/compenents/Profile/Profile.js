import React, { useEffect } from "react";
import "./Profil.css";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import ProductUser from "../ProductUser/ProductUser";
import img from "./blank-profile-picture-973460_640.webp";


function Profile() {
  const user = useSelector((state) => state.userReducer.User);
  const Products = useSelector((state) => state.productReducer.products);
  const productsbyuser = Products.filter((el) => el.seller._id === user._id);
  


  return (
    <>
      <div className="containerPfrl">
        <div className="flxPrf">
          <h2 className="NamePrf">{user.name}</h2>
        </div>

        {user.img ? (
          <img
            src={user.img}
            alt="profile"
            style={{ width: "150px", borderRadius: "20%", height: "200px" }}
          />
        ) : (
          <img
            src={img}
            alt="profile"
            style={{ width: "150px", borderRadius: "20%" }}
          />
        )}
        <h3 className="desc">profil of {user.role}</h3>

        {user.role === "company" && productsbyuser != [] ? (
          <ProductUser />
        ) : null}
        <Link to="/profileSettings">
         
          <button className="btnSttg">profile Settings</button>
        </Link>
      </div>
    </>
  );
}

export default Profile;
