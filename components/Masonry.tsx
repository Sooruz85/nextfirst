"use client";

import React from "react";
import Masonry from "@/components/Masonry";
import BlurText from "@/components/BlurText";

const data = Array.from({ length: 43 }, (_, i) => ({
  id: i + 1,
  image: `https://picsum.photos/id/${i + 10}/300/400`,
  height: 200 + Math.floor(Math.random() * 200), // Random heights for variety
}));

const MasonryPage = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-8">
      {/* Utilisation de BlurText pour le titre */}
      <BlurText
        text="Discover our artists!"
        delay={150} // Animation delay between words
        animateBy="words" // Animation style: word by word
        direction="top" // Animation comes from top
        className="text-6xl font-bold text-center mb-8 text-blue-800"
      />
      <Masonry data={data} />
    </div>
  );
};

export default MasonryPage;
