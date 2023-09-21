import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import { Button, Table } from "react-bootstrap";
import { Search } from "react-bootstrap-icons";
import "./Pubg_clanList.css";

const Pubg_clanList = () => {
  const [Pubg_clans, setPubg_clan] = useState([]);
  const [loading, setLoading] = useState(false);
  const { token, setToken, setIsAuthenticated } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    const url = `${import.meta.env.VITE_API_URL}/pubg_clans`;
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

  return (
    <>
    
      <h2 className="text-center text-white">PUBG CLANS</h2>
      {loading ? (
        <h3 className="text-center">Loading...</h3>
      ) : (
        <>
          <p className="text-center">
            <Link to="/Pubg_clans/create">Create New PUBG CLAN</Link>
          </p>

          <Table className="table"striped bordered hover>
            <thead>
              <tr>
                <th>User Name</th>
                <th>Password</th>
                <th>Email</th>
                <th>Clan Name</th>
                <th>InGame Name</th>
                <th>Role</th>
                <th>View</th>
              </tr>
            </thead>
            <tbody>
              {Pubg_clans.map((Pubg_clan) => (
                <tr key={Pubg_clan.id}>
                  <td>{Pubg_clan.user_name}</td>
                  <td>{Pubg_clan.password}</td>
                  <td>{Pubg_clan.email}</td>
                  <td>{Pubg_clan.clan_name}</td>
                  <td>{Pubg_clan.ingame_name}</td>
                  <td>{Pubg_clan.role}</td>
                  <td>
                    <Link to={`Pubg_clans/${Pubg_clan.id}`}>
                      <Button>
                        <Search />
                      </Button>
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
          
        </>
      )}
    </>
  );
};

export default Pubg_clanList;
