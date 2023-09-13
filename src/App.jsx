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
import { Box } from '@chakra-ui/react';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Box p="2em">
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
        </Box>
      </BrowserRouter>
    </div>
  );
}
export default App;
