/ --- Placeholder Components (as defined in the original import) ---
// These are simple placeholders for components not detailed in the Figma files.

const Navigation = () => (
  <nav className="bg-black/30 backdrop-blur-md sticky top-0 z-50">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex items-center justify-between h-16">
        <div className="flex-shrink-0">
          <span className="text-white text-2xl font-bold">Exo-Explorer</span>
        </div>
        <div className="hidden md:block">
          <div className="ml-10 flex items-baseline space-x-4">
            <a href="#discoveries" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Discoveries</a>
            <a href="#methods" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Methods</a>
            <a href="#timeline" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Timeline</a>
            <a href="#about" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">About</a>
          </div>
        </div>
      </div>
    </div>
  </nav>
);

const DiscoveryMethods = () => (
  <section id="methods" className="py-20 px-6 text-center text-white bg-black">
    <h2 className="text-4xl font-bold mb-4">Discovery Methods</h2>
    <p className="max-w-2xl mx-auto text-gray-400">Placeholder section for exoplanet discovery methods like Transit and Radial Velocity.</p>
  </section>
);

const InteractiveTimeline = () => (
  <section id="timeline" className="py-20 px-6 text-center text-white bg-gray-900">
    <h2 className="text-4xl font-bold mb-4">Interactive Timeline</h2>
    <p className="max-w-2xl mx-auto text-gray-400">Placeholder section for an interactive timeline of key discoveries.</p>
  </section>
);

const Footer = () => (
  <footer className="bg-black border-t border-gray-800">
    <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8 text-center text-gray-500">
      <p>&copy; 2025 Exo-Explorer. All rights reserved.</p>
    </div>
  </footer>
);


// --- New Hero Component (from first Figma file) ---

const Hero = () => {
  return (
    <section className="relative h-screen flex items-center justify-center text-center text-white">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center z-0"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1543722530-032cb68b2372?q=80&w=2070&auto=format&fit=crop')" }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black opacity-50"></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 px-6">
        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight" style={{textShadow: '2px 2px 8px rgba(0,0,0,0.7)'}}>
          Unveiling New Worlds
        </h1>
        <p className="mt-4 max-w-2xl mx-auto text-lg md:text-xl text-gray-200" style={{textShadow: '1px 1px 4px rgba(0,0,0,0.7)'}}>
          Journey through the cosmos and explore the thousands of confirmed exoplanets orbiting distant stars.
        </p>
        <a 
          href="#discoveries"
          className="mt-8 inline-block bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-full text-lg transition duration-300 ease-in-out transform hover:scale-105"
        >
          Explore Discoveries
        </a>
      </div>
    </section>
  );
};


// --- New FeaturedPlanets Component (from second Figma file) ---

const planetData = [
  {
    name: 'Kepler-186f',
    image: 'https://images.unsplash.com/photo-1590382315989-158a145b44fe?q=80&w=1974&auto=format&fit=crop',
    description: 'The first Earth-sized planet discovered in the habitable zone of another star.',
    distance: '500 light-years',
    type: 'Terrestrial',
    year: '2014',
  },
  {
    name: 'TRAPPIST-1e',
    image: 'https://images.unsplash.com/photo-1564053489982-6439f05046b2?q=80&w=1974&auto=format&fit=crop',
    description: 'One of seven Earth-sized planets in a system that could potentially harbor liquid water.',
    distance: '40 light-years',
    type: 'Terrestrial',
    year: '2017',
  },
  {
    name: 'Proxima Centauri b',
    image: 'https://images.unsplash.com/photo-1622045492331-b371101979bb?q=80&w=2070&auto=format&fit=crop',
    description: 'Our closest known exoplanet, orbiting the star nearest to our Sun in its habitable zone.',
    distance: '4.2 light-years',
    type: 'Super-Earth',
    year: '2016',
  },
];

const PlanetCard = ({ name, image, description, distance, type, year }) => (
  <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-2xl overflow-hidden transform hover:-translate-y-2 transition-transform duration-300">
    <img src={image} alt={name} className="w-full h-48 object-cover" />
    <div className="p-6">
      <h3 className="text-2xl font-bold text-white mb-2">{name}</h3>
      <p className="text-gray-400 mb-4 h-20">{description}</p>
      <div className="flex justify-between items-center text-sm border-t border-gray-700 pt-4">
        <div className="text-left">
          <span className="block text-gray-500">Distance</span>
          <span className="font-semibold text-white">{distance}</span>
        </div>
        <div className="text-center">
          <span className="block text-gray-500">Type</span>
          <span className="font-semibold text-white">{type}</span>
        </div>
        <div className="text-right">
          <span className="block text-gray-500">Discovered</span>
          <span className="font-semibold text-white">{year}</span>
        </div>
      </div>
    </div>
  </div>
);

const FeaturedPlanets = () => {
  return (
    <div className="py-20 px-6 bg-black">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
          Explore Our Featured Planets
        </h2>
        <p className="text-lg text-gray-400 max-w-3xl mx-auto mb-12">
          Discover some of the most fascinating exoplanets found to date, from Earth-like worlds to mysterious gas giants.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {planetData.map(planet => <PlanetCard key={planet.name} {...planet} />)}
        </div>
      </div>
    </div>
  );
};


// --- Main App Component (integrating everything) ---

export default function App() {
  return (
    <div className="min-h-screen bg-black">
      <Navigation />
      <main>
        {/* This Hero component is from the first Figma file */}
        <Hero />
        
        {/* This section now contains the FeaturedPlanets component from the second Figma file */}
        <section id="discoveries">
          <FeaturedPlanets />
        </section>
        
        {/* These are the placeholder components */}
        <DiscoveryMethods />
        <InteractiveTimeline />
        
        {/* This is the original "About" section from your provided code */}
        <section id="about" className="py-20 px-6 bg-gradient-to-b from-black to-gray-900">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl mb-8 bg-gradient-to-r from-blue-400 to-green-400 bg-clip-text text-transparent">
              About Exoplanet Discovery
            </h2>
            <div className="text-lg text-gray-300 leading-relaxed space-y-6">
              <p>
                The search for exoplanets represents one of humanity's most profound scientific endeavors. 
                Since the first confirmed detection in 1995, we've discovered thousands of worlds that 
                challenge our understanding of planetary formation and the conditions necessary for life.
              </p>
              <p>
                Each discovery brings us closer to answering the fundamental question: Are we alone in the universe? 
                From super-Earths to hot Jupiters, from planets in extreme orbits to those in the habitable zones 
                of their stars, the diversity of exoplanets continues to astonish scientists and inspire new 
                generations of astronomers.
              </p>
              <p>
                With next-generation telescopes like the James Webb Space Telescope and upcoming missions, 
                we're entering a golden age of exoplanet science where we can not only detect these distant 
                worlds but also analyze their atmospheres and search for signs of life.
              </p>
            </div>

            <div className="mt-8 inline-flex items-center gap-2 px-4 py-2 bg-blue-500/10 border border-blue-500/20 rounded-full">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
              <span className="text-blue-400 text-sm">Live data is taken from NASA</span>
            </div>
            
            <div className="mt-12 grid md:grid-cols-3 gap-8">
              <div className="p-6 bg-gray-800/30 rounded-xl border border-gray-700">
                <h3 className="text-xl text-blue-400 mb-3">Current Missions</h3>
                <p className="text-gray-400">TESS, James Webb, and ground-based surveys continue to discover new worlds</p>
              </div>
              <div className="p-6 bg-gray-800/30 rounded-xl border border-gray-700">
                <h3 className="text-xl text-green-400 mb-3">Future Goals</h3>
                <p className="text-gray-400">Direct imaging of Earth-like planets and biosignature detection</p>
              </div>
              <div className="p-6 bg-gray-800/30 rounded-xl border border-gray-700">
                <h3 className="text-xl text-purple-400 mb-3">Technology</h3>
                <p className="text-gray-400">Advanced coronagraphs and interferometry for unprecedented observations</p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
