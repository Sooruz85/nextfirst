"use client";

import RollingGallery from "@/components/RollingGallery";

export default function Home() {
  const images = [
    "/images/image1.jpg",
    "/images/image2.jpg",
    "/images/image3.jpg",
    "/images/image4.jpg",
    "/images/image5.jpg",
  ]; // Remplacez par vos propres chemins d'image

  return (
    <div className="container mx-auto p-8">
      <header className="text-center mb-10">
        <h1 className="text-5xl font-bold text-blue-600 mb-4">
          Galerie des peintres du voyages!
        </h1>
      </header>

      <section className="relative">
        {/* Phrase statique par-dessus le carousel */}
        <div className="absolute inset-0 flex items-center justify-center z-20">
          <p className="text-white text-2xl font-semibold bg-black bg-opacity-50 px-6 py-3 rounded-lg">
            Découvrez la beauté des voyages à travers l'art!
          </p>
        </div>

        {/* Carousel */}
        <div className="relative z-10">
          <RollingGallery images={images} autoplay={true} pauseOnHover={true} />
        </div>
      </section>
    </div>
  );
}
