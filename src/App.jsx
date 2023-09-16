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
import NavbarComponent from "./components/NavbarComponent";
import { ShopContextProvider } from "./contexts/shop-context";

import Calendar from "./components/calendar";
import Gallery from "./components/gallery";
import Footer from "./components/footer";


import { Shop } from "./pages/shop/shop";
import { Contact } from "./pages/contact";
import { Cart } from "./pages/cart/cart";



function App() {
  return  (
    
    <>

<ShopContextProvider>
      <Container>
        <BrowserRouter>
        <NavbarComponent />
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
            <Route path="/calendar" element={<Calendar />} ></Route>
            {/* <Route path="/about_us" element={<AboutUs />} ></Route> */}
            <Route path="/gallery" element={<Gallery />} ></Route>
            <Route path="/pages/shop/shop" element={<Shop />}></Route>
             <Route path="/pages/cart/cart" element={<Cart />}></Route>
            <Route path="/shop-context" element={<getDefaultCart />} ></Route>
          </Routes>
        </BrowserRouter>
      </Container>
  </ShopContextProvider>
<<<<<<< HEAD

=======
      <Footer />
>>>>>>> 3cfd25e7d6e1f3609b70b121317b80d30b981888

    </>
  );
}

export default App;
