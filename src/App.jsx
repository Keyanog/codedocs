import React, { useState, useEffect } from 'react';
import Navbar from './Components/Navbar';
import Sidebar from './Components/Sidebar';
import Home from './Pages/Home';
import Docs from './Pages/Docs';
import JavaScript from './Pages/topics/JavaScript';
import Python from './Pages/topics/Python';
import { Routes, Route } from 'react-router-dom';
import Ruby from "./Pages/topics/Ruby";
import Html from "./Pages/topics/Html";
import CSS from "./Pages/topics/CSS"; 
import CSharp from "./Pages/topics/CSharp";
import Cplusplus from "./Pages/topics/cplusplus";
import TypeScript from "./Pages/topics/TypeScript";
import Golang from './Pages/topics/Golang'


<Route path="/topics/ruby" element={<Ruby />} />

function App() {
  const [darkMode, setDarkMode] = useState(false);

  // Change theme on toggle
  

  return (
    <div className="app-container">
      <Navbar toggleDarkMode={() => setDarkMode(!darkMode)} />
      <div className="main-content">
        <Sidebar />
        <div className="page-container">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/docs" element={<Docs />} />
            <Route path="/docs/javascript" element={<JavaScript />} />
            <Route path="/docs/python" element={<Python />} />
            <Route path="/docs/ruby" element={<Ruby />} />
            <Route path="/docs/html" element={<Html />} />
            <Route path="/docs/css" element={<CSS />} />
            <Route path="/docs/csharp" element={<CSharp />} />
            <Route path="/docs/cplusplus" element={<Cplusplus />} />
            <Route path="/docs/typescript" element={<TypeScript />} />
            <Route path="/docs/golang" element={<Golang />} />


            {/* Add more routes as needed */}
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
