import React from 'react';
import cppImage from "../../assets/images/cpp.png";


const CppOverview = () => {
  return (
    
    <div className="cpp-overview"><div className="image-container">
    <img src={cppImage} alt="C++ Logo" className="topic-logo" />
  </div>
   
      <h1>💻 C++ – Complete Overview</h1> 

      <h2>🔹 What is C++?</h2>
      <p>
        C++ is a high-performance, general-purpose programming language developed by Bjarne Stroustrup in the early 1980s. It is an extension of the C programming language with added features such as classes, inheritance, polymorphism, and encapsulation, making it one of the most powerful languages for system and application software, game development, and more.
      </p>

      <h2>🔹 History of C++</h2>
      <p>
        Invented by: Bjarne Stroustrup<br />
        First Released: 1985<br />
        Based on: The C programming language<br />
        Key Development: Introduced Object-Oriented Programming (OOP) features like classes and objects<br />
        ISO Standardized: C++ is standardized by ISO (International Organization for Standardization) since 1990, with major updates released in C++98, C++03, C++11, C++14, C++17, and C++20.
      </p>

      <h2>🔹 Key Features of C++</h2>
      <ul>
        <li>Object-Oriented Programming (OOP)</li>
        <li>Low-Level Manipulation</li>
        <li>Template Programming</li>
        <li>Multi-Paradigm</li>
        <li>Static Typing</li>
        <li>Memory Management</li>
        <li>Standard Template Library (STL)</li>
        <li>Performance</li>
        <li>Cross-Platform</li>
      </ul>

      <h2>🔹 C++ Language Paradigms</h2>
      <p>C++ is considered a multi-paradigm language because it supports different programming styles:</p>
      <ul>
        <li>Procedural Programming</li>
        <li>Object-Oriented Programming (OOP)</li>
        <li>Generic Programming</li>
        <li>Functional Programming</li>
      </ul>

      <h2>🔹 C++ Syntax and Structure (Conceptual)</h2>
      <p>
        Program Structure: C++ programs are typically divided into header files (which declare functions, variables, and classes) and source files (which define their implementations).<br />
        Control Flow: Includes the use of conditional statements (if, switch), loops (for, while, do-while), and exceptions.<br />
        Functions: Organized blocks of code to perform a specific task. Functions can return values or be void (no return value).<br />
        Classes and Objects: Fundamental for OOP. A class is a blueprint for creating objects (instances).<br />
        Memory Management: Uses new and delete for dynamic memory allocation and deallocation. It also has manual control over pointers for direct memory access.
      </p>

      <h2>🔹 Key C++ Concepts</h2>
      <ul>
        <li>Classes and Objects</li>
        <li>Encapsulation</li>
        <li>Inheritance</li>
        <li>Polymorphism</li>
        <li>Abstraction</li>
        <li>Templates</li>
        <li>Exception Handling</li>
        <li>Operator Overloading</li>
      </ul>

      <h2>🔹 C++ Standard Library (STL)</h2>
      <p>
        The Standard Template Library (STL) is a collection of classes and functions that implement many common data structures and algorithms. It includes containers, algorithms, iterators, function objects, and utilities.
      </p>

      <h2>🔹 C++ Memory Management</h2>
      <p>
        C++ provides powerful tools for memory management:
        <ul>
          <li>Automatic Memory Management</li>
          <li>Dynamic Memory Management</li>
          <li>Pointers</li>
          <li>Smart Pointers</li>
        </ul>
      </p>

      <h2>🔹 Performance in C++</h2>
      <p>
        C++ is known for its speed and high performance. It is often used in applications that require resource-intensive processing, such as gaming, operating systems, real-time systems, and simulations.
      </p>

      <h2>🔹 Advantages of C++</h2>
      <ul>
        <li>High Performance</li>
        <li>Object-Oriented</li>
        <li>Rich Libraries and Frameworks</li>
        <li>Cross-Platform</li>
        <li>Flexibility and Control</li>
      </ul>

      <h2>🔹 Disadvantages of C++</h2>
      <ul>
        <li>Complex Syntax</li>
        <li>Manual Memory Management</li>
        <li>Less Safety</li>
        <li>Longer Development Time</li>
      </ul>

      <h2>🔹 C++ Use Cases</h2>
      <ul>
        <li>System Programming</li>
        <li>Game Development</li>
        <li>Software Applications</li>
        <li>Embedded Systems</li>
        <li>Real-Time Systems</li>
        <li>Finance and Trading</li>
      </ul>

      <h2>🔹 Development Tools and IDEs</h2>
      <ul>
        <li>IDE: Visual Studio, CLion, Code::Blocks, Eclipse CDT, and Xcode</li>
        <li>Compilers: GCC, Clang, MSVC</li>
        <li>Debuggers: GDB, LLDB, WinDbg</li>
      </ul>

      <h2>🔹 C++ Ecosystem</h2>
      <ul>
        <li>Libraries: Boost, Qt, OpenGL, SFML</li>
        <li>Frameworks: Qt, Unreal Engine</li>
        <li>Package Managers: vcpkg, Conan</li>
      </ul>

      <h2>🔹 Summary</h2>
      <p>
        C++ is a powerful, versatile, and performance-driven language. It is ideal for low-level system programming, application development, and scenarios where speed is a critical factor. While it has a steeper learning curve due to its complexity, C++ remains one of the most widely used languages in software development, especially for high-performance applications like gaming, real-time systems, and embedded systems.
      </p>

      <h2>🔹 Latest Videos on C++</h2>
      <ul>
        <li>
          <a href="https://www.youtube.com/watch?v=ZzaPdXTrSb8" target="_blank">C++ Tutorial for Beginners - Learn C++ in 1 Hour</a>
        </li>
        <li>
          <a href="https://www.youtube.com/watch?v=-TkoO8Z07hI" target="_blank">C++ Full Course for free ⚡️</a>
        </li>
        <li>
          <a href="https://www.youtube.com/watch?v=vLnPwxZdW4Y" target="_blank">C++ Tutorial for Beginners - Full Course</a>
        </li>
      </ul>
    </div>
  );
};

export default CppOverview;
