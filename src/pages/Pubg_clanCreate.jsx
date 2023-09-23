import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";


const Pubg_clanCreate = () => {
    const [pubg_clan, setPubg_clan] = useState ({
    user_name: "",
    password: "",
    email: "",
    clan_name: "",
    ingame_name: "",
    role: "",
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
        user_name: pubg_clan.user_name,
        password: pubg_clan.password,
        email: pubg_clan.email,
        clan_name: pubg_clan.clan_name,
        ingame_name: pubg_clan.ingame_name,
        role: pubg_clan.role,
      }),
    };

    fetch(url, requestOptions)
      .then((response) => response.json())
      .then((json) => {
        console.log(json);
        navigate(`/pubg_clans/${json.pubg_clan.id}`);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPubg_clan((prev) => {
      return { ...prev, [name]: value };
    });
  };

  return (
    <>
      <h1 className="text-center text-white">CREATE YOUR PUBG CLAN INFORMATION</h1>
       <form className="card" onSubmit={handleSubmit}>
          <div className="form-group">
            <label className="text-light" >Username</label>
            <input
              type="text"
              name="user_name"
              className="form-control"
              value={pubg_clan.user_name}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label className="text-light">Password</label>
            <input
              type="text"
              name="password"
              className="form-control"
              value={pubg_clan.password}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label className="text-light">Email</label>
            <input
              type="email"
              name="email"
              className="form-control"
              value={pubg_clan.email}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label className="text-light">Clan Name</label>
            <input
              type="text"
              name="clan_name"
              className="form-control"
              value={pubg_clan.clan_name}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label className="text-light">Ingame Name</label>
            <input
              type="text"
              name="ingame_name"
              className="form-control"
              value={pubg_clan.ingame_name}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label className="text-light">Role</label>
            <input
              type="text"
              name="role"
              className="form-control"
              value={pubg_clan.role}
              onChange={handleChange}
            />

          </div>
          <button type="save" className="btn btn-primary" value="save">Submit</button>
        </form>
    
    </>
  );
};

export default Pubg_clanCreate;
