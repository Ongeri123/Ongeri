import React, { useState } from "react"; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight, faBars, faTimes } from '@fortawesome/free-solid-svg-icons'
import { Link } from "react-router-dom";

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
      <nav className="flex items-center justify-between fixed top-0 left-0 right-0 z-50 pt-4 pb-4 bg-black border-b border-white/10">
      <h1 className="text-accent ml-4">// ONGERI</h1>
      
      {/* Hamburger Menu Button */}
      <button 
        className="md:hidden mr-4 text-accent text-2xl"
        onClick={() => setIsOpen(!isOpen)}
      >
        <FontAwesomeIcon icon={isOpen ? faTimes : faBars} />
      </button>

      {/* Desktop Menu */}
      <ul className="hidden md:flex gap-10 text-muted italic font-body absolute left-1/2 transform -translate-x-1/2">
        <li className="hover:text-accent transition-colors">
          <Link to="/projects">PROJECTS</Link>
        </li>
        <li className="hover:text-accent transition-colors">
          <Link to="/stack">STACK</Link>
        </li>
        <li className="hover:text-accent transition-colors">
          <Link to="/case-studies">CASE STUDIES</Link>
        </li>
        <li className="hover:text-accent transition-colors">
          <Link to="/about">ABOUT</Link>
        </li>
      </ul>

      {/* Mobile Menu */}
      {isOpen && (
        <ul className="md:hidden absolute top-full left-0 right-0 bg-black border-b border-white/10 flex flex-col gap-4 p-4 text-muted italic font-body">
          <li className="hover:text-accent transition-colors">
            <Link to="/projects" onClick={() => setIsOpen(false)}>PROJECTS</Link>
          </li>
          <li className="hover:text-accent transition-colors">
            <Link to="/stack" onClick={() => setIsOpen(false)}>STACK</Link>
          </li>
          <li className="hover:text-accent transition-colors">
            <Link to="/case-studies" onClick={() => setIsOpen(false)}>CASE STUDIES</Link>
          </li>
          <li className="hover:text-accent transition-colors">
            <Link to="/about" onClick={() => setIsOpen(false)}>ABOUT</Link>
          </li>
          <li>
            <button className="bg-accent border rounded-lg px-4 py-2 w-full">Hire Me <FontAwesomeIcon icon={faArrowRight} /></button>
          </li>
        </ul>
      )}

      <button className="hidden md:block hire-button bg-accent border rounded-lg px-4 py-2 mr-4">Hire Me <FontAwesomeIcon icon={faArrowRight} /></button>
    </nav>
  );
};

export default Nav;