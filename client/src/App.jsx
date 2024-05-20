import React, { useEffect } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom'; // Added Redirect
import { useSelector } from 'react-redux';
import LoginUser from './pages/LoginUser';
import ManageData from './pages/ManageData';
import RenderData from './pages/RenderData';
import './styles/app.css';

function App() {
  const isAuthenticated = useSelector(state => state.auth.isAuthenticated);

  useEffect(() => {
    // You can dispatch an action here to check authentication status or token expiry
  }, []);

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<LoginUser />} />
        <Route path="/manage-data"
          element = {isAuthenticated ? <ManageData /> : <Navigate to="/" />}
        />
        <Route path="/temp-data" element={<ManageData />} />
        <Route path="/render-data" element={<RenderData />} /> 
      </Routes>
    </div>
  );
}

export default App;
