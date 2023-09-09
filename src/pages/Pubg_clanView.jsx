import { useEffect, useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";

const EmployeeView = () => {
  const { id } = useParams();
  const [employee, setEmployee] = useState({
    first_name: "",
    last_name: "",
    email: "",
    gender: "",
  });
  const [loading, setLoading] = useState(false);
  const { token } = useAuth();
  const url = `${import.meta.env.VITE_API_URL}/employees/${id}`;
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
        setEmployee(json);
        setLoading(false);
      })
      .catch((err) => console.log(err));

    return () => {
      controller.abort();
    };
  }, []);

  const handleDelete = (e) => {
    e.preventDefault();
    if (window.confirm("Are you sure you want to Delete this Employee?")) {
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
      <h2>Employee View</h2>
      {loading ? (
        <h3>Loading...</h3>
      ) : (
        <>
          <p>
            <label>
              First Name <strong>{employee.first_name}</strong>
            </label>
          </p>
          <p>
            <label>
              Last Name <strong>{employee.last_name}</strong>
            </label>
          </p>
          <p>
            <label>
              Age <strong>{employee.age}</strong>
            </label>
          </p>
          <p>
            <label>
              Email <strong>{employee.email}</strong>
            </label>
          </p>
          <p>
            <label>
              Gender <strong>{employee.gender}</strong>
            </label>
          </p>

          <p>
            <Link to={"/"}>Back to List</Link>
          </p>
          <p>
            <Link to={`/employees/edit/${id}`}>Edit</Link>
          </p>
          <p>
            <Link onClick={handleDelete}>Delete</Link>
          </p>
        </>
      )}
    </>
  );
};

export default EmployeeView;
