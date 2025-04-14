import { Link } from 'react-router-dom';

function Sidebar() {
  return (
    <aside className="sidebar">
      <h3>Topics</h3>
      <ul>
        <li><Link to="/docs/javascript">JavaScript</Link></li>
        <li><Link to="/docs/python">Python</Link></li>
        <li><Link to="/docs/ruby">Ruby</Link></li>
        <li><Link to="/docs/html">HTML</Link></li>
        <li><Link to="/docs/css">CSS</Link></li>
        <li><Link to="/docs/csharp">C#</Link></li>
        <li><Link to="/docs/cplusplus">C++</Link></li>
        <li><Link to="/docs/typescript">TypeScript</Link></li>
        <li><Link to="/docs/golang">Golang</Link></li>
        

      </ul>
    </aside>
  );
}

export default Sidebar;
