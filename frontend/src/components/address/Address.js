import { Formik } from "formik";
import { useSelector } from "react-redux";
import { Navigate, useLocation, useNavigate } from "react-router-dom";
import axios from "axios";

function Address() {
    let navigate=useNavigate()
    let { userObj, loginStatus, errorMessage } = useSelector(
        (state) => state.login
      );

      let { state } = useLocation();
      console.log(state)

    const gotoPayment = async () => {
        // console.log(price)
        // console.log(type)
        // let order=await axios.post ('http://localhost:5000/order/add-order',{userId:userObj.id,bookId:state.book.id,bookType:state.bookType,deliveryAddress:null})
        // console.log(order)
        let price
        if(state.bookType==="new"){ price=state.book.newBookPrice}
        else  price=state.book.oldBookPrice
        let link = await axios.get(
          ` http://localhost:5000/order/createPaymentSession/${state.book.id}/${state.bookType}/${price}`
        );
        window.open(link.data, "_self");
     
      };
  return (
    <div className="row">
    <div className="container mt-2 col-md-7 col-lg-6 col-sm-8 col-10 my-auto">
 
      <div className="card  text-center shadow p-3 m-3 mt-3 w-75 mx-auto my-auto">
        <div className="card-body ">
          <div className="col-md-10 mx-auto my-auto">
            <h5 className="text-shadow text-danger">Add Your Address</h5>
            {errorMessage && (
              <div className="text-danger">{errorMessage}</div>
            )}
            {/* form */}
            <Formik
          initialValues={{
            email: "",
            password: "",
          }}
          // validations
          validate={(values) => {
            const errors = {};
           
          }}
          // Submit
          onSubmit={(values, { setSubmitting }) => {
            console.log(values);
          }}
        >
          {({ values, errors, touched, handleChange, handleSubmit }) => (
            <form onSubmit={handleSubmit}>
              {/* houseNum */}
              <div className="mt-2">
                <label htmlFor="houseNum" className="form-label float-start">
                  House Number <span className="text-danger">*</span>
                </label>
                <input
                  id="houseNum"
                  type="text"
                  className="form-control"
                  onChange={handleChange}
                //   value={values.houseNum}
                />
               
              </div>
              {/* street */}
              <div className="mt-2">
                <label htmlFor="street" className="form-label float-start">
                  Street <span className="text-danger">*</span>
                </label>
                <input
                  id="street"
                  type="text"
                  className="form-control"
                  onChange={handleChange}
                //   value={values.street}
                />
               
              </div>
               {/* city */}
               <div className="mt-2">
                <label htmlFor="city" className="form-label float-start">
                  City  <span className="text-danger">*</span>
                </label>
                <input
                  id="city"
                  type="text"
                  className="form-control"
                  onChange={handleChange}
                //   value={values.city}
                />
               
              </div>
                {/* state */}
                <div className="mt-2">
                <label htmlFor="state" className="form-label float-start">
                  State  <span className="text-danger">*</span>
                </label>
                <input
                  id="state"
                  type="text"
                  className="form-control"
                  onChange={handleChange}
                
                />
               
              </div>
                 {/* Country */}
                 <div className="mt-2">
                <label htmlFor="country" className="form-label float-start">
                Country  <span className="text-danger">*</span>
                </label>
                <input
                  id="country"
                  type="text"
                  className="form-control"
                  onChange={handleChange}
                
                />
               
              </div>
                {/* Pin Code */}
                <div className="mt-2">
                <label htmlFor="pinCode" className="form-label float-start">
                Pin Code  <span className="text-danger">*</span>
                </label>
                <input
                  id="pinCode"
                  type="text"
                  className="form-control"
                  onChange={handleChange}
                
                />
               
              </div>
              {/* Add address button*/}
              <div className="mt-4">
                <button
                  type="submit"
                  className="btn btn-danger me-3 form-control "
                  onClick={gotoPayment}
                >
                  Proceed To Payment
                </button>
              </div>

             
            </form>
          )}
        </Formik>
          </div>
        </div>
      </div>
    </div>
  </div>

    
  );
}

export default Address;
