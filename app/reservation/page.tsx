"use client";

import { useRouter, useSearchParams } from "next/navigation";
import StarBorder from "@/components/StarBorder";

export default function ReservationPage() {
  const searchParams = useSearchParams();
  const router = useRouter();

  // Récupération des paramètres de l'image
  const title = searchParams.get("title") || "Réservation";
  const image = searchParams.get("image");
  const description = searchParams.get("description") || "Aucune description disponible.";
  const price = searchParams.get("price") || "100€";

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
            onClick={() => alert("Réservation effectuée !")}
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

          {/* Bouton Retour */}
          <StarBorder
            as="button"
            onClick={() => router.back()}
            color="red"
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
