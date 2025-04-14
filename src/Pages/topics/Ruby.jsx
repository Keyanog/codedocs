import React from 'react';
import rubyImage from "../../assets/images/ruby.png";


function Ruby() {
  return (
    <div className="ruby-container">
      <div className="image-container">
  <img src={rubyImage} alt="Ruby Logo" className="topic-logo" />
</div>

      <h1>Ruby Programming Language</h1>

      {/* Overview Section */}
      <section>
        <h2>Overview</h2>
        <p>
          Ruby is an open-source, dynamically typed, object-oriented programming language.
          It was designed to be simple, productive, and flexible, emphasizing ease of use and productivity for developers.
        </p>
      </section>

      {/* History Section */}
      <section>
        <h2>History of Ruby</h2>
        <p><strong>Creator:</strong> Yukihiro Matsumoto (Matz)</p>
        <p><strong>First Released:</strong> December 1995</p>
        <p><strong>Name Origin:</strong> Ruby was named after a gemstone.</p>
        <p><strong>Current Version:</strong> Ruby 3.x</p>
      </section>

      {/* Features Section */}
      <section>
        <h2>Key Features of Ruby</h2>
        <ul>
          <li>Object-Oriented Language</li>
          <li>Dynamic Typing</li>
          <li>Garbage Collection</li>
          <li>Highly Readable Syntax</li>
          <li>Support for Multiple Paradigms</li>
          <li>Metaprogramming</li>
          <li>Rich Standard Library</li>
          <li>Cross-Platform</li>
        </ul>
      </section>

      {/* Ruby Data Structures Section */}
      <section>
        <h2>Ruby Data Structures</h2>
        <ul>
          <li><strong>Arrays:</strong> Ordered collections of objects, useful for storing multiple items.</li>
          <li><strong>Hashes (Dictionaries):</strong> Collections of key-value pairs, useful for representing data with attributes.</li>
          <li><strong>Ranges:</strong> Represent intervals and can be used for iteration and checking inclusion.</li>
          <li><strong>Sets:</strong> Unordered collections of unique elements, useful for removing duplicates.</li>
        </ul>
      </section>

      {/* Object-Oriented Programming Section */}
      <section>
        <h2>Object-Oriented Programming in Ruby</h2>
        <p>
          Ruby is a pure object-oriented programming language. Everything in Ruby is an object, including numbers and booleans.
          Ruby allows for class-based object-oriented programming and supports features like inheritance, modules, and encapsulation.
        </p>
        <p>
          Ruby has a powerful metaprogramming feature, allowing the definition of methods dynamically at runtime.
        </p>
      </section>

      {/* Popular Ruby Libraries & Frameworks Section */}
      <section>
        <h2>Popular Ruby Libraries & Frameworks</h2>
        <ul>
          <li><strong>Ruby on Rails:</strong> A powerful web framework that simplifies building web applications with Ruby.</li>
          <li><strong>Sinatra:</strong> A lightweight framework for building web applications, often used for small projects and APIs.</li>
          <li><strong>RSpec:</strong> A testing framework for Ruby that supports behavior-driven development (BDD).</li>
        </ul>
      </section>

      {/* YouTube Videos Section */}
      <section>
        <h2>Best Ruby YouTube Videos</h2>
        <ul>
          <li><a href="https://www.youtube.com/watch?v=t_ispmWmdjY" target="_blank" rel="noopener noreferrer">Ruby Programming Tutorial for Beginners</a></li>
          <li><a href="https://www.youtube.com/watch?v=Q7Z7dWV-0oY" target="_blank" rel="noopener noreferrer">Ruby on Rails - Full Course</a></li>
          <li><a href="https://www.youtube.com/watch?v=I6Hk-Ixyg5Y" target="_blank" rel="noopener noreferrer">Ruby Tutorial for Beginners</a></li>
        </ul>
      </section>
    </div>
  );
}

export default Ruby;
