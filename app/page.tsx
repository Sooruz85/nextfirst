"use client";

import RollingGallery from "@/components/RollingGallery";
import BlurText from "@/components/BlurText";
import Link from "next/link";

export default function Home() {
  const images = [
    "/images/image1.jpg",
    "/images/image2.jpg",
    "/images/image3.jpg",
    "/images/image4.jpg",
    "/images/image5.jpg",
    "/images/image6.jpg",
    "/images/image7.jpg",
    "/images/image8.jpg",
  ]; // Remplacez par vos propres chemins d'image

  return (
    <div className="container mx-auto p-8">
      <header className="text-center mb-10">
        {/* Titre avec la police Poppins ExtraBold */}
        <div className="flex justify-center">
          <BlurText
            text="Gallery of Travel Painters"
            delay={100}
            animateBy="words"
            direction="top"
            className="text-6xl font-extrabold text-black-800 mb-4 font-poppins tracking-normal whitespace-nowrap"
          />
        </div>
        <Link href="/login" className="text-blue-500 hover:underline mt-4 inline-block">
          Login to access your account
        </Link>
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
