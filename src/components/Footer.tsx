import { getContent } from "@/utils/contentLoader";
import { Facebook, Linkedin, Twitter } from "lucide-react";

const iconMap = {
  Linkedin: Linkedin,
  Twitter: Twitter,
  Facebook: Facebook,
};

export const Footer = () => {
  const { footer, siteInfo } = getContent();

  return (
    <footer className="bg-primary text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">{siteInfo.name}</h3>
            <p className="text-gray-300">{footer.description}</p>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {footer.quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    {link.text}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">Connect With Us</h3>
            <div className="flex space-x-4">
              {footer.socialLinks.map((link, index) => {
                const Icon = iconMap[link.icon as keyof typeof iconMap];
                return (
                  <a
                    key={index}
                    href={link.url}
                    className="text-gray-300 hover:text-white transition-colors"
                    aria-label={link.platform}
                  >
                    <Icon size={24} />
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p className="text-gray-300">{footer.copyright}</p>
        </div>
      </div>
    </footer>
  );
};