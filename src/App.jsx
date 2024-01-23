import './App.scss'
import {BrowserRouter, Link, Route, Routes} from 'react-router-dom'
import Home from './pages/Home/Home'
import UsersList from './pages/UsersList/UsersList'
import React from "react";
import Navigation from "./shared/Navigation/Navigation";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
          <Navigation/>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="userslist" element={<UsersList />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App
