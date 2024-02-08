import React, { useState } from "react";
// import { useFormik, Field, Form, ErrorMessage } from "formik";
import { Formik } from "formik";
import { useNavigate } from "react-router-dom";
import axios from "axios";
function SignUp() {

  //sttae for error
  let [error,setError]=useState("")
  // navigate
  let navigate = useNavigate();

  return (
    <div className="row">
      <div className="container mt-2 col-md-5 col-lg-6 col-sm-8 col-10 ">
        <h2 className="text-danger">BookSpot</h2>
        <div className="card  text-center shadow p-3 m-3 mt-5 w-75 mx-auto my-auto">
          <div className="card-body ">
            <div className="col-md-10 mx-auto">
           
            <h5 className="text-danger text-shadow">Sign Up</h5>
              {error&&<div className="text-danger">{error}</div>}
              {/* formik */}
              <Formik initialValues={{
                email:'',userName:'',password:'',mobileNumber:''
              }}
              // validations
              validate={
                values=>{
                  const errors={};
                  if(!values.email){
                    errors.email="Required"
                  }
                  else if( !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)){
                    errors.email="Invalid email address"
                  }
                  if(!values.userName){
                    errors.userName="Required"
                  }
                  if(!values.password){
                    errors.password="Required"
                  }
                  if(values.password.length<3){
                    errors.password="Length Should be atleast 3 characters"
                  }
                  if(!values.mobileNumber){
                    errors.mobileNumber="Required"
                  }
                  return errors;
                }
          }
          // Submit
          onSubmit={async(values,{setSubmitting})=>{
            try{
                  //make api request
                  let response = await axios.post(
                    "http://localhost:5000/user/register",
                    values
                  );
                  //on successfull registration
                  if (response.status === 201) {
                    navigate("/login");
                  }}
                  catch(err){
                    setError(err.response.data.message)
                   
            
                  }
          }}>
              {({
                values,errors,touched,handleChange,handleSubmit
              })=>(
                <form onSubmit={handleSubmit}>
                {/* userName */}
                <div className="mt-2 ">
                  <label htmlFor="userName" className="form-label float-start">
                    User name <span className="text-danger">*</span>
                  </label>
                  <input
                    id="userName"
                    type="text"
                    onChange={handleChange}
                    className="form-control mx-auto"
                    value={values.userName}
                  />
                  {errors.userName&&touched.userName&&<div className="text-danger bold">User name : {errors.userName}</div>}
                </div>
                 {/* mobileNumber */}
                 <div className="mt-2 ">
                  <label htmlFor="mobileNumber" className="form-label float-start">
                    Mobile Number <span className="text-danger">*</span>
                  </label>
                  <input
                    id="mobileNumber"
                    type="number"
                    onChange={handleChange}
                    className="form-control mx-auto"
                    value={values.mobileNumber}
                  />
                  {errors.mobileNumber&&touched.mobileNumber&&<div className="text-danger bold">Mobile Number : {errors.mobileNumber}</div>}
                </div>
                {/* email */}
                <div className="mt-2">
                  <label htmlFor="email" className="form-label float-start">
                    Email <span className="text-danger">*</span>
                  </label>
                  <input
                    id="email"
                    type="email"
                    className="form-control"
                    onChange={handleChange}
                    value={values.email}
                  />
                      {errors.email&&touched.email&&<div className="text-danger bold">Email : {errors.email}</div>}
                </div>
                {/* password */}
                <div className="mt-2">
                  <label htmlFor="email" className="form-label float-start">
                    Password <span className="text-danger">*</span>
                  </label>
                  <input
                    id="password"
                    type="password"
                    className="form-control"
                    onChange={handleChange}
                    value={values.password}
                  />
                   {errors.password&&touched.password&&<div className="text-danger bold">Password : {errors.password}</div>}
                </div>
                {/* sign up button */}
                <div className="mt-3">
                  <button
                    type="submit"
                    className="btn btn-danger me-3 form-control"
                  >
                    Sign Up
                  </button>
                </div>
                <button
                      className=" p-2 form-control  mt-3 btn btn-outline-danger"
                      onClick={() => navigate("/login")}
                    >
                     - - - Already have an account: Login Here - - -
                    </button>
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

export default SignUp;
