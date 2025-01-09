"use client";

import { useSearchParams, useRouter } from "next/navigation";
import { useEffect, useRef } from "react";
import mapboxgl from "mapbox-gl";
import StarBorder from "@/components/StarBorder";

mapboxgl.accessToken = "pk.eyJ1Ijoic29vcnV6ODUiLCJhIjoiY2xzaXN2cWtzMmhsaTJpcWxqcXRocHFsbiJ9.jgkP6c1YAVh9zhhABmnrGA"; // Remplacez par votre clé Mapbox

export default function ContactPage() {
  const searchParams = useSearchParams();
  const router = useRouter();

  const title = searchParams.get("title") || "Formulaire de Contact";
  const image = searchParams.get("image");

  const mapContainer = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (mapContainer.current) {
      const map = new mapboxgl.Map({
        container: mapContainer.current,
        style: "mapbox://styles/mapbox/streets-v11",
        center: [2.3522, 48.8566], // Paris
        zoom: 12,
      });

      new mapboxgl.Marker().setLngLat([2.3522, 48.8566]).addTo(map);

      return () => map.remove();
    }
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center">
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
          <div className="mt-6 text-sm text-gray-700 bg-gray-50 p-4 rounded-lg shadow">
            <p className="font-bold">Notre adresse :</p>
            <p>123 Rue Fictive</p>
            <p>75000 Paris, France</p>
            <p>Téléphone : +33 1 23 45 67 89</p>
          </div>
          <div className="mt-6">
            <div ref={mapContainer} className="w-full h-64 rounded-lg shadow-md" />
          </div>
          <div className="flex flex-col space-y-4 mt-16">
            <StarBorder as="button" type="submit" color="blue" speed="4s" className="w-full">
              Envoyer
            </StarBorder>
            <StarBorder as="button" onClick={() => router.back()} color="cyan" speed="4s" className="w-full">
              Retour
            </StarBorder>
          </div>
        </form>
      </div>
    </div>
  );
}
