import React from "react";
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Parse from "parse/dist/parse.min"
import Home from './pages/Home/Home'
import UsersList from './pages/UsersList/UsersList'
import Navigation from "./shared/Navigation/Navigation";
import UserProfile from "./pages/UserProfile/UserProfile";

import './App.scss'

const app_id = process.env.REACT_APP_PARSE_APP_ID;
const host_url = process.env.REACT_APP_PARSE_HOST_URL;
const javascript_key = process.env.REACT_APP_PARSE_JAVASCRIPT_KEY
const master_key = process.env.REACT_APP_PARSE_MASTER_KEY

Parse.initialize(app_id, javascript_key, master_key);
Parse.serverURL = host_url;


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
