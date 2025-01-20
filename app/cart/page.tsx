"use client";

import { useState, useEffect } from "react";
import Swal from "sweetalert2";
import { FaTrash } from "react-icons/fa";
import StarBorder from "@/components/StarBorder"; // Import de StarBorder

export default function CartPage() {
  const [cartItems, setCartItems] = useState<any[]>([]);

  useEffect(() => {
    // Récupérer les articles du panier depuis le localStorage
    const items = JSON.parse(localStorage.getItem("cart") || "[]");
    setCartItems(items);
  }, []);

  // Fonction pour supprimer un article du panier
  const handleDelete = (index: number) => {
    const updatedCart = cartItems.filter((_, i) => i !== index);
    setCartItems(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart)); // Mettre à jour le localStorage

    Swal.fire({
      title: "Article supprimé",
      text: "L'article a été retiré de votre panier.",
      icon: "success",
      confirmButtonText: "OK",
    });
  };

  // Fonction pour simuler un paiement
  const handlePayment = () => {
    Swal.fire({
      title: "Paiement effectué",
      text: "Merci pour votre achat !",
      icon: "success",
      confirmButtonText: "OK",
    }).then(() => {
      setCartItems([]); // Vider le panier
      localStorage.removeItem("cart"); // Supprimer les articles du localStorage
    });
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-bold mb-6">Votre Panier</h1>

      {cartItems.length > 0 ? (
        <div className="space-y-6">
          {/* Liste des articles */}
          {cartItems.map((item, index) => (
            <div
              key={index}
              className="bg-white shadow-lg rounded-lg p-4 flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-6"
            >
              {/* Visuel du tableau */}
              <img
                src={item.image}
                alt={item.title}
                className="w-48 h-32 object-cover rounded-lg shadow-md"
              />

              {/* Informations du tableau */}
              <div className="flex-grow">
                <h2 className="text-xl font-bold text-gray-800">{item.title}</h2>
                <p className="text-gray-600">{item.description}</p>
                <p className="text-green-600 font-bold mt-2">{item.price} €</p>
                <p>Quantité : {item.quantity}</p>
              </div>

              {/* Bouton Supprimer (Icône de corbeille) */}
              <button
                onClick={() => handleDelete(index)}
                className="text-red-500 hover:text-red-600 transition"
              >
                <FaTrash size={20} />
              </button>
            </div>
          ))}

          {/* Total et paiement */}
          <div className="bg-white shadow-lg rounded-lg p-4 flex justify-between items-center">
            <h3 className="text-xl font-bold">Total :</h3>
            <p className="text-2xl font-bold text-green-600">
              {cartItems.reduce(
                (total, item) => total + parseFloat(item.price) * item.quantity,
                0
              )}{" "}
              €
            </p>
          </div>

          {/* Bouton Paiement */}
          <StarBorder
            as="button"
            onClick={handlePayment}
            color="cyan"
            speed="4s"
            className="w-full"
          >
            Payer
          </StarBorder>
        </div>
      ) : (
        <p className="text-lg text-gray-600">Votre panier est vide.</p>
      )}
    </div>
  );
}
