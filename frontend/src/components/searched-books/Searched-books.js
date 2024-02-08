import { useLocation } from "react-router-dom";
function SearchedBooks(){
    let {state}=useLocation()
    return  <div className="container mt-5">
    <div className="row">
      {/* traverse books array */}
      {state?.map((bookObj, index) => {
        return (
          <div className="col-2 mt-3 " >
            {/* displaying books in cards */}
            <div className="card mb-3 shadow">
              <div className="row no-gutters">
                {/* book image */}
                <div className="">
                  <img
                    src={bookObj.image}
                    className="card-img"
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
                  
                  <div className="card-text p-2">
                    <small className=" display-7 float-start">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        class="bi bi-currency-rupee"
                        viewBox="0 0 16 16"
                      >
                        <path d="M4 3.06h2.726c1.22 0 2.12.575 2.325 1.724H4v1.051h5.051C8.855 7.001 8 7.558 6.788 7.558H4v1.317L8.437 14h2.11L6.095 8.884h.855c2.316-.018 3.465-1.476 3.688-3.049H12V4.784h-1.345c-.08-.778-.357-1.335-.793-1.732H12V2H4v1.06Z" />
                      </svg>
                      <span>{bookObj.newBookPrice}</span>
                    </small>
                    <small className="float-end ">
                      MRP{" "}
                      <span className="text-secondary text-decoration-line-through text-danger text-danger">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="15"
                          height="15"
                          fill="currentColor"
                          className="bi bi-currency-rupee"
                          viewBox="0 0 16 16"
                        >
                          <path d="M4 3.06h2.726c1.22 0 2.12.575 2.325 1.724H4v1.051h5.051C8.855 7.001 8 7.558 6.788 7.558H4v1.317L8.437 14h2.11L6.095 8.884h.855c2.316-.018 3.465-1.476 3.688-3.049H12V4.784h-1.345c-.08-.778-.357-1.335-.793-1.732H12V2H4v1.06Z" />
                        </svg>
                        <span>{bookObj.newBookPrice}</span>
                      </span>
                    </small>
                   
                  </div>

                
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  </div>
}

export default SearchedBooks;