"use client";

import { useParams } from "next/navigation";

export default function ImagePage() {
  const params = useParams();
  const { id } = params;
  console.log("Params:", params);
  const images = [
    { id: 1, title: "Image 1", description: "Description pour Image 1", image: "https://picsum.photos/id/10/400/600" },
    { id: 2, title: "Image 2", description: "Description pour Image 2", image: "https://picsum.photos/id/14/400/600" },
    { id: 3, title: "Image 3", description: "Description pour Image 3", image: "https://picsum.photos/id/15/400/600" },
    { id: 4, title: "Image 4", description: "Description pour Image 4", image: "https://picsum.photos/id/16/400/600" },
    { id: 5, title: "Image 5", description: "Description pour Image 5", image: "https://picsum.photos/id/17/400/600" },
    { id: 6, title: "Image 6", description: "Description pour Image 6", image: "https://picsum.photos/id/19/400/600" },
    { id: 7, title: "Image 7", description: "Description pour Image 7", image: "https://picsum.photos/id/37/400/600" },
    { id: 8, title: "Image 8", description: "Description pour Image 8", image: "https://picsum.photos/id/39/400/600" },
    { id: 9, title: "Image 9", description: "Description pour Image 9", image: "https://picsum.photos/id/85/400/600" },
    { id: 10, title: "Image 10", description: "Description pour Image 10", image: "https://picsum.photos/id/103/400/600" },
    { id: 11, title: "Image 11", description: "Description pour Image 11", image: "https://picsum.photos/id/104/400/600" },
    { id: 12, title: "Image 12", description: "Description pour Image 12", image: "https://picsum.photos/id/105/400/600" },
    { id: 13, title: "Image 13", description: "Description pour Image 13", image: "https://picsum.photos/id/106/400/600" },
    { id: 14, title: "Image 14", description: "Description pour Image 14", image: "https://picsum.photos/id/107/400/600" },
    { id: 15, title: "Image 15", description: "Description pour Image 15", image: "https://picsum.photos/id/108/400/600" },
    { id: 16, title: "Image 16", description: "Description pour Image 16", image: "https://picsum.photos/id/109/400/600" },
    { id: 17, title: "Image 17", description: "Description pour Image 17", image: "https://picsum.photos/id/110/400/600" },
    { id: 18, title: "Image 18", description: "Description pour Image 18", image: "https://picsum.photos/id/111/400/600" },
    { id: 19, title: "Image 19", description: "Description pour Image 19", image: "https://picsum.photos/id/112/400/600" },
    { id: 20, title: "Image 20", description: "Description pour Image 20", image: "https://picsum.photos/id/113/400/600" },
    { id: 21, title: "Image 21", description: "Description pour Image 21", image: "https://picsum.photos/id/114/400/600" },
    { id: 22, title: "Image 22", description: "Description pour Image 22", image: "https://picsum.photos/id/115/400/600" },
    { id: 23, title: "Image 23", description: "Description pour Image 23", image: "https://picsum.photos/id/116/400/600" },
    { id: 24, title: "Image 24", description: "Description pour Image 24", image: "https://picsum.photos/id/117/400/600" },
    { id: 25, title: "Image 25", description: "Description pour Image 25", image: "https://picsum.photos/id/118/400/600" },
    { id: 26, title: "Image 26", description: "Description pour Image 26", image: "https://picsum.photos/id/119/400/600" },
    { id: 27, title: "Image 27", description: "Description pour Image 27", image: "https://picsum.photos/id/120/400/600" },
    { id: 28, title: "Image 28", description: "Description pour Image 28", image: "https://picsum.photos/id/121/400/600" },
    { id: 29, title: "Image 29", description: "Description pour Image 29", image: "https://picsum.photos/id/122/400/600" },
    { id: 30, title: "Image 30", description: "Description pour Image 30", image: "https://picsum.photos/id/123/400/600" },
    { id: 31, title: "Image 31", description: "Description pour Image 31", image: "https://picsum.photos/id/124/400/600" },
  ];

  const image = images.find((img) => img.id === Number(id));

  if (!image) {
    return <p className="text-center text-red-500">Image non trouvée</p>;
  }

  return (
    <div className="container mx-auto p-8 flex flex-col md:flex-row items-center">
      <img
        src={image.image}
        alt={image.title}
        className="max-w-full h-auto rounded-lg shadow-lg mb-6 md:mb-0 md:mr-6"
      />
      <div>
        <h1 className="text-4xl font-bold mb-4">{image.title}</h1>
        <p className="text-lg text-gray-700">{image.description}</p>
      </div>
    </div>
  );
}
