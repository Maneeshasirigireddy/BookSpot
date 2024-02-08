import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Recommended from "../recommended/Recommended";
import { useSelector } from "react-redux";
function BuyBook() {
  let { userObj } = useSelector((state) => state.login);
  let [books, setBooks] = useState();
  let navigate = useNavigate();
  const fetchData = async () => {
    let response = await axios.get("http://localhost:5000/book/buy-books");
   
    setBooks(response.data.payload);
  
    // setBooks()
  };
  useEffect(() => {
    fetchData();
  }, []);
  //goto detailed view of book
  const gotoDetailedView = (bookObj) => {
    if (userObj.roleId === 2) {
      navigate("/user/detailed-view", { state: bookObj });
    } else navigate("/admin/detailed-view", { state: bookObj });
  };
  return (
    <div className="container mt-5">
      <div className="container ">
        <Recommended />
      </div>
      <div className="row">
        {/* traverse books array */}
        {books?.map((bookObj, index) => {
          return (
            <div
              className="col-2 mt-3 "
              onClick={() => gotoDetailedView(bookObj)}
              id={index}
            >
              {/* displaying books in cards */}
              <div className="card mb-3 shadow">
                <div className="row no-gutters">
                  {/* book image */}
                  <div className="">
                    <img
                      src={bookObj.image}
                      className="card-img img-thumbnail rounded"
                      alt="book image"
                      height="150px"
                    />
                  </div>

                  {/* card-body */}
                  <div className="card-body mt-2">
                    {/* card-title book name */}
                    <h5 className="card-title">{bookObj.bookName}</h5>
                    {/* author name */}
                    <div className="text-secondary">
                      by <span className="text-dark"> {bookObj.author} </span>
                    </div>
                    {/* price details */}

                    <div className="card-text p-2 float-end me-1 mb-1 text-danger">
                      <small className=" display-7 float-start">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          fill="currentColor"
                          className="bi bi-currency-rupee"
                          viewBox="0 0 16 16"
                        >
                          <path d="M4 3.06h2.726c1.22 0 2.12.575 2.325 1.724H4v1.051h5.051C8.855 7.001 8 7.558 6.788 7.558H4v1.317L8.437 14h2.11L6.095 8.884h.855c2.316-.018 3.465-1.476 3.688-3.049H12V4.784h-1.345c-.08-.778-.357-1.335-.793-1.732H12V2H4v1.06Z" />
                        </svg>
                        <span>{bookObj.sellingPrice}</span>
                      </small>
                     
                    </div>
                  </div>
                </div>
                <button className="btn btn-danger m-2">Buy Now</button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default BuyBook;
