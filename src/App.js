import logo from "./logo.svg";
import "./App.css";
import React, { useState } from "react";
import axios from "axios";
import { Routes, Route, Link, BrowserRouter } from "react-router-dom";
import ProductList from "./components/ProductList"
import ProductForm from "./components/ProductForm"
import Main from "./views/main";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <BrowserRouter>
        <Routes>
          <Route element= {<Main/>} path="/home" default></Route>
        </Routes>
        </BrowserRouter>
      </header>
    </div>
  );
}

export default App;
