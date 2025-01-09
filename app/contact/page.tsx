"use client";

import { useSearchParams, useRouter } from "next/navigation";
import StarBorder from "@/components/StarBorder";

export default function ContactPage() {
  const searchParams = useSearchParams();
  const router = useRouter();

  // Récupération des paramètres de l'image
  const title = searchParams.get("title") || "Formulaire de Contact";
  const image = searchParams.get("image");

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center">
      {/* Bande visuelle avec le titre et l'image */}
      {image && (
        <div className="w-full bg-white shadow-lg p-4 flex items-center space-x-4">
          <img
            src={image}
            alt={title}
            className="h-24 w-24 object-cover rounded-lg"
          />
          <h1 className="text-2xl font-bold">{title}</h1>
        </div>
      )}

      {/* Formulaire de contact */}
      <div className="w-full max-w-2xl bg-white p-8 mt-6 rounded-lg shadow-md">
        <h2 className="text-xl font-bold mb-4">Contactez-nous</h2>
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
            <label htmlFor="message" className="block text-sm font-medium text-gray-700">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows={4}
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              required
            ></textarea>
          </div>

          {/* Boutons stylisés */}
          <div className="flex flex-col space-y-4">
            {/* Bouton Envoyer */}
            <StarBorder
              as="button"
              type="submit"
              color="blue"
              speed="4s"
              className="w-full"
            >
              Envoyer
            </StarBorder>

            {/* Bouton Retour */}
            <StarBorder
              as="button"
              onClick={() => router.back()}
              color="cyan"
              speed="4s"
              className="w-full"
            >
              Retour
            </StarBorder>
          </div>
        </form>
      </div>
    </div>
  );
}
