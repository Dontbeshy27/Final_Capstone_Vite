import EmployeeCreate from "./pages/Pubg_clanCreate";
import EmployeeList from "./pages/Pubg_clanList";
import EmployeeView from "./pages/Pubg_clanView";
import EmployeeEdit from "./pages/Pubg_clanEdit";
import Login from "./pages/Login";
import Logout from "./pages/Logout";


import NotFoundPageComponent from "./components/NotFoundPageComponent";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { AuthProvider } from "./contexts/AuthContext";
import SecureRoute from "./SecureRoute";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from "react-bootstrap";
import NavbarComponent from "./components/NavbarComponent";


function App() {
  return (
    <>

      <NavbarComponent />
      <Container>
        <BrowserRouter>
          <Routes>
            <Route element={<SecureRoute />}>
              <Route path="/" element={<EmployeeList />}></Route>
              <Route path="/pubg_clans/:id" element={<EmployeeView />}></Route>
              <Route path="*" element={<NotFoundPageComponent />}></Route>
              <Route
                path="/employees/create"
                element={<EmployeeCreate />}
              ></Route>
              <Route
                path="/pubg_clans/edit/:id"
                element={<EmployeeEdit />}
              ></Route>
              <Route path="/logout2" element={<Logout2 />}></Route>
            </Route>
            <Route path="/login2" element={<Login2 />}></Route>
          </Routes>
        </BrowserRouter>
      </Container>

    </>
  );
}

export default App;
