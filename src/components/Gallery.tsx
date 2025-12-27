import gallery1 from "../assets/gallery1.jpg";
import gallery2 from "../assets/gallery2.jpg";
import gallery3 from "../assets/gallery3.jpg";
import gallery4 from "../assets/gallery4.jpg";
import gallery5 from "../assets/gallery5.jpg";
import gallery6 from "../assets/gallery6.jpg";


const Gallery = () => {
  const images = [
    { src: gallery1, alt: "Dramatic studio portrait", height: "tall" },
    { src: gallery2, alt: "Creative portrait lighting", height: "short" },
    { src: gallery3, alt: "Visual storytelling portrait", height: "tall" },
    { src: gallery4, alt: "Editorial portrait", height: "short" },
    { src: gallery5, alt: "Conceptual visual narrative", height: "short" },
    { src: gallery6, alt: "Emotive artistic portrait", height: "tall" },
  ];

  return (
    <section className="px-6 md:px-12 lg:px-24 py-16 md:py-24">
      <h3 className="font-cursive text-[#C6927B] text-3xl md:text-[35px] mb-8">
        Gallery
      </h3>

      <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
        {images.map((image, index) => (
          <div key={index} className="group break-inside-avoid overflow-hidden">
            <img
              src={image.src}
              alt={image.alt}
              loading="lazy"
              className={`
                w-full object-cover
                transition-transform duration-500 ease-out
                group-hover:scale-[1.04] group-hover:opacity-95
                ${image.height === "tall" ? "aspect-[3/4]" : "aspect-[4/3]"}
              `}
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Gallery;
