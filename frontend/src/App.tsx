import React, { createContext, useContext } from 'react';
import './index.css';
import LoginPage from './Pages/LoginPage';
import {Routes, Route} from 'react-router-dom';
import {useState} from "react";
import {AuthContext} from "./Context/AuthContext";
import BlockAuth from './Utils/BlockAuth';
import { AuthContextInterface } from './Interfaces/AuthContextInterface';
import HomePage from './Pages/HomePage';
import InspectionsPage from './Pages/InspectionsPage';

function App(): JSX.Element {

  const [authenticated, setAuthenticated] = useState<Boolean>(false);
  const [role, setRole] = useState<string>("not-assigned");

  const state = {
    authenticated,
    setAuthenticated,
    role,
    setRole
  };

  return (
    <Routes>

      <Route path="/" element={
        <HomePage/>
      }/>


      <Route path="/login" element={
        <AuthContext.Provider value = {state}>
          <BlockAuth>
            <LoginPage/>
          </BlockAuth>
        </AuthContext.Provider>
      }/>

      <Route path="/inspections" element={
        <InspectionsPage/>
      }/>

    </Routes>
  );
}

export default App;
