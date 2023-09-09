import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";

const EmployeeEdit = () => {
  const { id } = useParams();
  const [employee, setEmployee] = useState({
    first_name: "",
    last_name: "",
    age: 0,
    email: "",
    gender: "",
  });
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { token } = useAuth();

  useEffect(() => {
    const url = `${import.meta.env.VITE_API_URL}/employees/${id}`;
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

  const handleSubmit = (e) => {
    e.preventDefault();

    const url = `${import.meta.env.VITE_API_URL}/employees/${id}`;

    const requestOptions = {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },

      body: JSON.stringify({
        first_name: employee.first_name,
        last_name: employee.last_name,
        age: employee.age,
        email: employee.email,
        gender: employee.gender,
      }),
    };

    fetch(url, requestOptions)
      .then((response) => response.json())
      .then((json) => {
        console.log(json);
        navigate(`/employees/${json.employee.id}`);
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
      <h2>Employee Edit</h2>
      {loading ? (
        <h3>Loading</h3>
      ) : (
        <form onSubmit={handleSubmit}>
          <p>
            <label>First Name</label>
            <input
              type="text"
              name="first_name"
              value={employee.first_name}
              onChange={handleChange}
            />
          </p>
          <p>
            <label>Last Name</label>
            <input
              type="text"
              name="last_name"
              value={employee.last_name}
              onChange={handleChange}
            />
          </p>
          <p>
            <label>Age</label>
            <input
              type="number"
              name="age"
              value={employee.age}
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
            <label>Gender</label>
            <select
              name="gender"
              value={employee.gender}
              onChange={handleChange}
            >
              <option value="">Select Gender</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
            </select>
          </p>

          <input type="submit" value="Update" />
        </form>
      )}
    </>
  );
};

export default EmployeeEdit;
