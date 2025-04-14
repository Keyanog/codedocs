import React, { useState } from 'react';

function Home() {
  // State to manage whether the extra information is shown or not
  const [showInfo, setShowInfo] = useState(false);

  // Function to toggle the visibility of the extra info
  const toggleInfo = () => {
    setShowInfo(prevState => !prevState);
  };

  return (
    <div className="page">
      <h1>Welcome to CodeDocs</h1>
      <p>Your simple programming documentation site. Where you can know information about languages.</p>

      <h2
        onClick={toggleInfo}
        style={{ color: 'blue', cursor: 'pointer' }}
      >
        Click here to learn more about CodeDocs
      </h2>

      {/* Conditional rendering: If showInfo is true, display the extra content */}
      {showInfo && (
        <div className="extra-info">
          <h3>What is CodeDocs?</h3>
          <p>
            CodeDocs is a platform where programmers can quickly learn about various programming languages.
            It offers simple, clear, and organized documentation for developers at any level.
          </p>
          <p>
            Whether you're a beginner looking to start with the basics or an advanced developer seeking deep insights,
            CodeDocs has it all. We cover programming languages like JavaScript, Python, C++, Go, and many others.
          </p>

          {/* New additional information */}
          <h3>Features of CodeDocs:</h3>
          <ul>
            <li><strong>Comprehensive Documentation:</strong> Detailed guides and tutorials on popular programming languages.</li>
            <li><strong>Simple and Clean Design:</strong> An easy-to-navigate user interface to quickly find the info you need.</li>
            <li><strong>Search Functionality:</strong> A powerful search feature to help you locate language references and tutorials in seconds.</li>
            <li><strong>Code Examples:</strong> Real-world code examples and snippets to help you understand concepts better.</li>
            <li><strong>Community Contributions:</strong> An open platform where developers can contribute their knowledge and expand the documentation.</li>
          </ul>

          <h3>Our Mission:</h3>
          <p>
            At CodeDocs, our mission is to make learning programming languages accessible and easy for everyone. 
            We believe in providing high-quality content that is both informative and practical, enabling developers to 
            sharpen their skills and become better at coding. Whether you're learning for fun, a project, or for a career,
            CodeDocs is here to help.
          </p>

          <h3>Join Us:</h3>
          <p>
            We welcome developers from all over the world to contribute, learn, and share knowledge. You can become a 
            part of our community and help us make CodeDocs even better. If you're interested, visit our contribution 
            page to learn how you can start.
          </p>
        </div>
      )}
    </div>
  );
}

export default Home;
