import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./routes/Home";
import About from "./routes/About";
import Contact from "./routes/Contact";
import Login from "./routes/Login";
import Register from "./routes/Register";
import Forgotpw from "./routes/Forgotpw";
import Dashboard from "./routes/Dashboard";
import Dashboard_S from "./routes/Dashboard_S";
import DashboardAdmin from "./routes/DashboardAdmin";
import Kyc from "./routes/kyc";

const App = () => {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/forgotpw" element={<Forgotpw />} />
        <Route path="/farmer" element={<Dashboard />} />
        <Route path="/seller" element={<Dashboard_S />} />
        <Route path="/kyc" element={<Kyc />} />
        <Route path="/admin" element={<DashboardAdmin />} />
      </Routes>
    </div>
  );
};
export default App;
