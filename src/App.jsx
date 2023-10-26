import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
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
          <Route path="/login" element={<Login/>} />
            <Route path="/" element={<Login/>} />
            <Route
              path="/admin/agendar"
              element={
                <PrivateRoute>
                  <AdmAgendar />
                </PrivateRoute>
              }
            />
            <Route
              path="/admin/informes"
              element={
                <PrivateRoute>
                  <AdmInformes />
                </PrivateRoute>
              }
            />
            <Route
              path="/user/agendar"
              element={
                <PrivateRoute>
                  <Agendar />
                </PrivateRoute>
              }
            />
          </Routes>
        </AuthProvider>
      </Router>
    </div>
  );
}

export default App;
