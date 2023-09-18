import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
// import "./about_US.css";
const Logout2 = () => {
  const { token, setToken, setIsAuthenticated } = useAuth();

  useEffect(() => {
    async function doLogOut() {
      const url = `${import.meta.env.VITE_API_URL}/logout2`;
      const requestOptions = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      };

      const fetchResponse = await fetch(url, requestOptions);
      if (fetchResponse.status === 200) {
        setIsAuthenticated(false);
        setToken(null);
      }
    }
    doLogOut();
  }, []);

  return (
    <>
      <div className="container mt-5 text-center">
        <h3 className="text-white">You have logged out successfully</h3>
        <Link to="/login2" className="btn btn-primary">Login</Link>
      </div>

    </>
  );
};

export default Logout2;
