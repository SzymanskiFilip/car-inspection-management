import React from 'react';
import './index.css';
import LoginPage from './Pages/LoginPage';
import {Routes, Route} from 'react-router-dom';
import {useState} from "react";
import {AuthContext} from "./Context/AuthContext";
import BlockAuth from './Utils/BlockAuth';

function App() {

  const [authenticated, setAuthenticated] = useState(false);
  const [role, setRole] = useState("");

  return (
    <Routes>

      <Route path="/login" element={
        <AuthContext.Provider value={{authenticated,setAuthenticated}}>
          <BlockAuth>
            <LoginPage/>
          </BlockAuth>
        </AuthContext.Provider>
      }/>

    </Routes>
  );
}

export default App;
