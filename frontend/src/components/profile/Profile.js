import { useSelector } from "react-redux";
import Header from "../header/Header";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useNavigate } from "react-router-dom";

function Profile() {
    let navigate=useNavigate()
  let { userObj, loginStatus } = useSelector((state) => state.login);
  return (
    <div className="container">
      <div>
        <Header />
      </div>
      <div className="conatiner  my-auto row">
        <div className="col-md-5 mx-auto mt-5">
          <Card >
           
            <Card.Body>
              <Card.Title>{userObj.userName}</Card.Title>
              <Card.Text>
              <p>Email: {userObj.email}</p>
              <p> Account Created On {userObj.createdAt}</p>
              </Card.Text>
             <Button onClick={()=>navigate("/user/books")} className="float-end btn btn-danger">Go to Dashboard</Button>
            </Card.Body>
          </Card>
        </div>
      </div>
    </div>
  );
}

export default Profile;
