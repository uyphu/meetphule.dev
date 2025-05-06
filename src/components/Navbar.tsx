import { Link } from 'react-router-dom';

const Navbar = () => (
  <nav style={{ padding: '1rem', backgroundColor: '#eee', display: 'flex', gap: '1rem' }}>
    <Link to="/">Home</Link>
    <Link to="/about">About</Link>
    <Link to="/skills">Skills</Link>
    <Link to="/experience">Experience</Link>
    <Link to="/projects">Projects</Link>
    <Link to="/contact">Contact</Link>
  </nav>
);

export default Navbar;
