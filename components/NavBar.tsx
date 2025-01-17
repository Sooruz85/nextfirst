"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { FaPinterest, FaInstagram, FaFacebook, FaUserCircle } from "react-icons/fa";
import { supabase } from "@/lib/supabase";

const NavBar: React.FC = () => {
  const [user, setUser] = useState<any>(null);
  const [showLoginModal, setShowLoginModal] = useState(false);

  // Vérifiez si un utilisateur est connecté
  useEffect(() => {
    const fetchUser = async () => {
      const { data } = await supabase.auth.getUser();
      setUser(data.user);
    };

    // S'abonner aux changements d'état de session
    const { data: subscription } = supabase.auth.onAuthStateChange((_, session) => {
      setUser(session?.user || null);
    });

    fetchUser();

    // Nettoyer l'abonnement
    return () => {
      subscription?.unsubscribe();
    };
  }, []);

  const handleLogout = async () => {
    await supabase.auth.signOut();
    setUser(null);
  };

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
          {user ? (
            <button
              onClick={handleLogout}
              className="hover:text-gray-400 cursor-pointer"
            >
              Logout
            </button>
          ) : (
            <>
              <button
                onClick={() => setShowLoginModal(true)}
                className="hover:text-gray-400 cursor-pointer"
              >
                <FaUserCircle size={24} />
              </button>
              {showLoginModal && (
                <LoginModal onClose={() => setShowLoginModal(false)} />
              )}
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

const LoginModal: React.FC<{ onClose: () => void }> = ({ onClose }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      setError("Invalid email or password. Please try again.");
    } else {
      onClose(); // Ferme la modale après connexion réussie
    }
  };

  return (
    <div className="fixed inset-0 bg-gray-800 bg-opacity-75 flex justify-center items-center z-50">
      <div className="bg-white rounded-lg shadow-lg w-full max-w-md p-6">
        <h2 className="text-xl font-bold mb-4">Login</h2>
        {error && <p className="text-red-500 text-sm mb-4">{error}</p>}
        <form onSubmit={handleLogin} className="space-y-4">
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Email
            </label>
            <input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="mt-1 w-full border-gray-300 rounded-md shadow-sm"
            />
          </div>
          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700"
            >
              Password
            </label>
            <input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="mt-1 w-full border-gray-300 rounded-md shadow-sm"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600"
          >
            Login
          </button>
        </form>
        <button
          onClick={onClose}
          className="mt-4 w-full text-gray-500 hover:underline"
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default NavBar;
