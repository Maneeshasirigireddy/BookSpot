import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { Formik } from "formik";
function Header() {
  //state
  let { userObj, loginStatus, errorMessage } = useSelector(
    (state) => state.login
  );

 

  let navigate = useNavigate();


  // <Dropdown>
  // <Dropdown.Toggle variant="" id="dropdown-basic">
  //   Categories
  // </Dropdown.Toggle>

  // <Dropdown.Menu>
  //   <Dropdown.Item >Devotional</Dropdown.Item>
  //   <Dropdown.Item>
  //     Fictional
  //   </Dropdown.Item>
  //   <Dropdown.Item >
  //     Non Fictional
  //   </Dropdown.Item>
  //   <Dropdown.Item >
  //     Educational
  //   </Dropdown.Item>
  //   <Dropdown.Item >
  //     Noval
  //   </Dropdown.Item>
  // </Dropdown.Menu>
// </Dropdown>

  //onFormSubmit
  // const handleChange = async (searchItem) => {
  //   console.log(searchItem)
  //   let response = await axios.get(
  //     `http://localhost:5000/book/searchBook/${searchItem}`
      
  //   );
  //   console.log(response)
  //   navigate("searched-book",{state:response.data.payload});
  // };

  return (
    <div className="container bg-danger me-3">
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        {/* heading */}
        <h1 className=" display-5 ">BookSpot</h1>

        <div
          className="collapse navbar-collapse ms-4"
          id="navbarSupportedContent"
        >
          <ul className="navbar-nav mr-auto">
            {/* call */}
            <li className="nav-item active">
              <h5 className="nav-link">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-telephone-fill"
                  viewBox="0 0 16 16"
                >
                  <path
                    fillRule="evenodd"
                    d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z"
                  />
                </svg>{" "}
                <span>+91 9087656798</span>
                <span className="sr-only">(current)</span>
              </h5>
            </li>
            {userObj.roleId === 1 ? (
              <ul className="navbar-nav mr-auto">
              <li className="nav-item ms-3">
                <NavLink className="nav-link" to="add-book">
                  Add a book
                </NavLink>
              </li>
               <li className="nav-item ms-3">
                <NavLink className="nav-link" to="buy-book">
                  Buy Book
                </NavLink>
              </li></ul>
            ) : (
              <ul className="navbar-nav mr-auto">
                <li className="nav-item ms-3">
                  <NavLink className="nav-link" to="sell-book">
                    Sell a book
                  </NavLink>
                </li>
                <li className="nav-item ms-3">
                  <NavLink className="nav-link" to="cart">
                    Cart
                  </NavLink>
                </li>
                <li className="nav-item ms-3">
                  <NavLink className="nav-link" to="orders">
                    Orders
                  </NavLink>
                </li>
               
              </ul>
            )} <li className="nav-item ms-3">
            <NavLink className="nav-link" to="books">
              See all Books
            </NavLink>
          </li>
            {/* sell a book */}
          </ul>{" "}
        </div>
        {/* search */}
        <div className="mx-auto  ">
        <Formik
                initialValues={{
                 searchItem:""
                }}
               
                  
                 
                // Submit
                onSubmit={async(values, { setSubmitting }) => {
                  console.log(values)
                  let response = await axios.get(
                    `http://localhost:5000/book/searchBook/${values.searchItem}`
                    
                  );
                   console.log(response)
                  navigate("searched-book",{state:response.data.payload});
                 
                }}
              >
                {({ values, errors, touched, handleChange, handleSubmit }) => (
                  <form onSubmit={handleSubmit}>
                    {/* email */}
                    <div className="mt-2">
                      
                      <input
                        id="searchItem"
                        type="text"
                        className="form-control"
                        onChange={handleChange}
                        value={values.searchItem}
                
                   />

                   </div>
                   <button
              className="btn float-end bg-light text-danger"
              type="submit"
            >
              Search{" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-search"
                viewBox="0 0 16 16"
              >
                <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
              </svg>
            </button> 
                  </form>
                )}
              </Formik>
    
        </div>
      </nav>
    </div>
  );
}

export default Header;
