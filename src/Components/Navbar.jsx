import React from 'react';

function Navbar({ toggleDarkMode }) {
  return (
    <nav className="navbar">
      <h1>CodeDocs</h1>
      <button onClick={toggleDarkMode} style={{ background: 'none', border: 'none', color: '#fff', cursor: 'pointer' }}>
       
      </button>
    </nav>
  );
}

export default Navbar;
