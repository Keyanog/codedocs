import React from "react";
import "./PythonStyles.css"; // Make sure to add this CSS file in your project
import pythonImage from "../../assets/images/python.png";


function Python() {
  return (
    <div className="page-container">
      <div className="image-container">
  <img src={pythonImage} alt="Python Logo" className="topic-logo" />
</div>

      <h1 className="title">Python Programming Language</h1>

      <section className="section">
        <h2 className="section-title">Introduction</h2>
        <p>
          Python is a high-level, interpreted programming language known for its
          easy-to-read syntax, versatility, and wide range of applications. It is
          used in various domains, such as web development, data science, machine
          learning, artificial intelligence, automation, and more.
        </p>
      </section>

      <section className="section">
        <h2 className="section-title">Key Characteristics</h2>
        <ul className="list">
          <li>
            <strong>Simple and Readable Syntax:</strong> Python's syntax is intuitive,
            making it ideal for beginners and experts alike.
          </li>
          <li>
            <strong>Interpreted Language:</strong> Python code is executed line by line
            by an interpreter, making it easier to debug.
          </li>
          <li>
            <strong>Dynamically Typed:</strong> Python automatically handles data types
            and memory management.
          </li>
          <li>
            <strong>Object-Oriented and Functional:</strong> Python supports both
            object-oriented and functional programming paradigms.
          </li>
          <li>
            <strong>Extensive Libraries and Frameworks:</strong> Python has a rich
            ecosystem of libraries and frameworks, which accelerates development across
            various domains.
          </li>
          <li>
            <strong>Cross-Platform Compatibility:</strong> Python code can run on
            Windows, Linux, macOS, and other platforms without modification.
          </li>
        </ul>
      </section>

      <section className="section">
        <h2 className="section-title">History of Python</h2>
        <p>
          <strong>Creator:</strong> Guido van Rossum
        </p>
        <p>
          <strong>First Release:</strong> February 20, 1991
        </p>
        <p>
          <strong>Philosophy:</strong> Python was designed to be easy to understand
          and write, prioritizing code readability and simplicity.
        </p>
        <p>
          <strong>Development:</strong> Initially developed as a hobby project, Python
          evolved over time with contributions from developers worldwide.
        </p>
        <p>
          <strong>Python Software Foundation (PSF):</strong> Oversees the development
          of Python, ensuring it remains open-source and community-driven.
        </p>
      </section>

      <section className="section">
        <h2 className="section-title">Features of Python</h2>
        <ol className="list">
          <li>
            <strong>Simple Syntax:</strong> Python's syntax is designed to be readable
            and simple, minimizing the cost of program maintenance. Python code almost
            reads like English, making it easier for new developers to learn.
            <div className="code-card">
              <pre className="code">
                print("Hello, World!")
              </pre>
            </div>
          </li>
          <li>
            <strong>Interpreted Language:</strong> Python is interpreted, meaning code
            is executed line by line rather than compiled. This helps in immediate
            debugging and testing.
          </li>
          <li>
            <strong>Dynamically Typed:</strong> Python does not require variable type
            declarations. The type of variable is determined during runtime, which
            makes coding faster.
            <div className="code-card">
              <pre className="code">
                {`x = 5        # Integer\nx = "Hello"  # String`}
              </pre>
            </div>
          </li>
          <li>
            <strong>Object-Oriented:</strong> Python is an object-oriented language,
            which means you can define classes and create objects to encapsulate data
            and methods.
            <div className="code-card">
              <pre className="code">
                {`class Person:\n  def __init__(self, name):\n    self.name = name\n  def greet(self):\n    print(f"Hello, {self.name}!")\n\np = Person("Alice")\np.greet()`}
              </pre>
            </div>
          </li>
          <li>
            <strong>Extensive Libraries:</strong> Python has a rich collection of
            built-in libraries (standard library) and third-party packages, which
            extend its capabilities. Some notable libraries include:
            <ul className="sub-list">
              <li>NumPy (for numerical computations)</li>
              <li>Pandas (for data manipulation)</li>
              <li>Django (for web development)</li>
              <li>TensorFlow (for machine learning)</li>
              <li>Requests (for HTTP requests)</li>
            </ul>
          </li>
          <li>
            <strong>Cross-Platform:</strong> Python is available on many platforms,
            including Windows, Linux, and macOS. Python programs can run on any machine
            with the Python interpreter installed.
          </li>
        </ol>
      </section>

      <section className="section">
        <h2 className="section-title">Python Applications</h2>
        <ul className="list">
          <li>
            <strong>Web Development:</strong> Python provides several frameworks for
            building web applications. The most popular ones include Django and Flask.
          </li>
          <li>
            <strong>Data Science and Machine Learning:</strong> Python has become the
            go-to language for data science and machine learning. Libraries like Pandas,
            NumPy, and TensorFlow help with data manipulation and model building.
          </li>
          <li>
            <strong>Automation:</strong> Python is excellent for automating repetitive
            tasks, such as web scraping and file handling.
          </li>
          <li>
            <strong>Game Development:</strong> While not as popular as C++, Python is
            used in game development using libraries like Pygame.
          </li>
          <li>
            <strong>System Administration and Networking:</strong> Python is used to
            automate tasks like server management and networking.
          </li>
        </ul>
      </section>

      <section className="section">
        <h2 className="section-title">Best Python YouTube Videos</h2>
        <ul className="list">
          <li>
            <a
              href="https://www.youtube.com/watch?v=rfscVS0vtbw"
              className="link"
            >
              Python for Beginners - Full Course [2023 Edition] - FreeCodeCamp
            </a>
          </li>
          <li>
            <a
              href="https://www.youtube.com/watch?v=JJmcL1N2KQs"
              className="link"
            >
              Python Crash Course - Tech with Tim
            </a>
          </li>
          <li>
            <a
              href="https://www.youtube.com/watch?v=ghCwNzVuNZI"
              className="link"
            >
              Python Programming Tutorial for Beginners - Programming with Mosh
            </a>
          </li>
        </ul>
      </section>
    </div>
  );
}

export default Python;
