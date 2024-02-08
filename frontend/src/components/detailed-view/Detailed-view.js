import axios from "axios";
import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";
// const SweetAlert = require('react-bootstrap-sweetalert');
import Swal from 'sweetalert';

function DetailedView() {
  let { state } = useLocation();

  let{userObj}=useSelector((state)=>state.login)
 

  let navigate=useNavigate()

  const handleClick = () => {
    Swal({
      title: 'Product Added To Cart',
      text: 'There is no friend as loyal as a book, Keep Browsing :) ',
      icon: 'success',
      button: 'OK',
    })
    .then(() => {
      // Navigate to another page or route here
      if(userObj.roleId===2){
      window.location.href = '/user/cart';}
    })
  };

  const addToCart=async(type)=>{
   

    let response=await axios.post(`http://localhost:5000/cart/add-book`,{bookId:state.id,userId:userObj.id,bookType:type,quantity:1})

    //Sweet alerts
   handleClick()

  }
  const gotoAddress=(type)=>{
    navigate("/user/address",{state:{bookType:type,book:state}})
  }


  return (
    <div className="container mx-auto mt-5 ">
      <div className="row">
        {/* first part */}
        <div className=" row  mx-auto bg-light">
          {/* image */}
          <div className="col-md-2"></div>
          <div className="col-md-3  p-3">
            <img
              src={state.image}
              className="card-img"
              alt="..."
              width="100px"
              height="300px"
            />
          </div>

          {/* details */}
          <div className="col-md-1"></div>
          <div className="col-md-6 my-auto  ">
            <div className="card-body float-start ms-3">
              <h3 className="card-title">{state.bookName}</h3>
              <div className="card-text">
                {state.releasedDate.split("T")[0]}
              </div>
              <p className="card-text">
                by {state.author}{" "}
                <span className="text-secondary">(Author)</span>
              </p>
              <p>
                Buy new book at{" "}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  fill="currentColor"
                  class="bi bi-currency-rupee"
                  viewBox="0 0 16 16"
                >
                  <path d="M4 3.06h2.726c1.22 0 2.12.575 2.325 1.724H4v1.051h5.051C8.855 7.001 8 7.558 6.788 7.558H4v1.317L8.437 14h2.11L6.095 8.884h.855c2.316-.018 3.465-1.476 3.688-3.049H12V4.784h-1.345c-.08-.778-.357-1.335-.793-1.732H12V2H4v1.06Z" />
                </svg>
                <span>{state.newBookPrice}</span>
                <small className="text-secondary ms-3">
                  MRP{" "}
                  <span className="text-danger text-decoration-line-through">
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
                    <span>{state.mrp}</span>
                  </span>
                </small>
                <span className="ms-1">{state?.discountOnNewBook} % <small className="text-danger"> off</small> </span>
                <button className=" btn btn-warning d-inline text-dark ms-2" onClick={()=>addToCart("new")}>
              Add To Cart
            </button>
            <button className=" btn btn-danger d-inline text-dark ms-3" onClick={()=>gotoAddress("new")}>
              Buy Now
            </button>
              </p>
              <p>
                Buy Old book at{" "}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  fill="currentColor"
                  class="bi bi-currency-rupee"
                  viewBox="0 0 16 16"
                >
                  <path d="M4 3.06h2.726c1.22 0 2.12.575 2.325 1.724H4v1.051h5.051C8.855 7.001 8 7.558 6.788 7.558H4v1.317L8.437 14h2.11L6.095 8.884h.855c2.316-.018 3.465-1.476 3.688-3.049H12V4.784h-1.345c-.08-.778-.357-1.335-.793-1.732H12V2H4v1.06Z" />
                </svg>
                <span>{state.oldBookPrice}</span>
                <small className="text-secondary ms-3">
                 
                </small>
                <span>{state?.discountOnOldBook} % <small className="text-danger">off</small></span>
                <button className=" btn btn-warning d-inline text-dark ms-3" onClick={()=>addToCart("old")}>
              Add To Cart
            </button>
            <button className=" btn btn-danger d-inline text-dark ms-3" onClick={()=>gotoAddress("old")}>
              Buy Now
            </button>
              </p>
             
            </div>
           
          </div>
        </div>
      </div>
    </div>
  );
}

export default DetailedView;
