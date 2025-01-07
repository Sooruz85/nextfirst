import React from "react";
import Masonry from "@/components/Masonry";

const data = Array.from({ length: 43 }, (_, i) => ({
  id: i + 1,
  image: `https://picsum.photos/id/${i + 10}/300/400`,
  height: 200 + Math.floor(Math.random() * 200), // Random heights for variety
}));

const MasonryPage = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-8">
    <h1 style={{ fontSize: "3rem", fontWeight: "bold", textAlign: "center" }}>
  Discover our artists!
</h1>
      <Masonry data={data} />
    </div>
  );
};

export default MasonryPage;
