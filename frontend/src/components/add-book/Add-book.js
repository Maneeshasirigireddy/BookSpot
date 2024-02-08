import React, { useEffect, useState } from "react";

import { Modal } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { useNavigate, useLocation } from "react-router-dom";
import { useForm } from "react-hook-form";
import axios from "axios";
import { useSelector } from "react-redux";
import "./Add-book.css";

function AddBook() {
  //state from AllUsers

  let [error, setError] = useState("");
  let [res, setRes] = useState({});
  let [file, setFile] = useState(null);

  //on File Select
  const onFileSelect = (event) => {
    //change State
    setFile(event.target.files[0]);
  };

  let { userObj, loginStatus } = useSelector((state) => state.login);

  let navigate = useNavigate();
  let {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm();

  //state for Modal
  let [showModal, setShowModal] = useState(true);
  // const openModal = () => setShowModal(true);
  const closeModal = () => {
    setShowModal(false);
    navigate("/admin");
    // navigate("/super-admin/abcd@westagilelabs.com");
  };

  //onFormSubmit
  const onFormSubmit = async (bookObj) => {
    let formData = new FormData();
    formData.append("image", file, file.name);
    formData.append("bookObj", JSON.stringify(bookObj));
  
    let response = await axios.post(
      "http://localhost:5000/book/add-book",
      formData
    );
  
    if (response.status === 201) {
      navigate("/admin");
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
    <div>
      <div>
        {/* error displaying */}
        {Object.keys(error) && (
          <div>
            {" "}
            <p className="text-danger text-center fw-bold mt-5">{error}</p>
          </div>
        )}
      </div>
      <h3 className="text-danger">Add A Book</h3>
      <form onSubmit={handleSubmit(onFormSubmit)}>
        <div className="row add_book_bg_image text-white">
          <div className="col-md-1"></div>
          <div className=" col-md-5 ">
            {" "}
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
              <label htmlFor="desc" className="form-label float-start ">
                Description
              </label>
              <textarea
                type="text"
                {...register("desc")}
                className="form-control"
              />
            </div>
            {" "}
            {/* New Price */}
            <div className="mt-3">
              <label htmlFor="newBookPrice" className="form-label float-start">
                New Book Price
              </label>
              <input
                type="number"
                {...register("newBookPrice")}
                className="form-control"
              />
            </div>
            {/* Old Price */}
            <div className="mt-3">
              <label htmlFor="oldBookPrice" className="form-label float-start">
                Old Book Price
              </label>
              <input
                type="number"
                {...register("oldBookPrice")}
                className="form-control"
              />
            </div>
          
          </div>
          <div className=" col-md-5">
             {/* released date */}
             <div className="mt-3">
              <label htmlFor="releasedDate" className="form-label float-start">
                Released Date
              </label>
              <input
                type="date"
                {...register("releasedDate")}
                className="form-control"
              />
            </div>
            {/* MRP */}
            <div className="mt-3">
              <label htmlFor="mrp" className="form-label float-start">
                MRP
              </label>
              <input
                type="number"
                {...register("mrp")}
                className="form-control"
              />
            </div>
            {/* Dicount */}
            <div className="mt-3">
              <label htmlFor="discountOnOldBook" className="form-label float-start">
                Discount for old book
              </label>
              <input
                type="number"
                {...register("discountOnOldBook")}
                className="form-control"
              />
            </div>
            {/* Dicount */}
            <div className="mt-3">
              <label htmlFor="discountOnNewBook" className="form-label float-start">
                Discount for new book
              </label>
              <input
                type="number"
                {...register("discountOnNewBook")}
                className="form-control"
              />
            </div>
            {/* Old Book Copies */}
            <div className="mt-3">
              <label htmlFor="oldBookCopies" className="form-label float-start">
                old Book Copies
              </label>
              <input
                type="text"
                {...register("oldBookCopies")}
                className="form-control"
              />
            </div>
            {/* New Book Copies */}
            <div className="mt-3">
              <label htmlFor="newBookCopies" className="form-label float-start">
                New Book Copies
              </label>
              <input
                type="text"
                {...register("newBookCopies")}
                className="form-control"
              />
            </div>
            {/* Image  */}
            <div className="mb-3">
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
            <button className="btn btn-danger float-end me-5 mb-5" type="submit">
              Add Book
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default AddBook;
