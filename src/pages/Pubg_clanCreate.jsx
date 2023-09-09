import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";

const Pubg_clanCreate = () => {
  const [pubg_clan, setPubg_clan] = useState({
    firstName: "",
    lastName: "",
    age: 0,
    email: "",
    gender: "",
  });
  const { token } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const url = `${import.meta.env.VITE_API_URL}/pubg_clans`;

    const requestOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },

      body: JSON.stringify({
        user_name: employee.username,
        password: employee.password,
        email: employee.email,
        clan_name: employee.clanname,
        ingame_name: employee.ingamename,
        role: employee.role,
      }),
    };

    fetch(url, requestOptions)
      .then((response) => response.json())
      .then((json) => {
        console.log(json);
        navigate(`/pubg_clans/${json.employee.id}`);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEmployee((prev) => {
      return { ...prev, [name]: value };
    });
  };

  return (
    <>
      <h1>Employee Create</h1>
      <form onSubmit={handleSubmit}>
        <p>
          <label>Username</label>
          <input
            type="text"
            name="username"
            value={employee.username}
            onChange={handleChange}
          />
        </p>
        <p>
          <label>Password</label>
          <input
            type="text"
            name="password"
            value={employee.password}
            onChange={handleChange}
          />
        </p>
        <p>
          <label>Email</label>
          <input
            type="email"
            name="email"
            value={employee.email}
            onChange={handleChange}
          />
        </p>
        <p>
          <label>Clan Name</label>
          <input
            type="text"
            name="clanname"
            value={employee.clanname}
            onChange={handleChange}
          />
        </p>
        <p>
          <label>Ingame Name</label>
          <input
            type="text"
            name="ingamename"
            value={employee.ingamename}
            onChange={handleChange}
          />
        </p>
        <p>
          <label>Role</label>
          <input
            type="text"
            name="role"
            value={employee.role}
            onChange={handleChange}
          />
        </p>
        <input type="submit" value="Save" />
      </form>
    </>
  );
};

export default Pubg_clanCreateCreate;
