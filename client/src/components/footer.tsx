import { Atom } from "lucide-react";

export default function Footer() {
  const gameLinks = [
    { label: "Features", href: "#features" },
    { label: "Screenshots", href: "#screenshots" },
    { label: "Download", href: "#download" },
    { label: "System Requirements", href: "#download" },
  ];

  const companyLinks = [
    { label: "About Us", href: "#about" },
    { label: "Contact", href: "#contact" },
    { label: "Careers", href: "#" },
    { label: "Press Kit", href: "#" },
  ];

  const socialLinks = [
    { label: "Twitter", icon: "🐦", href: "#" },
    { label: "Discord", icon: "💬", href: "#" },
    { label: "YouTube", icon: "📺", href: "#" },
    { label: "Reddit", icon: "🤖", href: "#" },
  ];

  const legalLinks = [
    { label: "Privacy Policy", href: "#" },
    { label: "Terms of Service", href: "#" },
    { label: "EULA", href: "#" },
  ];

  return (
    <footer className="bg-dark-space border-t border-electric-blue/20 py-12">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-r from-electric-blue to-electric-cyan rounded-lg flex items-center justify-center">
                <Atom className="text-white h-4 w-4" />
              </div>
              <div>
                <h3 className="font-bold text-white">Fusion Dynamics</h3>
                <p className="text-xs text-gray-400">Facilities LLC</p>
              </div>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Pioneering the future of clean energy through innovative simulation technology and educational gaming experiences.
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-white mb-4">Game</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              {gameLinks.map((link, index) => (
                <li key={index}>
                  <a href={link.href} className="hover:text-electric-blue transition-colors duration-300">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-white mb-4">Company</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              {companyLinks.map((link, index) => (
                <li key={index}>
                  <a href={link.href} className="hover:text-electric-blue transition-colors duration-300">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-white mb-4">Follow Us</h4>
            <div className="flex space-x-4 mb-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className="w-8 h-8 bg-electric-blue/20 rounded-lg flex items-center justify-center hover:bg-electric-blue hover:scale-110 transition-all duration-300"
                  title={social.label}
                >
                  <span className="text-sm">{social.icon}</span>
                </a>
              ))}
            </div>
            <p className="text-xs text-gray-400">
              Subscribe to our newsletter for updates and fusion energy insights.
            </p>
          </div>
        </div>

        <div className="border-t border-electric-blue/20 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm mb-4 md:mb-0">
            © 2024 Fusion Dynamics Facilities LLC. All rights reserved.
          </p>
          <div className="flex space-x-6 text-sm text-gray-400">
            {legalLinks.map((link, index) => (
              <a key={index} href={link.href} className="hover:text-electric-blue transition-colors duration-300">
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
