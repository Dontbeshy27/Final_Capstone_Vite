import { useEffect, useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import "./Pubg_clanView.css";
import Footer from "../components/footer";

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
    <div className="card text-white col-md-6 justify-content-center">
      <div className="card-body  m-2 cb1 text-center">
        <h2 className="card-title">PUBG CLAN VIEW</h2>
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
              <Link to={"/"} className="btn btn-primary">Back to List of clans</Link>
            </p>
            <p>
              <Link to={`/pubg_clans/edit/${id}`} className="btn btn-warning">Edit</Link>
            </p>
            <p>
              <button onClick={handleDelete} className="btn btn-danger">Delete the clan</button>
            </p>
          </>
        )}
      </div>
    </div>
    <Footer />
   </>
  );
};

export default Pubg_clanView;
