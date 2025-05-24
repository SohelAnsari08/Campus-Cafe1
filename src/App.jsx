import React, { useEffect, useState } from "react";
import { Route, Routes, useNavigate} from "react-router";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Menu from "./pages/Menu";
import { PrivateRoute } from "./components/PrivateRoute";
import Footer from "./components/Footer";
import Contact from "./pages/Contact";
import Cart from "./pages/Cart";
import Burger from "./MenuPages/Burger";
import Coffee from "./MenuPages/Coffee";
import Pizza from "./MenuPages/Pizza";
import Pasta from "./MenuPages/Pasta";
import Breakfast from "./MenuPages/Breakfast";
import Lunch from "./MenuPages/Lunch";
import Drink from "./MenuPages/Drink";
import Order from "./pages/Order";

function App() {

  const navigate = useNavigate();

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [currentPage, setCurrentpage] = useState('home');

  const [img, setImg] = useState(null);
  const [name, setName] = useState(null);
  const [rating, setRating] = useState(null);
  const [incredients, setIncredients] = useState(null);
  const [price, setprice] = useState(null)

  function orderData(img, name, rating, incredients, price){
    setImg(img);
    setName(name);
    setRating(rating);
    setIncredients(incredients);
    setprice(price);
  }

  function refresh(){
    navigate('/')
  }

  useEffect(() => {
    refresh();
  }, [])


  return (
    <div className="w-screen h-screen overflow-x-hidden  flex flex-col">
      <Navbar isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} currentPage={currentPage} setCurrentpage={setCurrentpage} />

      <Routes>

        <Route path="/" element={<Home isLoggedIn={isLoggedIn} setCurrentpage={setCurrentpage}/>} />
        <Route path="/login" element={<Login  setIsLoggedIn={setIsLoggedIn} setCurrentpage={setCurrentpage} />} />
        <Route path="/signup" element={<Signup  setIsLoggedIn={setIsLoggedIn}  setCurrentpage={setCurrentpage}/>} />
        <Route path='/menu' element={ <Menu/>}/>
        <Route path="/order" element={<Order img={img} name={name} rating={rating} incredients={incredients} price={price} />}/>


        {/* Menu pages Route */}
        <Route path="/burger" element={<Burger orderData={orderData} isLoggedIn={isLoggedIn} />}/>
        <Route path="/coffee" element={<Coffee orderData={orderData} isLoggedIn={isLoggedIn} />}/>
        <Route path="/pizza" element={<Pizza orderData={orderData} isLoggedIn={isLoggedIn} />}/>
        <Route path="/pasta" element={<Pasta orderData={orderData} isLoggedIn={isLoggedIn} />}/>
        <Route path="/breakfast" element={<Breakfast orderData={orderData} isLoggedIn={isLoggedIn} />} />
        <Route path="/lunch" element={<Lunch orderData={orderData} isLoggedIn={isLoggedIn} />} />
        <Route path="/drinks" element={<Drink orderData={orderData} isLoggedIn={isLoggedIn} />}/>



        <Route path='/contact' element={<Contact/>} />
        <Route path="/cart" element={
          <PrivateRoute isLoggedIn={isLoggedIn} >
              <Cart/>
          </PrivateRoute>
        
        } />

      </Routes>

      <Footer/>

    </div>
  )
}

export default App;
