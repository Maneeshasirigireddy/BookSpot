import { Carousel } from "react-bootstrap";
function Recommended() {
  

  return (
    <Carousel
    variant="dark"
    
   
    className="w-100 mx-auto mb-3 mt-5"
  >
    <Carousel.Item>
      <img
        className="d-block w-100"
        src="https://bc-img.s3.ap-south-1.amazonaws.com/web_banners/2023041068594.webp"
        alt="2 BHK"
        height="200px"
      
      />
    
    </Carousel.Item>
    <Carousel.Item>
      <img
        className="d-block w-100"
        src="https://bc-img.s3.ap-south-1.amazonaws.com/web_banners/2023060555036.png"
        alt="2 BHK"
        height="200px"
      
      />
    
    </Carousel.Item>
    <Carousel.Item>
      <img
        className="d-block w-100"
        src="https://bc-img.s3.ap-south-1.amazonaws.com/web_banners/2023061678252.webp"
        alt="2 B H K"
        height="200px"
      />
     
    </Carousel.Item>
    <Carousel.Item>
      <img
        className="d-block w-100"
        src="https://bc-img.s3.ap-south-1.amazonaws.com/web_banners/202305181462.webp"
        alt="3 B H K"
        height="200px"
      />
    
    </Carousel.Item>
  </Carousel>





  );
}

export default Recommended;
