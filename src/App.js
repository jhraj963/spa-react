import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Protected from './components/protected';
import Dashboard from './pages/Dashboard';
import Login from './pages/Login';
import Register from './pages/Register';
import Addproduct from './pages/Addproduct';
import ProductAdd from './pages/Addproduct/ProductAdd';
import ProductDetails from './pages/ProductDetails';
import Allcustomers from './pages/Allcustomers';

function App() {
   const isSignedIn = localStorage.getItem("access_token") || false;
  return (
    <BrowserRouter>
      <Routes>
         <Route path="/login" element={<Login />} />
        <Route path="/Register" element={<Register />} />
        <Route path={"/"} element={
          <Protected isSignedIn={isSignedIn} >
            <Dashboard />
          </Protected>
        } />
        <Route path={"/addproduct"} element={
          <Protected isSignedIn={isSignedIn} >
            <Addproduct />
          </Protected>
        } />
          <Route path={"/addproduct/add"} element={
          <Protected isSignedIn={isSignedIn} >
            <ProductAdd />
          </Protected>
        } />
        <Route path={"/addproduct/edit/:id"} element={
          <Protected isSignedIn={isSignedIn} >
            <ProductAdd />
          </Protected>
        } />
        <Route path={"/product-detail/:productId"} element={
          <Protected isSignedIn={isSignedIn} >
            <ProductDetails />
          </Protected>
        } />
        <Route path={"/Allcustomers"} element={
          <Protected isSignedIn={isSignedIn} >
            <Allcustomers />
          </Protected>
        } />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
