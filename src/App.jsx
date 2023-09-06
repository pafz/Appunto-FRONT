import React from "react";
import "./App.css";
import Login from "./components/Login/Login";
import Register from "./components/Register/Register";
import Doubts from "./components/Doubts/Doubts";
import Profile from "./components/Profile/Profile";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import Header from "./components/Header/Header";
import Profile from "./components/Profile/Profile";

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Header />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/" element={<Home />} />
                    <Route path="/register" element={<Register />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/profile" element={<Profile />} />
                    <Route path="/doubts" element={<Doubts />} />
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
