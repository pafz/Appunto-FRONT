<<<<<<< HEAD
import React from 'react';
import './App.css';
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home/Home';
import Header from './components/Header/Header';
import Profile from './components/Profile/Profile';
import Doubts from './components/Doubts/Doubts';
import TeacherZone from './guards/TeacherZone';
import Teacher from './components/Teacher/Teacher';
import PrivateZone from './guards/PrivateZone';
import DoubtDetail from './components/DoubtDetail/DoubtDetail';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/profile"
            element={
              <PrivateZone>
                <Profile />
              </PrivateZone>
            }
          />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/doubts" element={<Doubts />} />
          <Route path="/doubts/:_id" element={<DoubtDetail />} />

          <Route
            path="/teacher"
            element={
              <TeacherZone>
                <Teacher />
              </TeacherZone>
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
=======
import React from "react";
import "./App.css";
import Login from "./components/Login/Login";
import Register from "./components/Register/Register";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import Header from "./components/Header/Header";
import Profile from "./components/Profile/Profile";
import Doubts from "./components/Doubts/Doubts";
import TeacherZone from "./guards/TeacherZone";
import Teacher from "./components/Teacher/Teacher";
import PrivateZone from "./guards/PrivateZone";
import DoubtDetail from "./components/DoubtDetail/DoubtDetail";

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Header />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route
                        path="/profile"
                        element={
                            <PrivateZone>
                                <Profile />
                            </PrivateZone>
                        }
                    />
                    <Route path="/register" element={<Register />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/doubts" element={<Doubts />} />
                    <Route path="/doubts/:_id" element={<DoubtDetail />} />

                    <Route
                        path="/teacher"
                        element={
                            <TeacherZone>
                                <Teacher />
                            </TeacherZone>
                        }
                    />
                </Routes>
            </BrowserRouter>
        </div>
    );
>>>>>>> 301d589da1806c2d00e0ae1c5480b4e38947e376
}
export default App;
