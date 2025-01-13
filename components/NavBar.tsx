import React from "react";
import Link from "next/link";
import { FaPinterest, FaInstagram, FaFacebook, FaUserCircle } from "react-icons/fa"; // Import de l'icône d'utilisateur

const NavBar: React.FC = () => {
  return (
    <nav className="bg-gray-800 p-4 text-white">
      <div className="container mx-auto flex justify-between items-center">
        {/* Nom de la galerie */}
        <div className="text-lg font-bold cursor-pointer">
          <Link href="/">Galerie Joséphine</Link>
        </div>

        {/* Liens de navigation */}
        <div className="flex space-x-4 items-center">
          <Link href="/" className="hover:text-gray-400">
            Home
          </Link>
          <Link href="/about" className="hover:text-gray-400">
            Artists
          </Link>
          <Link href="/contact" className="hover:text-gray-400">
            Contact
          </Link>
        </div>

        {/* Icônes de réseaux sociaux + icône de compte */}
        <div className="flex space-x-4 items-center ml-4">
          {/* Icônes de réseaux sociaux */}
          <a
            href="https://www.pinterest.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-400"
          >
            <FaPinterest size={24} />
          </a>
          <a
            href="https://www.instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-400"
          >
            <FaInstagram size={24} />
          </a>
          <a
            href="https://www.facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-400"
          >
            <FaFacebook size={24} />
          </a>

          {/* Icône de compte */}
          <Link href="/login" className="hover:text-gray-400 cursor-pointer">
            <FaUserCircle size={24} />
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
