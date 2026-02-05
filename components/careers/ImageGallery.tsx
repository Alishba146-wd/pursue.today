import Image from "next/image";

const images = [
  "/career1.png",
  "/career2.png",
  "/career3.png",
  "/career4.png",
  "/career5.png",
  "/career6.png",
  "/career7.png",
  "/career8.png",
  "/career9.png",
  "/career10.png",
  "/career11.png",
  "/career12.png",
  "/career13.png",
];

export default function ImageGallery() {
  return (
    <div className="w-full overflow-hidden" data-aos="fade-up">
      <div className="flex animate-scroll-gallery">
        {/* First set of images */}
        {images.map((src, index) => (
          <div
            key={index}
            className="relative w-[250px] h-[250px] md:w-[350px] md:h-[350px] rounded-3xl overflow-hidden shadow-lg flex-shrink-0 mx-3"
          >
            <Image
              src={src}
              alt={`Life at Pursue Today ${index + 1}`}
              fill
              className="object-cover"
            />
          </div>
        ))}
        {/* Duplicate set for seamless loop */}
        {images.map((src, index) => (
          <div
            key={`dup-${index}`}
            className="relative w-[250px] h-[250px] md:w-[350px] md:h-[350px] rounded-3xl overflow-hidden shadow-lg flex-shrink-0 mx-3"
          >
            <Image
              src={src}
              alt={`Life at Pursue Today ${index + 1}`}
              fill
              className="object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
