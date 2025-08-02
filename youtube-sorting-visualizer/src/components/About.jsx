import { FaReact, FaJs, FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import { SiTailwindcss } from 'react-icons/si';

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

        {/* Simple Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {/* Built With - Simplified */}
          <div className="bg-gray-800/50 p-6 rounded-xl border border-gray-700 transition hover:border-cyan-500">
            <h3 className="text-xl font-bold mb-4 text-cyan-400 flex items-center">
              <FaReact className="mr-2" />
              Built With
            </h3>
            
            <ul className="space-y-3">
              <li className="flex items-center">
                <FaReact className="text-cyan-400 mr-3" />
                <span>React.js</span>
              </li>
              <li className="flex items-center">
                <SiTailwindcss className="text-cyan-400 mr-3" />
                <span>Tailwind CSS</span>
              </li>
              <li className="flex items-center">
                <FaJs className="text-yellow-400 mr-3" />
                <span>JavaScript</span>
              </li>
            </ul>
          </div>
          
 
         
        </div>

        {/* Developer Section - Redesigned */}
        <div className="bg-gradient-to-r from-gray-800 to-gray-900 p-6 rounded-xl border border-gray-700 mb-12 transition-all duration-500 hover:scale-[1.02]">
          <div className="flex flex-col md:flex-row items-center">
            <div className="mb-4 md:mb-0 md:mr-6">
              <div className="bg-gradient-to-br from-cyan-500 to-purple-500 w-24 h-24 rounded-full flex items-center justify-center text-4xl">
                <span className="text-white">👨‍💻</span>
              </div>
            </div>
            
            <div className="text-center md:text-left">
              <h3 className="text-xl font-bold text-white mb-2">Gurudas Bhardwaj</h3>
              <p className="text-cyan-300 mb-3">Computer Science Student</p>
              <p className="text-gray-300 mb-4">
                Passionate about creating educational tools that make complex concepts easier to understand.
              </p>
              
              <div className="flex justify-center md:justify-start space-x-3">
                <a href="#" className="bg-gray-700 p-2 rounded-full hover:bg-cyan-600 transition duration-300">
                  <FaGithub />
                </a>
                <a href="#" className="bg-gray-700 p-2 rounded-full hover:bg-blue-600 transition duration-300">
                  <FaLinkedin />
                </a>
                <a href="#" className="bg-gray-700 p-2 rounded-full hover:bg-sky-500 transition duration-300">
                  <FaTwitter />
                </a>
              </div>
            </div>
          </div>
          
          <div className="mt-6 pt-4 border-t border-gray-700 text-center">
            <p className="text-gray-400 italic">
              "Learning algorithms should be visual and intuitive"
            </p>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <p className="mt-6 text-gray-400 text-sm">
             🛠️ Built with ❤️ by Gurudas Bhardwaj • All rights reserved © 2025
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;