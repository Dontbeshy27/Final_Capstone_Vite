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
      <h2>Please edit you clan</h2>
      {loading ? (
        <h3>Loading</h3>
      ) : (
        <form onSubmit={handleSubmit}>
         <p>
          <label>Username</label>
          <input
            type="text"
            name="user_name"
            value={pubg_clan.user_name}
            onChange={handleChange}
          />
        </p>
        <p>
          <label>Password</label>
          <input
            type="text"
            name="password"
            value={pubg_clan.password}
            onChange={handleChange}
          />
        </p>
        <p>
          <label>Email</label>
          <input
            type="email"
            name="email"
            value={pubg_clan.email}
            onChange={handleChange}
          />
        </p>
        <p>
          <label>Clan Name</label>
          <input
            type="text"
            name="clann_ame"
            value={pubg_clan.clan_name}
            onChange={handleChange}
          />
        </p>
        <p>
          <label>Ingame Name</label>
          <input
            type="text"
            name="ingame_name"
            value={pubg_clan.ingame_name}
            onChange={handleChange}
          />
        </p>
        <p>
          <label>Role</label>
          <input
            type="text"
            name="role"
            value={pubg_clan.role}
            onChange={handleChange}
          />
        </p>

          <input type="submit" value="Update" />
        </form>
      )}
    </>
  );
};

export default Pubg_clanEdit;
