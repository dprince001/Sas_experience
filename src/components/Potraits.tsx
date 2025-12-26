
import portrait1 from "../assets/potrait1.jpg";
import portrait2 from "../assets/potrait2.jpg";

const Portraits = () => {
  return (
    <section id="portraits" className="md:pl-12 lg:pl-24 py-16 md:py-24">
      <div className="grid grid-cols-1 md:grid-cols-2 md:gap-6 md:gap-8">
        <div className="aspect-[3/4] overflow-hidden">
          <img
            src={portrait1}
            alt="Portrait photography by SAS Experience - dramatic studio portrait"
            className="w-full h-full object-cover"
            loading="lazy"
          />
        </div>
        <div className="aspect-[3/4] overflow-hidden">
          <img
            src={portrait2}
            alt="Portrait photography by SAS Experience - artistic portrait with dramatic lighting"
            className="w-full h-full object-cover"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
};

export default Portraits;