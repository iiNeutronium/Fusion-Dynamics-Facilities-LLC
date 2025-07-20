import { Atom, TrendingUp, Settings, Shield, Users, GraduationCap } from "lucide-react";

export default function FeaturesSection() {
  const features = [
    {
      icon: Atom,
      title: "Advanced Reactor Physics",
      description: "Realistic fusion plasma simulations with accurate magnetic confinement models and thermal dynamics.",
      gradient: "from-electric-blue to-electric-cyan",
    },
    {
      icon: TrendingUp,
      title: "Real-time Analytics",
      description: "Monitor reactor performance with comprehensive dashboards and predictive maintenance systems.",
      gradient: "from-electric-cyan to-electric-purple",
    },
    {
      icon: Settings,
      title: "Modular Design",
      description: "Build and customize your reactor with interchangeable components and upgrade systems.",
      gradient: "from-electric-purple to-electric-blue",
    },
    {
      icon: Shield,
      title: "Safety Protocols",
      description: "Implement advanced safety measures and emergency response systems for reactor stability.",
      gradient: "from-electric-blue to-electric-cyan",
    },
    {
      icon: Users,
      title: "Multiplayer Mode",
      description: "Collaborate with other researchers or compete in reactor efficiency challenges.",
      gradient: "from-electric-cyan to-electric-purple",
    },
    {
      icon: GraduationCap,
      title: "Educational Mode",
      description: "Learn fusion physics through interactive tutorials and guided research scenarios.",
      gradient: "from-electric-purple to-electric-blue",
    },
  ];

  return (
    <section id="features" className="py-20 bg-gradient-to-b from-dark-space to-space-gray">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-electric-blue to-electric-cyan bg-clip-text text-transparent">
            Game Features
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Discover the cutting-edge features that make Fusion Dynamics the ultimate fusion reactor simulation experience.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <div
                key={index}
                className="bg-space-gray/50 backdrop-blur-sm border border-electric-blue/20 rounded-xl p-6 hover:border-electric-blue/60 hover:shadow-lg hover:shadow-electric-blue/20 transform hover:scale-105 transition-all duration-300"
              >
                <div className={`w-12 h-12 bg-gradient-to-r ${feature.gradient} rounded-lg flex items-center justify-center mb-4`}>
                  <IconComponent className="text-white h-6 w-6" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-electric-cyan">{feature.title}</h3>
                <p className="text-gray-300 leading-relaxed">{feature.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
