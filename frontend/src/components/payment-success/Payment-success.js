import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useSelector } from "react-redux";
function PaymentSuccess() {
  let navigate = useNavigate();
  let {userObj}=useSelector((state)=>state.login)
  const queryParams = new URLSearchParams(window.location.search);
  const sessionId = queryParams.get("session_id");

  const afterPayment = async () => {
    let res = await axios.get(
      `http://localhost:5000/order/successfullPayment/${sessionId}/${userObj.id}`
    );

    if (res.data.message==="updated") {
      navigate("/user");
    }
  };
  useEffect(() => {
    afterPayment();
  }, []);
  return <div>Payment success... please wait .....</div>;
}
export default PaymentSuccess;