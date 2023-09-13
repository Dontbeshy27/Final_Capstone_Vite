import Pubg_clanCreate from "./pages/Pubg_clanCreate";
import Pubg_clanEdit from "./pages/Pubg_clanEdit";
import Pubg_clanList from "./pages/Pubg_clanList";
import Pubg_clanView from "./pages/Pubg_clanView";
import Login2 from "./pages/Login2";
import Logout2 from "./pages/Logout2";


import NotFoundPageComponent from "./components/NotFoundPageComponent";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./contexts/AuthContext";
import SecureRoute from "./SecureRoute";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from "react-bootstrap";
import NavbarComponent from "./components/Navbarcomponent";

import Calendar from "./components/calendar";
import Fullcalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";


function App() {
  return (
    
    
    
    <>


      <NavbarComponent />
      <Container>
        <BrowserRouter>
          <Routes>
            <Route element={<SecureRoute />}>
              <Route path="/" element={<Pubg_clanList />}></Route>
              <Route path="/pubg_clans/:id" element={<Pubg_clanView />}></Route>
              <Route path="*" element={<NotFoundPageComponent />}></Route>
              <Route
                path="/Pubg_clans/create"
                element={<Pubg_clanCreate />}
              ></Route>
              <Route
                path="/pubg_clans/edit/:id"
                element={<Pubg_clanEdit />}
              ></Route>
              <Route path="/logout2" element={<Logout2 />}></Route>
            </Route>
            <Route path="/login2" element={<Login2 />}></Route>
          </Routes>
        </BrowserRouter>
      </Container>
      <div className="App">
              <Calendar />  
              </div>
    </>
  );
}

export default App;
