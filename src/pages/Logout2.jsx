import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";

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
      <h3>You Logout successfully</h3>
      <Link to="/login2">Login</Link>
    </>
  );
};

export default Logout2;
