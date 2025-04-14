import React from "react";
import cssImage from "../../assets/images/css.png";



function CSSInfo() {
  return (
    <div className="css-container">
      <div className="image-container">
  <img src={cssImage} alt="CSS Logo" className="topic-logo" />
</div>

      <h1>🎨 CSS (Cascading Style Sheets) – Full Information</h1>

      <section>
        <h2>🔹 What is CSS?</h2>
        <p>
          CSS (Cascading Style Sheets) is a stylesheet language used to define the visual presentation of web documents. It controls how HTML elements are displayed on screen, paper, or in other media. CSS allows for a separation between content (HTML) and presentation (style), enabling more flexible and maintainable code.
        </p>
      </section>

      <section>
        <h2>🔹 History of CSS</h2>
        <ul>
          <li><strong>Invented by:</strong> Håkon Wium Lie</li>
          <li><strong>First proposed:</strong> 1994</li>
          <li><strong>CSS1 Released:</strong> 1996, introducing basic styling capabilities</li>
          <li><strong>CSS2 Released:</strong> 1998, added positioning, media types, z-index, etc.</li>
          <li><strong>CSS3 Modularized:</strong> From 2011, added transitions, animations, media queries</li>
          <li><strong>CSS4:</strong> Evolving in modules by W3C</li>
        </ul>
      </section>

      <section>
        <h2>🔹 Why Use CSS?</h2>
        <ul>
          <li>Enhances the look and feel of a webpage</li>
          <li>Improves code reusability and separation of concerns</li>
          <li>Speeds up website loading via external style sheets</li>
          <li>Enables responsive designs and mobile compatibility</li>
          <li>Facilitates animations and interactive visual effects</li>
        </ul>
      </section>

      <section>
        <h2>🔹 Types of CSS</h2>
        <ul>
          <li><strong>Inline CSS:</strong> Applied directly within an HTML tag</li>
          <li><strong>Internal CSS:</strong> Defined in a <code>&lt;style&gt;</code> block within the HTML document’s head</li>
          <li><strong>External CSS:</strong> Stored in separate .css files and linked to the HTML</li>
        </ul>
      </section>

      <section>
        <h2>🔹 CSS Syntax Structure</h2>
        <p>
          CSS consists of rules made up of selectors and declarations. Declarations contain properties and their corresponding values. Rules control how HTML elements should be styled.
        </p>
      </section>

      <section>
        <h2>🔹 CSS Selectors (Types)</h2>
        <ul>
          <li>Basic Selectors: element, class, ID</li>
          <li>Group Selectors</li>
          <li>Combinators</li>
          <li>Attribute Selectors</li>
          <li>Pseudo-classes and Pseudo-elements</li>
        </ul>
      </section>

      <section>
        <h2>🔹 CSS Properties Categories</h2>
        <ul>
          <li>Text Properties</li>
          <li>Box Model Properties</li>
          <li>Color and Backgrounds</li>
          <li>Positioning</li>
          <li>Display and Visibility</li>
          <li>Flexbox and Grid</li>
          <li>Transitions and Animations</li>
          <li>Transforms</li>
          <li>Media Queries</li>
          <li>Z-index</li>
          <li>Overflow</li>
        </ul>
      </section>

      <section>
        <h2>🔹 The CSS Box Model</h2>
        <ul>
          <li>Content</li>
          <li>Padding</li>
          <li>Border</li>
          <li>Margin</li>
        </ul>
      </section>

      <section>
        <h2>🔹 Units in CSS</h2>
        <ul>
          <li><strong>Absolute:</strong> px, pt, cm, mm, in</li>
          <li><strong>Relative:</strong> %, em, rem, vw, vh</li>
        </ul>
      </section>

      <section>
        <h2>🔹 Responsive Design in CSS</h2>
        <ul>
          <li>Media Queries</li>
          <li>Flexible Units</li>
          <li>Flexbox & Grid</li>
        </ul>
      </section>

      <section>
        <h2>🔹 CSS Methodologies & Best Practices</h2>
        <ul>
          <li>BEM (Block Element Modifier)</li>
          <li>OOCSS (Object Oriented CSS)</li>
          <li>SMACSS (Scalable and Modular Architecture for CSS)</li>
          <li>Avoid !important</li>
          <li>Keep CSS DRY</li>
        </ul>
      </section>

      <section>
        <h2>🔹 Advanced CSS Features</h2>
        <ul>
          <li>Custom Properties (CSS Variables)</li>
          <li>Transitions</li>
          <li>Animations</li>
          <li>Transforms</li>
          <li>Clipping & Masking</li>
          <li>Filters</li>
        </ul>
      </section>

      <section>
        <h2>🔹 CSS Preprocessors</h2>
        <ul>
          <li>SASS</li>
          <li>LESS</li>
          <li>Stylus</li>
        </ul>
      </section>

      <section>
        <h2>🔹 Tools & Libraries</h2>
        <ul>
          <li>Frameworks: Bootstrap, Tailwind CSS, Bulma, Foundation</li>
          <li>Reset Styles: Normalize.css</li>
          <li>Linters: Stylelint</li>
          <li>Autoprefixer</li>
        </ul>
      </section>

      <section>
        <h2>🔹 Advantages of CSS</h2>
        <ul>
          <li>Beautiful UIs</li>
          <li>Separation of style and content</li>
          <li>Consistent design</li>
          <li>Easier maintenance</li>
          <li>Responsive and mobile-first support</li>
        </ul>
      </section>

      <section>
        <h2>🔹 Disadvantages of CSS</h2>
        <ul>
          <li>Cross-browser issues</li>
          <li>Complexity with advanced layouts</li>
          <li>Large stylesheets can get messy</li>
          <li>Specificity and debugging challenges</li>
        </ul>
      </section>

      <section>
        <h2>🔹 Use Cases of CSS</h2>
        <ul>
          <li>Website design</li>
          <li>Animations</li>
          <li>Responsive layouts</li>
          <li>Theming and branding</li>
          <li>Accessibility enhancements</li>
        </ul>
      </section>

      <section>
        <h2>🔹 Conclusion</h2>
        <p>
          CSS is essential for front-end web development. From basic styling to advanced animations and responsive designs, CSS powers modern website design and layout. Its evolution keeps it relevant and powerful.
        </p>
      </section>

      <section>
        <h2>🎥 Best CSS Video Tutorials</h2>
        <ul>
          <li>
            <a href="https://www.youtube.com/watch?v=1Rs2ND1ryYc" target="_blank" rel="noopener noreferrer">
              CSS Full Course - Web Development Tutorial (freeCodeCamp)
            </a>
          </li>
          <li>
            <a href="https://www.youtube.com/watch?v=yfoY53QXEnI" target="_blank" rel="noopener noreferrer">
              Learn CSS in 20 Minutes
            </a>
          </li>
          <li>
            <a href="https://www.youtube.com/watch?v=wRNinF7YQqQ" target="_blank" rel="noopener noreferrer">
              CSS Crash Course For Absolute Beginners
            </a>
          </li>
        </ul>
      </section>
    </div>
  );
}

export default CSSInfo;
