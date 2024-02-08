import axios from "axios";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Recommended from "../recommended/Recommended";
import Swal from 'sweetalert';
function Cart() {
  let { userObj } = useSelector((state) => state.login);
  let [cartItems, setCartItems] = useState();
  let [totalAmount,setTotalAmount]=useState(0)
  let [quantity,setQuantity]=useState(false)
  let [deleted,setDeleted]=useState(false)

  const fetchData = async () => {
    let response = await axios.get(
      `http://localhost:5000/cart/allBooks/${userObj.id}`
    );

    setCartItems(response.data.payload);
  };
  useEffect(() => {
    fetchData();
    setQuantity(false)
    setDeleted(false)
  }, [quantity,deleted]);

  // const goToPayment=async()=>{
  //   let totalAmount=0
  //   let price=0
  //   for (let item of cartItems){
  //     if(item.bookType==="new"){
  //      price= item.Book.newBookPrice
  //     }
  //     else{
  //       price=item.Book.newBookPrice
  //     }
      
  //     console.log(item)
  //         totalAmount+=price*item.quantity
  //   }
  //   let link = await axios.get(
  //     ` http://localhost:5000/order/createPaymentSession/${state.book.id}/${state.bookType}/${price}`
  //   );
  //   window.open(link.data, "_self");

  // }

  const deleteFromCart=async(id)=>{
    let response=await axios.delete
    (`http://localhost:5000/cart/removeFromCart/${id}`)
   
    setDeleted(true)
    
  }
  const resetQuantity=async(id,quantity)=>{
    let response=await axios.put(`http://localhost:5000/cart/quantity/${id}`,{quantity:quantity})
   
    if(quantity===0){handleClick(id)}
    setQuantity(true)
  }

  const handleClick = (id) => {
    Swal({
      
      text: 'This action will remove   the product from cart  ',
      icon: 'warning',
      button: 'OK',
      showCancelButton: true,
    })
    .then(() => {
      // Navigate to another page or route here
      deleteFromCart(id)
      window.location.href = '/user/cart';
    })
  };


  return (
    <div className="container">
          <div className="container ">
        <Recommended />
      </div>
      {!cartItems?.length?<div className="text-danger">No Items were added to Cart</div>:
    <div>  <div className="row">
        {cartItems?.map((bookObj,index) => {
          return (
           
            <div className="col-2 mt-3 " key={index}>
             
              {/* displaying books in cards */}
              <div className="card mb-3 shadow">
                <div className="row no-gutters">
                  {/* book image */}
                  <div className="">
                    <img
                      src={bookObj.Book.image}
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
                      by{" "}
                      <span className="text-dark"> {bookObj.Book.author} </span>
                      <div>
                        {" "}
                        <small className="text-danger">
                          You have selected to buy {bookObj.bookType} Book
                        </small>
                      </div>
                    </div>
                    {/* price details */}
              
                    <div className="card-text p-2">
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
                        {/* based on book type */}
                        <span>{bookObj.bookType==="new"?bookObj.Book.newBookPrice:bookObj.Book.oldBookPrice}</span>
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
                          <span>{bookObj.Book.mrp}</span>
                        </span>
                      </small>
                      <div className="mt-5">
                        <button className="btn btn-outline-danger btn-sm" onClick={()=>resetQuantity(bookObj.id,bookObj.quantity-1)}>
                          -
                        </button>
                        Quantity{" "}
                        <button className="btn btn-outline-danger btn-sm" onClick={()=>resetQuantity(bookObj.id,bookObj.quantity+1)}>
                          +
                        </button>
                      </div>
                      <div className="mt-4">No.of Copies : {bookObj.quantity}</div> 
                      <button className="btn btn-sm btn-outline-warning mt-4 text-dark" onClick={()=>handleClick(bookObj.id)}>Remove From Cart</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <div className="row container mt-3 " >
        <button className="btn btn-danger w-50 mx-auto">
          Buy All Now 
        </button>
      </div></div>}
    </div>
  );
}

export default Cart;
