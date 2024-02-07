import React from "react";
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Home from './pages/Home/Home'
import UsersList from './pages/UsersList/UsersList'
import Navigation from "./shared/Navigation/Navigation";
import UserProfile from "./pages/UserProfile/UserProfile";

import './App.scss'

function App() {
  return (
    <BrowserRouter>
      <div className="App">
          <Navigation/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="userslist" element={<UsersList />} />
          <Route path=":id" element={<UserProfile/>}/>
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App
