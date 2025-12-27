const About = () => {
  return (
    <section className="flex flex-col justify-center px-6 md:px-12 lg:px-24 py-20 sm:items-center">
      <div className="max-w-4xl">
        <h3 className="font-cursive text-[#C6927B] text-3xl md:text-[35px] mb-8">
          The Artist
        </h3>

        {/* <h2 className="font-display text-white text-4xl md:text-6xl lg:text-[78px] font-thin mb-8 leading-tight">
        SAS Experience
        </h2> */}

        <p className="font-heading font-light text-muted-foreground md:text-lg leading-relaxed max-w-2xl mb-12 text-[#ffffff7a]">
          SAS Experience is a visionary visual artist focused on portraiture and
          storytelling through imagery. With a unique ability to reveal emotion
          and depth in every frame, SAS transforms ordinary moments into memorable visual narratives
        </p>
      </div>
    </section>
  );
};

export default About;
