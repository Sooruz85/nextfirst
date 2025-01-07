import React from "react";
import Masonry from "../../components/Masonry";
import BlurText from "../../components/BlurText";

export default function About() {
  const data = [
    { id: 1, image: "https://picsum.photos/id/10/200/300", height: 400 },
    { id: 2, image: "https://picsum.photos/id/14/200/300", height: 300 },
    { id: 3, image: "https://picsum.photos/id/15/200/300", height: 300 },
    { id: 4, image: "https://picsum.photos/id/16/200/300", height: 300 },
    { id: 5, image: "https://picsum.photos/id/17/200/300", height: 300 },
    { id: 6, image: "https://picsum.photos/id/19/200/300", height: 300 },
    { id: 7, image: "https://picsum.photos/id/37/200/300", height: 200 },
    { id: 8, image: "https://picsum.photos/id/39/200/300", height: 300 },
    { id: 9, image: "https://picsum.photos/id/85/200/300", height: 200 },
    { id: 10, image: "https://picsum.photos/id/103/200/300", height: 400 },
    { id: 11, image: "https://picsum.photos/id/110/200/300", height: 250 },
    { id: 12, image: "https://picsum.photos/id/112/200/300", height: 350 },
    { id: 13, image: "https://picsum.photos/id/113/200/300", height: 300 },
    { id: 14, image: "https://picsum.photos/id/114/200/300", height: 300 },
    { id: 15, image: "https://picsum.photos/id/115/200/300", height: 300 },
    { id: 16, image: "https://picsum.photos/id/116/200/300", height: 250 },
    { id: 17, image: "https://picsum.photos/id/117/200/300", height: 400 },
    { id: 18, image: "https://picsum.photos/id/118/200/300", height: 300 },
    { id: 19, image: "https://picsum.photos/id/119/200/300", height: 350 },
    { id: 20, image: "https://picsum.photos/id/120/200/300", height: 400 },
    { id: 21, image: "https://picsum.photos/id/121/200/300", height: 200 },
    { id: 22, image: "https://picsum.photos/id/122/200/300", height: 300 },
    { id: 23, image: "https://picsum.photos/id/123/200/300", height: 400 },
    { id: 24, image: "https://picsum.photos/id/124/200/300", height: 300 },
    { id: 25, image: "https://picsum.photos/id/125/200/300", height: 350 },
  ];

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Section texte centré */}
      <div className="flex justify-center py-8">
        <BlurText
          text="About Page"
          className="text-6xl font-bold text-center text-gray-800"
          direction="top"
          delay={100}
        />
      </div>

      {/* Section Masonry */}
      <div className="px-4">
        <Masonry data={data} />
      </div>
    </div>
  );
}
