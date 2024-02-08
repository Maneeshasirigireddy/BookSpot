import React, { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const Test = () => {
  return (
     <div>
    <div id="carouselExampleDark" className="carousel carousel-dark slide">
    <div className="carousel-indicators">
      <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
      <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
      <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
    </div>
    <div className="carousel-inner">
      <div className="carousel-item active" data-bs-interval="10000">
        <img src="https://bc-img.s3.ap-south-1.amazonaws.com/web_banners/2023041068594.webp" className="d-block w-100" alt="..." />
       
      </div>
      <div className="carousel-item" data-bs-interval="2000">
        <img src="https://bc-img.s3.ap-south-1.amazonaws.com/web_banners/2023061678252.webp" className="d-block w-100" alt="..." />
        
      </div>
      <div className="carousel-item">
        <img src="https://bc-img.s3.ap-south-1.amazonaws.com/web_banners/2023021780232.avif" className="d-block w-100" alt="..." />
       
      </div>
    </div>
    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
      <span className="carousel-control-prev-icon" aria-hidden="true"></span>
      <span className="visually-hidden">Previous</span>
    </button>
    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
      <span className="carousel-control-next-icon" aria-hidden="true"></span>
      <span className="visually-hidden">Next</span>
    </button>
  </div>
  </div>
    // <div className="center">
    //      <div className="container me-5">
    //   {" "}
    //   <div
    //     id="carouselExampleInterval"
    //     class="carousel slide"
    //     data-bs-ride="carousel"
    
    //   >
    //     <div class="carousel-item active">
    //       <div className="row">
    //         <div className="col-lg-4">
    //           <img src="https://bc-img.s3.ap-south-1.amazonaws.com/web_banners/2023060555036.png" class="d-block w-100" alt="img1 " />
    //         </div>{" "}
    //         <div className="col-lg-4">
    //           <img src="https://bc-img.s3.ap-south-1.amazonaws.com/web_banners/2023060555036.png" class="d-block w-100" alt="img2 " />
    //         </div>
    //         <div className="col-lg-4">
    //           <img src="https://bc-img.s3.ap-south-1.amazonaws.com/web_banners/2023060555036.png" class="d-block w-100" alt="img3 " />
    //         </div>
    //       </div>
    //       <div class="carousel-item " data-bs-interval="10000">
    //         <div className="row">
    //           <div className="col-lg-4">
    //             <img
    //               src="https://bc-img.s3.ap-south-1.amazonaws.com/web_banners/2023060555036.png"
    //               class="d-block w-100"
    //               alt="1 "
    //             />
    //           </div>{" "}
    //           <div className="col-lg-4">
    //             <img
    //              src="https://bc-img.s3.ap-south-1.amazonaws.com/web_banners/2023060555036.png"
    //               class="d-block w-100"
    //               alt="2 "
    //             />
    //           </div>
    //           <div className="col-lg-4">
    //             <img
    //              src="https://bc-img.s3.ap-south-1.amazonaws.com/web_banners/2023060555036.png"
    //               class="d-block w-100"
    //               alt="3 "
    //             />
    //           </div>
    //         </div>
    //       </div>
    //       <div class="carousel-item" data-bs-interval="2000">
    //         <div className="row">
    //           <div className="col-lg-4">
    //             <img
    //              src="https://bc-img.s3.ap-south-1.amazonaws.com/web_banners/2023060555036.png"
    //               class="d-block w-100"
    //               alt="4 "
    //             />
    //           </div>{" "}
    //           <div className="col-lg-4">
    //             <img
    //             src="https://bc-img.s3.ap-south-1.amazonaws.com/web_banners/2023060555036.png"
    //               class="d-block w-100"
    //               alt="5 "
    //             />
    //           </div>
    //           <div className="col-lg-4">
    //             <img
    //             src="https://bc-img.s3.ap-south-1.amazonaws.com/web_banners/2023060555036.png"
    //               class="d-block w-100"
    //               alt="6"
    //             />
    //           </div>
    //         </div>
    //       </div>
    //       <div class="carousel-item">
    //         <div className="row">
    //           <div className="col-lg-4">
    //             <img
    //               src="public/logo512.png"
    //               class="d-block w-100"
    //               alt="7 "
    //             />
    //           </div>{" "}
    //           <div className="col-lg-4">
    //             <img
    //               src="public/logo512.png"
    //               class="d-block w-100"
    //               alt="8"
    //             />
    //           </div>
    //           <div className="col-lg-4">
    //             <img
    //               src="public/logo512.png"
    //               class="d-block w-100"
    //               alt="9 "
    //             />
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //     <button
    //       class="carousel-control-prev"
    //       type="button"
    //       data-bs-target="#carouselExampleInterval"
    //       data-bs-slide="prev"
    //     >
    //       <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    //       <span class="visually-hidden">Previous</span>
    //     </button>
    //     <button
    //       class="carousel-control-next"
    //       type="button"
    //       data-bs-target="#carouselExampleInterval"
    //       data-bs-slide="next"
    //     >
    //       <span class="carousel-control-next-icon" aria-hidden="true"></span>
    //       <span class="visually-hidden">Next</span>
    //     </button>
    //   </div>
    // </div>
    // </div>
   
  );
};

export default Test;
