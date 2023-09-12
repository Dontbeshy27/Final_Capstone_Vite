import { useEffect, useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";

const Pubg_clanView = () => {
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
  const { token } = useAuth();
  const url = `${import.meta.env.VITE_API_URL}/pubg_clans/${id}`;
  const navigate = useNavigate();

  useEffect(() => {
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

  const handleDelete = (e) => {
    e.preventDefault();
    if (window.confirm("Are you sure you want to Delete this Pubg clan?")) {
      const requestOptions = {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      };

      fetch(url, requestOptions)
        .then(() => {
          navigate("/");
        })
        .catch((error) => console.log(error));
    }
  };

  return (
    <>
      <h2>Pubg clan View</h2>
      {loading ? (
        <h3>Loading...</h3>
      ) : (
        <>
          <p>
            <label>
            UserName <strong>{pubg_clan.user_name}</strong>
            </label>
          </p>
          <p>
          <label>
            Password <strong>{pubg_clan.password}</strong>
            </label>
          </p>
          <p>
            <label>
             Email <strong>{pubg_clan.email}</strong>
            </label>
          </p>
          <p>
            <label>
            Clan Name <strong>{pubg_clan.clan_name}</strong>
            </label>
          </p>
          <p>
            <label>
            Ingame Name <strong>{pubg_clan.ingame_name}</strong>
            </label>
          </p>
          <p>
            <label>
              Role <strong>{pubg_clan.role}</strong>
            </label>
          </p>

          <p>
            <Link to={"/"}>Back to List of clans</Link>
          </p>
          <p>
            <Link to={`/pubg_clans/edit/${id}`}>Edit</Link>
          </p>
          <p>
            <Link onClick={handleDelete}>Delete the clan</Link>
          </p>
        </>
      )}
    </>
  );
};

export default Pubg_clanView;
