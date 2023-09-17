import Pubg_clanCreate from "./pages/Pubg_clanCreate";
import Pubg_clanEdit from "./pages/Pubg_clanEdit";
import Pubg_clanList from "./pages/Pubg_clanList";
import Pubg_clanView from "./pages/Pubg_clanView";
import Login2 from "./pages/Login2";
import Logout2 from "./pages/Logout2";
import AboutUs from "./pages/about_us";

import NotFoundPageComponent from "./components/NotFoundPageComponent";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./contexts/AuthContext";
import SecureRoute from "./SecureRoute";
import "bootstrap/dist/css/bootstrap.min.css";

import NavbarComponent from "./components/NavbarComponent";
import { ShopContextProvider } from "./contexts/shop-context";

import Calendar from "./components/calendar";
import Gallery from "./components/gallery";


import { Shop } from "./pages/shop/shop";
import { Cart } from "./pages/cart/cart";
import Home from "./components/Home";



function App() {
  return  (
    
    <>



<ShopContextProvider>

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
             <Route path="/pages/about_us" element={<AboutUs />} ></Route> 
            <Route path="/gallery" element={<Gallery />} ></Route>
            <Route path="/pages/shop/shop" element={<Shop />}></Route>
             <Route path="/pages/cart/cart" element={<Cart />}></Route>
            <Route path="/shop-context" element={<getDefaultCart />} ></Route>
            <Route path="/home" element={<Home />} ></Route>
          </Routes>
        </BrowserRouter>

  </ShopContextProvider>
    

    </>
  );
}

export default App;
