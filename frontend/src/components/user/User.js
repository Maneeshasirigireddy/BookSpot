import { Outlet } from "react-router-dom";
import Header from "../header/Header";
import AllBooks from "../all-books/AllBooks";
import Recommended from "../recommended/Recommended";
import Books from "../books/Books";


function User() {
  return (
    <div className="container">
      <div>
        <Header />
      </div>
    
    
      <div>
        <Outlet />
      </div>
    </div>
  );
}

export default User;
