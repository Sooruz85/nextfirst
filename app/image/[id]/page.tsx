"use client";

import { notFound } from "next/navigation";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import StarBorder from "@/components/StarBorder";
import { data } from "@/data/imageData"; // Import des données depuis imageData.ts

export default function ImagePage({ params }: { params: Promise<{ id: string }> }) {
  const router = useRouter();
  const [image, setImage] = useState<any>(null);

  useEffect(() => {
    async function fetchParams() {
      const resolvedParams = await params; // Résolution de la promesse
      const imageId = parseInt(resolvedParams.id, 10);
      const foundImage = data.find((img) => img.id === imageId);
      if (!foundImage) {
        notFound(); // Affiche une page 404 si l'image n'est pas trouvée
      } else {
        setImage(foundImage); // Mise à jour de l'état
      }
    }

    fetchParams();
  }, [params]);

  if (!image) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p>Chargement...</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col lg:flex-row items-center justify-center p-8">
      {/* Section image */}
      <div className="lg:w-1/2">
        <img src={image.image} alt={image.title} className="rounded-lg shadow-lg mb-6 lg:mb-0 lg:mr-6" />
      </div>

      {/* Section texte */}
      <div className="lg:w-1/2 flex flex-col h-full">
        {/* Titre fixe en haut */}
        <h1 className="text-4xl font-bold mb-4">{image.title}</h1>

        {/* Conteneur flexible pour la description et les boutons */}
        <div className="flex flex-col flex-grow justify-between">
          {/* Description */}
          <p className="text-lg text-gray-600">{image.description}</p>

          {/* Boutons alignés en bas */}
          <div className="flex justify-center lg:justify-start space-x-4 mt-4">
            <StarBorder
              as="button"
              onClick={() => router.back()}
              color="cyan"
              speed="4s"
              className="custom-class"
            >
              Retour
            </StarBorder>

            <StarBorder
              as="button"
              onClick={() =>
                router.push(`/contact?title=${encodeURIComponent(image.title)}&image=${encodeURIComponent(image.image)}`)
              }
              color="magenta"
              speed="6s"
              className="custom-class"
            >
              Info
            </StarBorder>

            <StarBorder
              as="button"
              onClick={() =>
                router.push(
                  `/reservation?title=${encodeURIComponent(image.title)}&image=${encodeURIComponent(image.image)}&description=${encodeURIComponent(image.description)}&price=200€`
                )
              }
              color="green"
              speed="5s"
              className="custom-class"
            >
              Réservation
            </StarBorder>
          </div>
        </div>
      </div>
    </div>
  );
}
