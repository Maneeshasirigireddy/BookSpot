import React, { useEffect, useState } from "react";

import { Modal } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { useNavigate, useLocation } from "react-router-dom";
import { useForm } from "react-hook-form";
import axios from "axios";
import { useSelector } from "react-redux";
import "./Sell-book.css";


import Swal from "sweetalert";

function SellBook() {
  //state from AllUsers

  let [error, setError] = useState("");
  let [res, setRes] = useState({});
  let [file, setFile] = useState(null);

  let { userObj, loginStatus } = useSelector((state) => state.login);

  //on File Select
  const onFileSelect = (event) => {
    //change State
    setFile(event.target.files[0]);
  };

  let navigate = useNavigate();
  let {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm();

  const handleClick = () => {
    Swal({
      title: "Product Request for selling",
      text: "There is no friend as loyal as a book, Keep Browsing :) ",
      icon: "success",
      button: "OK",
    }).then(() => {
      
      
      // Navigate to another page or route here
      window.location.href = "/user/books";
    });
  };

  //onFormSubmit
  const onSubmit = async (bookObj) => {

    let formData = new FormData();

    formData.append("image", file, file.name);
    formData.append("bookObj", JSON.stringify(bookObj));
  
    let response = await axios.post(
      `http://localhost:5000/book/sell-book/${userObj.email}`,
      formData
    );
 

    if (response.status === 201) {
      handleClick();
    }
  };

  // closeModal
  // closeModal();
  //   };

  //useEffect
  //   useEffect(() => {
  //     setValue("email", state.email);
  //     setValue("role", state.role);
  //   }, []);

  return (
    <div className="component-container bg_image bg-dark">
      <div>
        {/* error displaying */}
        {Object.keys(error) && (
          <div>
            {" "}
            <p className="text-danger text-center fw-bold mt-5">{error}</p>
          </div>
        )}
      </div>

      {/* Assign Role Form */}
     
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="row text-light">
            <div className="col-md-1"></div>
              <div className="col-md-5">
                {/* bookName */}
                <div className="mt-3">
                  <label htmlFor="bookName" className="form-label float-start">
                    Book Name
                  </label>
                  <input
                    type="text"
                    {...register("bookName")}
                    className="form-control"
                  />
                </div>
                {/* Author */}
                <div className="mt-3">
                  <label htmlFor="author" className="form-label float-start">
                    Author
                  </label>
                  <input
                    type="text"
                    {...register("author")}
                    className="form-control"
                  />
                </div>
                {/* zenre */}
                <div className="mt-3">
                  <label htmlFor="zenre" className="form-label float-start">
                    Zenre
                  </label>
                  <input
                    type="text"
                    {...register("zenre")}
                    className="form-control"
                  />
                </div>
                {/* Description */}
                <div className="mt-3">
                  <label htmlFor="desc" className="form-label float-start">
                    Description
                  </label>
                  <textarea
                    type="text"
                    {...register("desc")}
                    className="form-control"
                  />
                </div>
              </div>
              <div className="col-md-5">
                {/* Selling price */}
                <div className="mt-3">
                  <label
                    htmlFor="sellingPrice"
                    className="form-label float-start"
                  >
                    Selling Price
                  </label>
                  <input
                    type="number"
                    {...register("sellingPrice")}
                    className="form-control"
                  />
                </div>

                {/* released date */}
                <div className="mt-3">
                  <label
                    htmlFor="releasedDate"
                    className="form-label float-start"
                  >
                    Released Date
                  </label>
                  <input
                    type="date"
                    {...register("releasedDate")}
                    className="form-control"
                  />
                </div>

                {/* Image  */}
                <div className="mb-3 mt-3">
                  <label htmlFor="image" className="form-label float-start">
                    Book Image
                  </label>
                  <input
                    type="file"
                    name="image"
                    className="form-control mb-3"
                    onChange={(event) => onFileSelect(event)}
                  />
                </div>
              </div>
              {/* add book button */}
              <div className="mt-3 float-end">
                <button className="btn btn-danger float-end me-5 mb-5 " type="submit" >
                  Sell Book
                </button>
              </div>
            </div>
        
        </form>
      
    </div>
  );
}

export default SellBook;
