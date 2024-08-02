import { useState, useEffect } from "react";
//-----------------create hook----------
const useCsurf = () => {
  const URL = "http://localhost:5000";
  const [csrfToken, setCsrfToken] = useState("");
  const getCsurf = async () => {
    let response = await fetch(`${URL}/get-csurf`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
      mode: "cors",
    });
    let token = await response.json();
    setCsrfToken(token);
  };
  useEffect(() => {
    getCsurf();
  }, []);

  async function PostCsurf(endPoint, data) {
    let response = await fetch(`${URL}${endPoint}`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        "xsrf-token": csrfToken.csrfToken,
      },
      credentials: "include",
      mode: "cors",
      body: JSON.stringify(data),
    });
    let result = await response.json();
    return result;
  }

  return PostCsurf;
};

//----------------export--------------
export default useCsurf;
