import axios from "axios";
import { useEffect } from "react";
export const GetData = async () => {
  const fetchData = async () => {
    let response = await axios.get("http://localhost:5000/book/allBooks");
    
    return response.data.payload
    // setBooks()
  };
  useEffect(() => {
    fetchData();
  }, []);
};

GetData()