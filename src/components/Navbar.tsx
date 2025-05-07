import { Link } from 'react-router-dom';

const Navbar = () => (
    <nav className="bg-gray-100 p-4 flex justify-center gap-6 border-b sticky top-0 z-50">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/skills">Skills</Link>
        <Link to="/experience">Experience</Link>
        <Link to="/projects">Projects</Link>
        <Link to="/contact">Contact</Link>
    </nav>
    
);

export default Navbar;
