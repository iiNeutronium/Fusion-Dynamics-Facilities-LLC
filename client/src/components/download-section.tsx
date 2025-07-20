import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";

export default function DownloadSection() {
  const platforms = [
    {
      name: "Windows",
      icon: "💻",
      requirements: "Windows 10/11, DirectX 12",
      color: "electric-blue",
    },
    {
      name: "macOS",
      icon: "🍎",
      requirements: "macOS 12+, Apple Silicon",
      color: "electric-cyan",
    },
    {
      name: "Linux",
      icon: "🐧",
      requirements: "Ubuntu 20.04+, Vulkan",
      color: "electric-purple",
    },
  ];

  return (
    <section id="download" className="py-20 bg-dark-space relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-electric-blue/10 to-electric-purple/10"></div>
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-electric-blue to-electric-purple bg-clip-text text-transparent">
            Download & Play
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Start your fusion energy journey today. Choose your platform and begin exploring the future of clean energy.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {platforms.map((platform, index) => (
            <div
              key={index}
              className={`bg-space-gray/50 backdrop-blur-sm border border-${platform.color}/30 rounded-xl p-8 text-center hover:border-${platform.color}/60 hover:shadow-lg hover:shadow-${platform.color}/20 transform hover:scale-105 transition-all duration-300`}
            >
              <div className="text-4xl mb-4">{platform.icon}</div>
              <h3 className="text-xl font-semibold mb-3 text-white">{platform.name}</h3>
              <p className="text-gray-400 mb-6">{platform.requirements}</p>
              <Button
                className={`w-full bg-${platform.color} text-white py-3 font-semibold hover:bg-${platform.color}/80 transition-colors duration-300`}
              >
                <Download className="mr-2 h-4 w-4" />
                Download
              </Button>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <div className="bg-space-gray/30 backdrop-blur-sm border border-electric-blue/20 rounded-xl p-6 max-w-2xl mx-auto">
            <h3 className="text-lg font-semibold text-electric-cyan mb-3">System Requirements</h3>
            <div className="grid md:grid-cols-2 gap-4 text-sm text-gray-300">
              <div>
                <strong className="text-white">Minimum:</strong><br />
                8GB RAM, GTX 1060 / RX 580<br />
                50GB Storage, DirectX 12
              </div>
              <div>
                <strong className="text-white">Recommended:</strong><br />
                16GB RAM, RTX 3070 / RX 6700 XT<br />
                50GB SSD, DirectX 12 Ultimate
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
