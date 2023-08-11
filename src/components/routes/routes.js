import React, {useContext} from "react";
import { Route, BrowserRouter, Routes, Navigate } from "react-router-dom";
import Login from "../login/login";
import MainScreen from "../main/mainScreen";
import {AuthProvider, AuthContext} from "../contexts/auth"

const AppRoutes = () => {
  const Private = ({children}) => {
    const { authenticated } = useContext(AuthContext);

    if (!authenticated) {
      return <Navigate to="/login"/>
    }
    return children;
  };
  return (
    <BrowserRouter>
      <AuthProvider>
        <Routes>
        <Route exact path="/" element={<Navigate to="/login" />} />
          <Route path="/login" element={<Login />} />
          <Route path="/main" element={<Private><MainScreen /></Private>} />
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default AppRoutes;

