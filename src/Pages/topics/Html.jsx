import React from "react";
import htmlImage from "../../assets/images/html.png";


function HTMLInfo() {
  return (
    <div className="html-container">
      <div className="image-container">
  <img src={htmlImage} alt="HTML Logo" className="topic-logo" />
</div>

      <h1>HTML (HyperText Markup Language)</h1>

      <section>
        <h2>Overview</h2>
        <p>
          HTML is the standard language used to create and design websites. It is a markup language that structures content on the web. HTML outlines the structure of a web page using a system of elements and tags, which can represent text, links, images, tables, and multimedia elements.
        </p>
      </section>

      <section>
        <h2>History of HTML</h2>
        <p><strong>Creator:</strong> HTML was created by Tim Berners-Lee in 1991.</p>
        <p><strong>Evolution:</strong> The first version of HTML was simple and lacked many features. Over time, it has evolved, with several versions and updates (HTML4, XHTML, HTML5).</p>
        <p><strong>HTML5:</strong> The latest major version, HTML5, was finalized in 2014 and introduced new capabilities for multimedia, form controls, and APIs.</p>
      </section>

      <section>
        <h2>HTML Structure</h2>
        <p>HTML elements are the building blocks of web content. Each element is made up of a start tag, content, and an end tag.</p>
        <p><strong>Attributes:</strong> HTML tags can have attributes that provide additional information about the elements.</p>
        <p><strong>Nesting:</strong> HTML elements can be nested inside each other to create a hierarchy of content.</p>
      </section>

      <section>
        <h2>Key Features of HTML</h2>
        <ul>
          <li>Semantics with elements like header, footer, article, section</li>
          <li>Multimedia support for audio and video</li>
          <li>Form controls for user input</li>
          <li>Hyperlinks and navigation</li>
          <li>Responsive design when used with CSS and JavaScript</li>
        </ul>
      </section>

      <section>
        <h2>HTML Document Structure</h2>
        <p><strong>Doctype Declaration:</strong> Specifies the HTML version.</p>
        <p><strong>Head Section:</strong> Metadata like title, links, and scripts.</p>
        <p><strong>Body Section:</strong> Content visible to users.</p>
      </section>

      <section>
        <h2>Common HTML Elements</h2>
        <ul>
          <li><strong>Text:</strong> Headings, paragraphs, emphasis</li>
          <li><strong>Links:</strong> Anchor tags</li>
          <li><strong>Images:</strong> Image elements with source and alt text</li>
          <li><strong>Forms:</strong> Input fields, buttons, textareas</li>
          <li><strong>Tables:</strong> Table, row, header, and data cells</li>
          <li><strong>Media:</strong> Audio and video elements</li>
        </ul>
      </section>

      <section>
        <h2>HTML5 Features</h2>
        <ul>
          <li>Canvas for graphics</li>
          <li>Local storage for saving data</li>
          <li>Geolocation API for location access</li>
          <li>Web Workers for background scripts</li>
        </ul>
      </section>

      <section>
        <h2>Accessibility</h2>
        <ul>
          <li>Alt text for images</li>
          <li>ARIA attributes for dynamic content</li>
        </ul>
      </section>

      <section>
        <h2>HTML vs. XHTML</h2>
        <p>XHTML is stricter with syntax than HTML, requiring proper tag closure and lowercase usage.</p>
      </section>

      <section>
        <h2>SEO and HTML</h2>
        <ul>
          <li>Semantic tags help search engines understand structure</li>
          <li>Meta tags allow better indexing and keyword targeting</li>
        </ul>
      </section>

      <section>
        <h2>HTML Compatibility</h2>
        <p>HTML is supported by all modern browsers. Fallbacks may be needed for older browsers lacking HTML5 support.</p>
      </section>

      {/* YouTube Links Section */}
      <section>
        <h2>Best HTML Video Tutorials</h2>
        <ul>
          <li>
            <a href="https://www.youtube.com/watch?v=qz0aGYrrlhU&t=129s" target="_blank" rel="noopener noreferrer">
            HTML Tutorial for Beginners: HTML Crash Course
            </a>
          </li>
          <li>
            <a href="https://www.youtube.com/watch?v=UB1O30fR-EE" target="_blank" rel="noopener noreferrer">
              Learn HTML in 12 Minutes
            </a>
          </li>
          <li>
            <a href="https://www.youtube.com/watch?v=G3e-cpL7ofc" target="_blank" rel="noopener noreferrer">
            HTML & CSS Full Course - Beginner to Pro
            </a>
          </li>
        </ul>
      </section>
    </div>
  );
}

export default HTMLInfo;
