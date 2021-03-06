import React, { createContext, useContext } from 'react';
import './index.css';
import LoginPage from './Pages/LoginPage';
import {Routes, Route} from 'react-router-dom';
import {useState, useEffect} from "react";
import {AuthContext} from "./Context/AuthContext";
import BlockAuth from './Utils/BlockAuth';
import { AuthContextInterface } from './Interfaces/AuthContextInterface';
import HomePage from './Pages/HomePage';
import InspectionsPage from './Pages/InspectionsPage';
import RequireAuth from './Utils/RequireAuth';
import DashboardPage from './Pages/DashboardPage';
import checkAuthentication from './Utils/checkAuthentication';
import Cookie from 'js-cookie';

function App(): JSX.Element {

  const [authenticated, setAuthenticated] = useState<Boolean>(false);
  const [role, setRole] = useState<string>("not-assigned");
  const [username, setUsername] = useState<string>("not-assigned");

  const state = {
    authenticated,
    setAuthenticated,
    role,
    setRole,
    username,
    setUsername
  };

  useEffect(() => {
    const status = async () => {
      await checkAuthentication(setAuthenticated, setRole, setUsername);
    }
    status();

  }, []);



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
        <AuthContext.Provider value={state}>
          <RequireAuth roleToPermit="client">
            <InspectionsPage/>
          </RequireAuth>
        </AuthContext.Provider>
      }/>

      <Route path="/dashboard" element={
        <AuthContext.Provider value={state}>
          <RequireAuth roleToPermit="workshop">
            <DashboardPage />
          </RequireAuth>
        </AuthContext.Provider>
      }/>

    </Routes>
  );
}

export default App;
