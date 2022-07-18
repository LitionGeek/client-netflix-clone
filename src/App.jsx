import Home from "./pages/home/Home.jsx";
import "./app.scss";
import { Login } from "./pages/login/Login.jsx";
import { Route, BrowserRouter, Routes, Navigate } from "react-router-dom";
import { Register } from "./pages/register/Register.jsx";
import { Watch } from "./pages/watch/Watch";
import Payment from "./pages/payment/Payment.jsx";

const App = () => {
  const user = false;
  return (
    <BrowserRouter>
      <Routes>
        <Route
          exact
          path="/"
          element={user ? <Home /> : <Navigate to="register" />}
        />
        <Route path="/login" element={user ? <Login /> : <Navigate to="/" />} />
        <Route
          path="/register"
          element={!user ? <Register /> : <Navigate to="/" />}
        />
        {user && (
          <>
            <Route path="/series" element={<Home type="series" />} />
            <Route path="/movies" element={<Home type="movie" />} />
            <Route path="/watch" element={<Watch />} />
          </>
        )} 
         <Route path="/payment" element={<Payment/>}/> 
      </Routes>
    </BrowserRouter>
  );
};

export default App;
