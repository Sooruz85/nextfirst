"use client";

import { notFound } from "next/navigation";
import { useRouter } from "next/navigation";

const data = [
  { id: 1, image: "https://picsum.photos/id/10/400/600", title: "Image 1", description: "Description for image 1" },
  { id: 2, image: "https://picsum.photos/id/14/400/600", title: "Image 2", description: "Description for image 2" },
  { id: 3, image: "https://picsum.photos/id/15/400/600", title: "Image 3", description: "Description for image 3" },
  { id: 4, image: "https://picsum.photos/id/16/400/600", title: "Image 4", description: "Description for image 4" },
  { id: 5, image: "https://picsum.photos/id/17/400/600", title: "Image 5", description: "Description for image 5" },
  { id: 6, image: "https://picsum.photos/id/19/400/600", title: "Image 6", description: "Description for image 6" },
  { id: 7, image: "https://picsum.photos/id/37/400/600", title: "Image 7", description: "Description for image 7" },
  { id: 8, image: "https://picsum.photos/id/39/400/600", title: "Image 8", description: "Description for image 8" },
  { id: 9, image: "https://picsum.photos/id/85/400/600", title: "Image 9", description: "Description for image 9" },
  { id: 10, image: "https://picsum.photos/id/103/400/600", title: "Image 10", description: "Description for image 10" },
  { id: 11, image: "https://picsum.photos/id/110/400/600", title: "Image 11", description: "Description for image 11" },
  { id: 12, image: "https://picsum.photos/id/112/400/600", title: "Image 12", description: "Description for image 12" },
  { id: 13, image: "https://picsum.photos/id/113/400/600", title: "Image 13", description: "Description for image 13" },
  { id: 14, image: "https://picsum.photos/id/114/400/600", title: "Image 14", description: "Description for image 14" },
  { id: 15, image: "https://picsum.photos/id/115/400/600", title: "Image 15", description: "Description for image 15" },
  { id: 16, image: "https://picsum.photos/id/116/400/600", title: "Image 16", description: "Description for image 16" },
  { id: 17, image: "https://picsum.photos/id/117/400/600", title: "Image 17", description: "Description for image 17" },
  { id: 18, image: "https://picsum.photos/id/118/400/600", title: "Image 18", description: "Description for image 18" },
  { id: 19, image: "https://picsum.photos/id/119/400/600", title: "Image 19", description: "Description for image 19" },
  { id: 20, image: "https://picsum.photos/id/120/400/600", title: "Image 20", description: "Description for image 20" },
  { id: 21, image: "https://picsum.photos/id/121/400/600", title: "Image 21", description: "Description for image 21" },
  { id: 22, image: "https://picsum.photos/id/122/400/600", title: "Image 22", description: "Description for image 22" },
  { id: 23, image: "https://picsum.photos/id/123/400/600", title: "Image 23", description: "Description for image 23" },
  { id: 24, image: "https://picsum.photos/id/124/400/600", title: "Image 24", description: "Description for image 24" },
  { id: 25, image: "https://picsum.photos/id/125/400/600", title: "Image 25", description: "Description for image 25" },
];

export default function ImagePage({ params }: { params: { id: string } }) {
  const router = useRouter();
  const imageId = parseInt(params.id, 10);
  const image = data.find((img) => img.id === imageId);

  if (!image) {
    notFound(); // Affiche une page 404 si l'image n'est pas trouvée
  }

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col lg:flex-row items-center justify-center p-8">
      {/* Section image */}
      <div className="lg:w-1/2">
        <img src={image.image} alt={image.title} className="rounded-lg shadow-lg mb-6 lg:mb-0 lg:mr-6" />
      </div>

      {/* Section texte */}
      <div className="lg:w-1/2 text-center lg:text-left">
        <h1 className="text-4xl font-bold mb-4">{image.title}</h1>
        <p className="text-lg text-gray-600 mb-6">{image.description}</p>

        {/* Bouton Retour */}
        <button
          onClick={() => router.back()}
          className="px-6 py-2 bg-blue-500 text-white font-semibold rounded-lg shadow hover:bg-blue-600 transition"
        >
          Retour
        </button>
      </div>
    </div>
  );
}

