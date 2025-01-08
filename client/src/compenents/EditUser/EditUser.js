import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Edituser.css";
import { useDispatch, useSelector } from "react-redux";
import { editUser, getCurrent } from "../../redux/Actions/actionUser";

function EditUser() {
  const dispatch = useDispatch();
  const naviagte = useNavigate();

  const [update, setupdate] = useState();
  const [currentpassword, setcurrentpassword] = useState("");
  const [newPassword, setnewpassword] = useState("");
  const [image, setimage] = useState();

  const user = useSelector((state) => state.userReducer.User);
  const err = useSelector((state) => state.userReducer.errors);

 

  const [error, seterror] = useState("");

  useEffect(() => { 
    dispatch(getCurrent());
    setupdate(user);
  }, [dispatch]);

  const handleclick = () => {
    if (currentpassword && newPassword.length >= 6) {
      const data = new FormData();
      data.append("email", update.email);
      data.append("name", update.name);
      data.append("password", currentpassword);
      data.append("newpassword", newPassword);
      data.append("file", image);

      dispatch(editUser(user._id, data, naviagte));
    }
    if (newPassword && currentpassword === "") {
      seterror("Current password require");
    }
    if (newPassword.length <= 6 && currentpassword) {
     
      seterror("Length password should be 6 caractares");
    }
    if (currentpassword && newPassword === "") {
      seterror("New password is empty");
    }
    if (newPassword === "" && currentpassword === "") {
      const data = new FormData();
      data.append("name", update.name);
      data.append("file", image);
      dispatch(editUser(user._id, data, naviagte));
    }
  };

  return (
    <div className="EditUser">
      <div className="edituser" id="formedit">
        <div className="form-floating ">
          <label style={{ color: "white" }} for="floatingInput">
            NEW USER NAME
          </label>
          <input
            type="text"
            className="form-control inpt "
            id="floatingInput"
            placeholder="New name"
            onChange={(e) => setupdate({ ...update, name: e.target.value })}
          />
        </div>
        <div className="form-floating">
          <label style={{ color: "white" }} for="floatingInput">
            Change photo{" "}
          </label>
          <input
            type="file"
            className="form-control inpt"
            id="floatingInput"
            onChange={(e) => setimage(e.target.files[0])}
          />
          <div id="save">
          </div>
        </div>
       
    
      </div>
      <div className="edit_password">
        <div className="form-floating ">
          <label style={{ color: "white" }} for="floatingInput">
            Current passowrd
          </label>
          <input
            type="password"
            className="form-control inpt "
            id="floatingInput"
            placeholder="current password"
            onChange={(e) => setcurrentpassword(e.target.value)}
          />

       
        </div>
        <div className="form-floating ">
          <label style={{ color: "white" }} for="floatingInput">
            New passowrd
          </label>
          <input
            type="password"
            className="form-control inpt "
            id="floatingInput"
            placeholder="new password"
            onChange={(e) => setnewpassword(e.target.value)}
          />
       </div>
      </div>
      <div  className="btns_edit_user" >
      <button
              type="button"
              className="btn btn-primary btnEdituser"
              onClick={handleclick}
            >
              save change
            </button>
            <Link to={"/profile"} className="btnEdituser" >
           
              <button type="button" className="btn btn-success  btnEdituser">
                return
              </button>
            </Link>
            <p style={{ color: "red" }}>
          {error ? error : err ? err.msg : null}
        </p>
            </div>
    </div>
  );
}

export default EditUser;
