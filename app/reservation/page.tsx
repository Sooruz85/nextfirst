"use client";

import { useRouter, useSearchParams } from "next/navigation";
import StarBorder from "@/components/StarBorder";
import { useState } from "react";
import Swal from "sweetalert2";

export default function ReservationPage() {
  const searchParams = useSearchParams();
  const router = useRouter();

  // Récupération des paramètres de l'image
  const title = searchParams.get("title") || "Réservation";
  const image = searchParams.get("image");
  const description = searchParams.get("description") || "Aucune description disponible.";
  const price = searchParams.get("price") || "100€";

  // État pour le formulaire
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    quantity: 1,
  });

  // Gestion des changements dans le formulaire
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Fonction pour ajouter l'article au panier
  const handleReservation = () => {
    const cartItems = JSON.parse(localStorage.getItem("cart") || "[]"); // Récupérer le panier actuel
    const newItem = {
      title,
      image,
      description,
      price,
      quantity: formData.quantity,
    };

    cartItems.push(newItem); // Ajouter le nouvel article
    localStorage.setItem("cart", JSON.stringify(cartItems)); // Sauvegarder le panier mis à jour

    Swal.fire({
      title: "Réservé avec succès !",
      text: `${title} a été ajouté à votre panier.`,
      icon: "success",
      confirmButtonText: "OK",
    });
  };

  // Fonction pour réinitialiser le formulaire avec SweetAlert2
  const handleReset = () => {
    Swal.fire({
      title: "Formulaire réinitialisé !",
      text: "Vous avez supprimé les données de réservation.",
      imageUrl: image, // Affiche l'image associée à la réservation
      imageWidth: 400,
      imageHeight: 200,
      imageAlt: title,
      width: 600,
      padding: "3em",
      color: "#716add",
      background: "#fff url(/images/trees.png)",
      backdrop: `
        rgba(0,0,123,0.4)
        url("/images/nyan-cat.gif")
        left top
        no-repeat
      `,
    });
    setFormData({ name: "", email: "", quantity: 1 }); // Réinitialise les champs
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center p-4">
      {/* Bande visuelle avec l'image, le titre et la description */}
      <div className="w-full max-w-3xl bg-white shadow-lg p-6 rounded-lg flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-6">
        {image && (
          <div className="md:w-1/3">
            <img
              src={image}
              alt={title}
              className="w-full h-auto rounded-lg shadow-md"
            />
          </div>
        )}
        <div className="md:w-2/3 flex flex-col">
          <h1 className="text-2xl font-bold mb-2">{title}</h1>
          <p className="text-gray-600 mb-4">{description}</p>
          <div className="text-xl font-semibold text-green-600">{price}</div>
        </div>
      </div>

      {/* Formulaire de réservation */}
      <div className="w-full max-w-3xl bg-white shadow-lg p-6 mt-6 rounded-lg">
        <h2 className="text-xl font-bold mb-4">Formulaire de réservation</h2>
        <form className="space-y-4">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">
              Nom
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              required
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              required
            />
          </div>
          <div>
            <label htmlFor="quantity" className="block text-sm font-medium text-gray-700">
              Quantité
            </label>
            <input
              type="number"
              id="quantity"
              name="quantity"
              value={formData.quantity}
              onChange={handleChange}
              min="1"
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              required
            />
          </div>
        </form>

        {/* Boutons stylisés */}
        <div className="mt-6 flex flex-col space-y-4">
          {/* Bouton Réserver */}
          <StarBorder
            as="button"
            onClick={handleReservation}
            color="cyan"
            speed="4s"
            className="w-full"
          >
            Réserver
          </StarBorder>

          {/* Bouton Règlement */}
          <StarBorder
            as="button"
            onClick={() => alert("Règlement en cours de développement...")}
            color="green"
            speed="6s"
            className="w-full"
          >
            Règlement
          </StarBorder>

          {/* Bouton Supprimer */}
          <StarBorder
            as="button"
            onClick={handleReset}
            color="red"
            speed="5s"
            className="w-full"
          >
            Supprimer
          </StarBorder>

          {/* Bouton Retour */}
          <StarBorder
            as="button"
            onClick={() => router.back()}
            color="gray"
            speed="4s"
            className="w-full"
          >
            Retour
          </StarBorder>
        </div>
      </div>
    </div>
  );
}
