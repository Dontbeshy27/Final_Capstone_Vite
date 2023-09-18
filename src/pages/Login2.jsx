import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import { Button, Form } from "react-bootstrap";
import videoBg from '../assets/videoBg.mp4'
const Login2 = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { setToken, setIsAuthenticated } = useAuth();

  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    const url = `${import.meta.env.VITE_API_URL}/login2`;

    const requestOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: email,
        password: password,
      }),
    };

    const fetchResponse = await fetch(url, requestOptions);
    if (fetchResponse.status === 200) {
      let data = await fetchResponse.json();
      setToken(data.token);
      setIsAuthenticated(true);
      navigate("/home");
    } else {
      alert("Invalid Credential");
    }
  };

  return (
    <>
      <h2 lassName="text-center ">Login Page</h2>
      <Form className="card"onSubmit={handleLogin}>
        <Form.Group className="mb-3 ">
          <Form.Label className="text-light">Email </Form.Label>
          <Form.Control
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </Form.Group>
        <Form.Group className="mb-3 ">
          <Form.Label className="text-light">Password </Form.Label>
          <Form.Control
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Login
        </Button>
      </Form>
      <video id="background-video" src={videoBg} autoPlay loop muted />
    </>
  );
};

export default Login2;
