import { ChevronDown } from "lucide-react";

const Hero = () => {
  const scrollToNext = () => {
    document.getElementById("portraits")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="min-h-[67vh] flex flex-col justify-center px-8 md:px-12 lg:px-24 py-20">
      <div className="max-w-4xl">
        <h3 className="font-cursive text-[#C6927B] text-2xl md:text-3xl lg:text-[35px] mb-8">
          SAS Experience
        </h3>

        <h1 className="font-display text-white text-4xl md:text-6xl lg:text-[78px] font-thin mb-8 leading-tight">
          Visual Artist
        </h1>

        <p className="font-heading font-light text-muted-foreground md:text-lg leading-relaxed max-w-2xl mb-12 text-[#ffffff7a]">
          A visual artist exploring identity, emotion, and storytelling through
          expressive portraiture and creative imagery.
        </p>

        <button
          onClick={scrollToNext}
          className="flex items-center justify-center transition-transform duration-300 hover:-translate-y-2"
          aria-label="Scroll to gallery"
        >
          <svg
            className="w-14 h-16"
            viewBox="0 0 40 46"
            fill="none"
            stroke="#77584b"
            strokeWidth="2"
          >
            <polygon points="20,1 39,12 39,34 20,45 1,34 1,12" fill="none" />
          </svg>
          <ChevronDown className="absolute w-7 h-7 text-primary" />
        </button>
      </div>
    </section>
  );
};

export default Hero;
