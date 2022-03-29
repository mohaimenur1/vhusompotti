/** @format */

import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Error from "./pages/Error/Error";
import LandingPage from "./pages/LandingPage";
import LogIn from "./pages/SignIn/LogIn";
import SignUp from "./pages/Register/SignUp";
import Dashboard from "./pages/Dashboard/Dashboard";
import PostSelling from "./pages/Post/PostSelling";
import Fileupload from "./pages/Fileupload/Fileupload";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<LogIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/post" element={<PostSelling />} />
        <Route path="/fileupload" element={<Fileupload />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
