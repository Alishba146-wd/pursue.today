import Image from "next/image";

const images = [
  "/career1.png",
  "/career2.png",
  "/career3.png",
  "/career4.png",
  "/career11.png",
  "/career12.png",
];

export default function ImageGallery() {
  return (
    <div className="w-full overflow-x-auto pb-8 hide-scrollbar">
      <div className="flex space-x-6 px-4 md:px-8 min-w-max">
        {images.map((src, index) => (
          <div
            key={index}
            className="relative w-[300px] h-[300px] md:w-[400px] md:h-[400px] rounded-3xl overflow-hidden shadow-lg flex-shrink-0"
          >
            <Image
              src={src}
              alt={`Life at Pursue Today ${index + 1}`}
              fill
              className="object-cover hover:scale-105 transition-transform duration-500"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
