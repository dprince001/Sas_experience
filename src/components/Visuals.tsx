
import visual1 from "../assets/visual1.jpg";
import visual2 from "../assets/visual2.jpg";

const Visuals = () => {
  return (
    <section className="md:pr-12 lg:pr-24 py-16 md:py-24">
      <div className="grid grid-cols-1 md:grid-cols-2 md:gap-6 md:gap-8">
        <div className="aspect-[3/4] overflow-hidden">
          <img
            src={visual1}
            alt="Portrait photography by SAS Experience - dramatic studio portrait"
            className="w-full h-full object-cover"
            loading="lazy"
          />
        </div>
        
        <div className="aspect-[3/4] overflow-hidden">
          <img
            src={visual2}
            alt="Portrait photography by SAS Experience - artistic portrait with dramatic lighting"
            className="w-full h-full object-cover"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
};

export default Visuals;