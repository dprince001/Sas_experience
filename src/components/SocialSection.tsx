import { ArrowUpRight } from "lucide-react";

export default function SocialSection() {
  return (
    <section className="relative py-28 overflow-hidden textured-bg">
      <div className="relative text-center max-w-3xl mx-auto px-6 space-y-10">
        <p className="text-xs uppercase tracking-[0.4em] text-white/50">
          Get in Touch
        </p>

        <h2 className="font-display text-white text-3xl md:text-4xl lg:text-6xl font-light leading-tight">
          Book a Session or Collaborate
        </h2>

        <p className="font-body text-white/70 md:text-lg leading-relaxed">
          From intimate portrait sessions to thoughtful creative partnerships,
          every project begins with a conversation.
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-6 pt-10">
          <a
            href="mailto:hello@sasexperience.com"
            className="group inline-flex items-center justify-center gap-2 underline underline-offset-4
               text-lg text-white/70 transition-all duration-300
              hover:text-[#C6927B]"
          >
            hello@sasexperience.com
            <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>

          <a
            href="https://www.instagram.com/sas_experience"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center justify-center gap-2
              text-white/70 text-lg underline underline-offset-4
              transition-all duration-300 hover:text-[#C6927B]"
          >
         Instagram
            <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
        </div>
      </div>
    </section>
  );
}
