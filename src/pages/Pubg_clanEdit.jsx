import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";

const Pubg_clanEdit = () => {
  const { id } = useParams();
  const [pubg_clan, setPubg_clan] = useState ({
    user_name: "",
    password: "",
    email: "",
    clan_name: "",
    ingame_name: "",
    role: "",
  });
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { token } = useAuth();

  useEffect(() => {
    const url = `${import.meta.env.VITE_API_URL}/pubg_clans/${id}`;
    const controller = new AbortController();

    const requestOptions = {
      signal: controller.signal,
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    };
    setLoading(true);
    fetch(url, requestOptions)
      .then((response) => response.json())
      .then((json) => {
        setPubg_clan(json);
        setLoading(false);
      })
      .catch((err) => console.log(err));

    return () => {
      controller.abort();
    };
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    const url = `${import.meta.env.VITE_API_URL}/pubg_clans/${id}`;

    const requestOptions = {
      method: "PATCH",
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
        navigate(`/pubg_clans/${json.employee.id}`);
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
      <h2>Please edit your clan</h2>
      {loading ? (
        <h3>Loading</h3>
      ) : (
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

         
        </form>
      )}
      <video id="background-video" src={videoBg} autoPlay loop muted />
    </>
  );
};

export default Pubg_clanEdit;
