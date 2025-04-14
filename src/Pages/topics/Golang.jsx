import React from "react";
import "./golang.css"; // Import the CSS file for styling
import golangImage from "../../assets/images/golang.png";


function Golang() {
  return (
    
    <div className="golang-container"> <div className="image-container">
    <img src={golangImage} alt="Golang Logo" className="topic-logo" />
  </div>
  
      <h1>📘 Go (Golang) – Complete Guide (No Example Code)</h1> 
      


      <section>
        <h2>🔹 What is Go?</h2>
        <p>
          Go, also known as Golang, is an open-source programming language developed by Google. It was designed to be simple, efficient, and fast, with a focus on concurrency, performance, and scalability.
        </p>
        <p>
          Go is often described as a combination of the simplicity of Python, performance of C, and concurrency model of Erlang.
        </p>
      </section>

      <section>
        <h2>🔹 History</h2>
        <ul>
          <li><strong>Created by:</strong> Robert Griesemer, Rob Pike, and Ken Thompson.</li>
          <li><strong>Developed at:</strong> Google</li>
          <li><strong>First Released:</strong> 2009</li>
          <li><strong>Motivation:</strong> Address complexity and long build times in large codebases.</li>
        </ul>
      </section>

      <section>
        <h2>🔹 Key Characteristics</h2>
        <ul>
          <li>Statically Typed</li>
          <li>Compiled Language</li>
          <li>Simplicity & Minimalism</li>
          <li>Garbage Collection</li>
          <li>Built-in Concurrency</li>
          <li>Cross-platform</li>
          <li>Standard Toolchain</li>
        </ul>
      </section>

      <section>
        <h2>🔹 Syntax Philosophy</h2>
        <p>
          Go’s syntax is concise, expressive, and structured for teamwork. It avoids complex features to maintain simplicity.
        </p>
      </section>

      <section>
        <h2>🔹 Type System</h2>
        <ul>
          <li>Primitive Types</li>
          <li>Composite Types</li>
          <li>Interfaces</li>
          <li>Type Inference</li>
          <li>Custom Types</li>
        </ul>
      </section>

      <section>
        <h2>🔹 Memory Management</h2>
        <ul>
          <li>Garbage Collection</li>
          <li>Pointers (without arithmetic)</li>
          <li>Efficient Allocation</li>
        </ul>
      </section>

      <section>
        <h2>🔹 Concurrency</h2>
        <ul>
          <li>Goroutines</li>
          <li>Channels</li>
          <li>Select Statement</li>
          <li>Concurrency vs Parallelism</li>
        </ul>
      </section>

      <section>
        <h2>🔹 Object-Oriented Features</h2>
        <ul>
          <li>Structs</li>
          <li>Methods</li>
          <li>Interfaces</li>
          <li>Composition over Inheritance</li>
        </ul>
      </section>

      <section>
        <h2>🔹 Error Handling</h2>
        <p>
          Go uses explicit error returns instead of exceptions. Errors must be checked and handled by developers.
        </p>
      </section>

      <section>
        <h2>🔹 Tooling and Development</h2>
        <ul>
          <li>go build</li>
          <li>go run</li>
          <li>go fmt</li>
          <li>go test</li>
          <li>go mod</li>
        </ul>
      </section>

      <section>
        <h2>🔹 Package System</h2>
        <p>Code is organized into packages and modules using `go.mod` for dependency management.</p>
      </section>

      <section>
        <h2>🔹 Standard Library</h2>
        <p>
          Includes features for I/O, networking, JSON/XML parsing, cryptography, system calls, and more.
        </p>
      </section>

      <section>
        <h2>🔹 Cross-Compilation</h2>
        <p>
          Go supports building binaries for different OS/architectures easily using built-in tooling.
        </p>
      </section>

      <section>
        <h2>🔹 Use Cases</h2>
        <ul>
          <li>Web Servers & APIs</li>
          <li>Cloud Services</li>
          <li>Command-Line Tools</li>
          <li>Microservices</li>
          <li>DevOps Tools</li>
        </ul>
      </section>

      <section>
        <h2>🔹 Benefits</h2>
        <ul>
          <li>Simple Syntax</li>
          <li>High Performance</li>
          <li>Efficient Concurrency</li>
          <li>Fast Compilation</li>
          <li>Strong Standard Library</li>
          <li>Cross-Platform</li>
        </ul>
      </section>

      <section>
        <h2>🔹 Limitations</h2>
        <ul>
          <li>No Generics (before Go 1.18)</li>
          <li>Verbose Error Handling</li>
          <li>Limited Metaprogramming</li>
          <li>No Inheritance</li>
          <li>Minimal Runtime Reflection</li>
        </ul>
      </section>

      <section>
        <h2>🔹 Community and Ecosystem</h2>
        <p>
          Supported by Google and used in popular projects like Docker, Kubernetes, Terraform, Hugo, and CockroachDB.
        </p>
      </section>

      <section>
        <h2>🔹 Versioning</h2>
        <ul>
          <li><strong>Official Site:</strong> <a href="https://golang.org" target="_blank" rel="noreferrer">golang.org</a></li>
          <li><strong>Latest Version:</strong> Actively maintained</li>
          <li><strong>Tools:</strong> gvm, go install</li>
        </ul>
      </section>

      <section>
        <h2>🔹 Summary</h2>
        <p>
          Go is a fast, simple, and efficient language ideal for modern backend systems. It simplifies concurrency, speeds up builds, and reduces dependencies through its powerful standard library and built-in tools.
        </p>
      </section>

      <section>
        <h2>📺 Recommended YouTube Videos</h2>
        <ul>
          <li>
            <a href="https://www.youtube.com/watch?v=yyUHQIec83I" target="_blank" rel="noreferrer">
              Learn Go Programming - Golang Tutorial for Beginners (freeCodeCamp)
            </a>
          </li>
          <li>
            <a href="https://www.youtube.com/watch?v=yyUHQIec83I" target="_blank" rel="noreferrer">
              Golang Full Course - Go from Zero to Hero (Programming with Mosh)
            </a>
          </li>
          <li>
            <a href="https://www.youtube.com/watch?v=SqrbIlUwR0U" target="_blank" rel="noreferrer">
              Go (Golang) Crash Course (Traversy Media)
            </a>
          </li>
        </ul>
      </section>
    </div>
  );
}

export default Golang;
