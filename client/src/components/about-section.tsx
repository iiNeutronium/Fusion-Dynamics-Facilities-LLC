import { Button } from "@/components/ui/button";

export default function AboutSection() {
  const stats = [
    { value: "50K+", label: "Active Players" },
    { value: "1M+", label: "Simulations Run" },
    { value: "99.7%", label: "Physics Accuracy" },
    { value: "12", label: "Industry Awards" },
  ];

  return (
    <section id="about" className="py-20 bg-gradient-to-b from-space-gray to-dark-space">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-electric-purple to-electric-cyan bg-clip-text text-transparent">
              About Fusion Dynamics Facilities LLC
            </h2>
            <p className="text-xl text-gray-300 mb-6 leading-relaxed">
              Leading the future of clean energy simulation and research through innovative gaming technology. Our mission is to make fusion energy accessible and understandable through immersive interactive experiences.
            </p>
            <p className="text-lg text-gray-400 mb-8 leading-relaxed">
              Founded by a team of nuclear physicists, software engineers, and game designers, we bridge the gap between cutting-edge science and engaging entertainment. Our simulation accurately models the complex physics of fusion reactions while maintaining an engaging gameplay experience.
            </p>

            <div className="grid grid-cols-2 gap-6 mb-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl font-bold text-electric-cyan mb-2">{stat.value}</div>
                  <div className="text-sm text-gray-400">{stat.label}</div>
                </div>
              ))}
            </div>

            <Button className="bg-gradient-to-r from-electric-purple to-electric-blue text-white px-8 py-3 font-semibold hover:shadow-lg hover:shadow-electric-purple/50 transform hover:scale-105 transition-all duration-300">
              Learn More About Us
            </Button>
          </div>

          <div className="relative">
            <div className="relative overflow-hidden rounded-2xl border border-electric-blue/30">
              <img
                src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600"
                alt="Fusion Dynamics Headquarters"
                className="w-full h-96 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-electric-blue/20 to-transparent"></div>
            </div>

            <div className="absolute -bottom-6 -right-6 bg-space-gray/90 backdrop-blur-sm border border-electric-cyan/30 rounded-xl p-6 max-w-sm">
              <h3 className="text-lg font-semibold text-electric-cyan mb-2">Our Mission</h3>
              <p className="text-sm text-gray-300">
                Advancing fusion energy understanding through immersive simulation technology and educational gaming experiences.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
