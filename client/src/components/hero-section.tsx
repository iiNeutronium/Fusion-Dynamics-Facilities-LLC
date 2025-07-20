import { Button } from "@/components/ui/button";
import { Play, Download, ChevronDown } from "lucide-react";

export default function HeroSection() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-dark-space via-space-gray to-dark-space"></div>
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-electric-blue rounded-full filter blur-3xl animate-pulse-glow"></div>
        <div className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-electric-cyan rounded-full filter blur-3xl animate-pulse-glow"></div>
        <div className="absolute top-1/2 right-1/3 w-32 h-32 bg-electric-purple rounded-full filter blur-2xl animate-float"></div>
      </div>

      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="animate-slide-up">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-electric-blue via-electric-cyan to-electric-purple bg-clip-text text-transparent leading-tight">
            Fusion Dynamics
          </h1>
          <h2 className="text-2xl md:text-3xl font-semibold mb-4 text-electric-cyan">
            Research and Power Generation
          </h2>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
            Experience the future of energy in this immersive fusion reactor simulation game. Build, manage, and optimize cutting-edge fusion technology.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              size="lg"
              className="bg-gradient-to-r from-electric-blue to-electric-cyan text-white px-8 py-4 font-semibold text-lg hover:shadow-lg hover:shadow-electric-blue/50 transform hover:scale-105 transition-all duration-300 animate-pulse-glow"
            >
              <Play className="mr-2 h-5 w-5" />
              Play Now
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-2 border-electric-blue text-electric-blue px-8 py-4 font-semibold text-lg hover:bg-electric-blue hover:text-white transform hover:scale-105 transition-all duration-300"
            >
              <Download className="mr-2 h-5 w-5" />
              Download Game
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-electric-cyan animate-bounce">
        <ChevronDown className="h-8 w-8" />
      </div>
    </section>
  );
}
