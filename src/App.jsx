import React from "react";
import {BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./Compos/Context/authContext";
import Agendar from "./Compos/paginas/PagAgendar";
import AdmAgendar from "./Compos/paginas/AdmAgendar";
import Login from "./Compos/paginas/login";
import PrivateRoute from "./Compos/utils/privateRoute";
import AdmInformes from "./Compos/paginas/AdmInformes";

function App() {
  return (
    <div className="App">
      <Router>
        <AuthProvider>
          <Routes>
            //routes para todos
            <Route path="/login" element={<Login/>} />
            <Route path="/" element={<Login/>} />
            /////ADMIN ROUTES
            <Route path="/admin/agendar" element={
              <PrivateRoute isAllowed={!!user && user.is_staff.includes("1")}>
                <AdmAgendar/>
              </PrivateRoute>} />
            <Route path="/admin/informes" element={
              <PrivateRoute isAllowed={!!user && user.is_staff.includes("1")}>
                <AdmInformes/>
              </PrivateRoute>} />  
            //ROUTES PARA USUARIO          
            <Route path="/user/agendar" element={
            <PrivateRoute isAllowed={!!user && user.is_staff.includes("0")}>
               <Agendar/>
            </PrivateRoute>
             
            } />
          </Routes>
        </AuthProvider>
      </Router>
    </div>
  );
}

export default App;
