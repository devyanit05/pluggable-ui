import React from 'react';
import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import UploadData from '../components/UploadData';
import DisplayData from '../components/DisplayData';
import '../styles/manageData.css'

const DataLoad = () => {
  // // Check if user is authenticated
  // const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

  // // Redirect to login if not authenticated
  // if (!isAuthenticated) {
  //   return <Navigate to="/" />;
  // }

  return (
    <div className="data-load-container">
      <h2>Data Load Page</h2>
      <div className="data-components">
        <UploadData />
        <DisplayData />
      </div>
    </div>
  );
};

export default DataLoad;
