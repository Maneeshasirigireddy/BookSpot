import axios from "axios"
import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"

function AllBooks(){
    let [books,setBooks]=useState()
    const fetchData=async()=>{
        let response=await axios.get('http://localhost:5000/book/allBooks')
   
    setBooks(response.data.payload)
 
    // setBooks()
}
    useEffect(()=>{
       
    fetchData()
            
    },[])

    let navigate=useNavigate()
    return<div className="container mt-4">
        
            <div className="row">
                {/* traverse books array */}
                {books?.map((bookObj,index)=>{
                return <div className="col-6 mt-3">
                    {/* displaying books in cards */}
                            <div className="card mb-3 shadow" >
                                <div className="row no-gutters">
                                    {/* book image */}
                                    <div className="col-md-5">
                                        <img src={bookObj.image} className="card-img" alt="book image" height="200px" />
                                    </div>
                                    <div className="col-md-7 ">
                                        {/* card-body */}
                                        <div className="card-body mt-2">
                                            {/* card-title book name */}
                                        <h5 className="card-title">{bookObj.bookName}</h5>
                                        {/* author name */}
                                        <div>by {bookObj.author} | <small className="text-muted">{bookObj.releasedDate.split("T")[0]}</small></div>
                                        {/* price details */}
                                        <p className="card-text">
                                            <span className=" display-6">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-currency-rupee" viewBox="0 0 16 16">
  <path d="M4 3.06h2.726c1.22 0 2.12.575 2.325 1.724H4v1.051h5.051C8.855 7.001 8 7.558 6.788 7.558H4v1.317L8.437 14h2.11L6.095 8.884h.855c2.316-.018 3.465-1.476 3.688-3.049H12V4.784h-1.345c-.08-.778-.357-1.335-.793-1.732H12V2H4v1.06Z"/>
                                                
                                                </svg><span >{bookObj.newBookPrice}</span>
                                            </span>
                                                <span>MRP <span className="text-secondary text-decoration-line-through">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" fill="currentColor" className="bi bi-currency-rupee" viewBox="0 0 16 16">
  <path d="M4 3.06h2.726c1.22 0 2.12.575 2.325 1.724H4v1.051h5.051C8.855 7.001 8 7.558 6.788 7.558H4v1.317L8.437 14h2.11L6.095 8.884h.855c2.316-.018 3.465-1.476 3.688-3.049H12V4.784h-1.345c-.08-.778-.357-1.335-.793-1.732H12V2H4v1.06Z"/>
                                                        </svg><span >{bookObj.newBookPrice}</span>
                                                        </span>
                                                </span>
                                                <span>{bookObj?.discount} % off</span>

                                        </p>
                                        
                                        <button className="btn btn-outline-primary float-end" onClick={()=>navigate("/detailed-view",{state:bookObj})}>See more</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    })}
             </div>
        </div>
       
   
}

export default AllBooks