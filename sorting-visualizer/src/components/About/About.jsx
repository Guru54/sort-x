import BuiltWith from './BuiltWith';
import DeveloperCard from './DeveloperCard';
import AboutCTA from './AboutCTA';

const About = ({ refProp }) => {
  return (
    <section id="about" ref={refProp} className="min-h-screen bg-gray-900 text-white p-4">
      <div className="max-w-4xl mx-auto">
        {/* Title Section */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4 text-cyan-400">
            About Sorting Visualizer
          </h2>
          <div className="w-16 h-1 bg-cyan-500 mx-auto mb-6 rounded-full" />
          <p className="text-gray-300 max-w-2xl mx-auto">
            An interactive tool to visualize sorting algorithms with real-time animations and metrics.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <BuiltWith />
          {/* You can add more feature cards here if needed */}
        </div>

        {/* Developer Section */}
        <DeveloperCard />

        {/* CTA Section */}
        <AboutCTA />
      </div>
    </section>
  );
};

export default About;