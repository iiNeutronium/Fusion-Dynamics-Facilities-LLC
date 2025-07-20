export default function ScreenshotsSection() {
  const screenshots = [
    {
      src: "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
      alt: "Reactor Control Interface",
      title: "Reactor Control Interface",
      description: "Advanced control systems",
    },
    {
      src: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
      alt: "Fusion Chamber Design",
      title: "Fusion Chamber Design",
      description: "Magnetic confinement systems",
    },
    {
      src: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
      alt: "Power Generation Monitoring",
      title: "Power Generation Monitoring",
      description: "Real-time energy output",
    },
    {
      src: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
      alt: "Research Laboratory",
      title: "Research Laboratory",
      description: "Collaborative development",
    },
    {
      src: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
      alt: "Plasma Containment",
      title: "Plasma Containment",
      description: "Magnetic field dynamics",
    },
    {
      src: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
      alt: "Analytics Dashboard",
      title: "Analytics Dashboard",
      description: "Performance metrics",
    },
  ];

  return (
    <section id="screenshots" className="py-20 bg-dark-space">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-electric-cyan to-electric-purple bg-clip-text text-transparent">
            Game Screenshots
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Get a glimpse of the stunning visuals and immersive gameplay experience.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {screenshots.map((screenshot, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-xl border border-electric-blue/20 hover:border-electric-blue/60 transition-all duration-300"
            >
              <img
                src={screenshot.src}
                alt={screenshot.alt}
                className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-dark-space/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-4 left-4">
                  <h3 className="text-lg font-semibold text-white">{screenshot.title}</h3>
                  <p className="text-sm text-gray-300">{screenshot.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
