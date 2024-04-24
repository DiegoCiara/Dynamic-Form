import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages';
import RegistrationsPage from './pages/registrations';
import ModelsPage from './pages/models';
import NavBar from './ui/components/NavBar/NavBar';

const AppRoute = () => {

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/registrations" element={<RegistrationsPage />} />
          <Route path="/models" element={<ModelsPage />} />
        </Routes>
      </Router>
    </>
  )
}

export default AppRoute;