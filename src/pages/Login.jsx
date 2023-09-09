import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import { Button, Form } from "react-bootstrap";

const Login = () => {
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
      navigate("/");
    } else {
      alert("Invalid Credential");
    }
  };

  return (
    <>
      <h2>Login Page</h2>
      <Form onSubmit={handleLogin}>
        <Form.Group className="mb-3 col-md-4">
          <Form.Label>Email </Form.Label>
          <Form.Control
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </Form.Group>
        <Form.Group className="mb-3 col-md-4">
          <Form.Label>Password </Form.Label>
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
    </>
  );
};

export default Login;
