import { Instagram, Twitter, MessageCircle, Inbox, Mail } from "lucide-react";

export default function Footer() {
  const socials = [
    {
      name: "Instagram",
      href: "https://www.instagram.com/sas_experience",
      icon: Instagram,
    },
    {
      name: "Twitter",
      href: "https://twitter.com/sas_experience",
      icon: Twitter,
    },
    {
      name: "Mail",
      href: "mailto:hello@sasexperience.com",
      icon: Mail,
    },
  ];

  return (
    <footer className="max-w-7xl mx-auto px-6 py-10">
      <div className="flex justify-center gap-8">
        {socials.map((social) => {
          const Icon = social.icon;

          return (
            <a
              key={social.name}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Go to ${social.name}`}
              className="relative flex items-center justify-center
                transition-transform duration-300 hover:-translate-y-2"
            >
              <svg
                className="w-14 h-16"
                viewBox="0 0 40 46"
                fill="none"
                stroke="#77584b"
                strokeWidth="2"
              >
                <polygon points="20,1 39,12 39,34 20,45 1,34 1,12" />
              </svg>

              <Icon className="absolute w-6 h-6 text-primary" />
            </a>
          );
        })}
      </div>
    </footer>
  );
}
