import React from 'react';
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBBtn
} from 'mdb-react-ui-kit';
import { useNavigate } from 'react-router-dom';

import { Outlet } from 'react-router-dom';
import AllBooks from '../all-books/AllBooks';
import Header from '../header/Header';
import Recommended from '../recommended/Recommended';

function Admin(){
    //navigate
    let navigate=useNavigate()
    return<div>
        <div className="container">
      <div>
        <Header />
      </div>
    
    
      <div>
        <Outlet />
      </div>
    </div>
    </div>
}

export default Admin