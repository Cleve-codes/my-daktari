// import React from 'react'
import Home from '../pages/Home'
import Services from '../pages/Services'
import Login from "../pages/Login"
import Signup from "../pages/Signup"
import Contact from "../pages/Contact"
import Doctors from "../pages/Doctors/Doctors"
import DoctorsDetail from "../pages/Doctors/DoctorsDetails"
import MyAccount from '../Dashboard/user-account/MyAccount'
import Dashboard from '../Dashboard/doctor-account/Dashboard'

import { Routes, Route } from 'react-router-dom'
import ProtectedRoute from './ProtectedRoute'

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/services" element={<Services />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/doctors" element={<Doctors />} />
      <Route path="/doctors/:id" element={<DoctorsDetail />} />
      <Route path="/users/profile/me" element={<ProtectedRoute allowedRoles={['patient']} > <MyAccount /></ProtectedRoute>} />
      <Route path="/doctors/profile/me" element={<ProtectedRoute allowedRoles={['doctor']} > <Dashboard /></ProtectedRoute>} />
    </Routes>
  )
}

export default Router