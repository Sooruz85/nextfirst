"use client";

import RollingGallery from "@/components/RollingGallery";
import BlurText from "@/components/BlurText";

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
        {/* Titre avec animation BlurText, doublé en taille et centré */}
        <div className="flex justify-center">
          
        <BlurText
          text="Galerie des peintres du voyage!"
          delay={100}
          animateBy="words"
          direction="top"
          className="text-10xl font-bold text-blue-600 mb-4 tracking-wide" // Ajoute un espacement large
        />

        </div>
      </header>

      <section className="relative">
        {/* Carousel */}
        <div className="relative z-10">
          <RollingGallery images={images} autoplay={true} pauseOnHover={true} />
        </div>
      </section>
    </div>
  );
}
