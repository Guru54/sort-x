import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';

export default function DeveloperCard() {
  return (
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
            <a
              href="https://github.com/Guru54"
              className="bg-gray-700 p-2 rounded-full hover:bg-cyan-600 transition duration-300"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Visit my GitHub profile"
            >
              <FaGithub />
            </a>
            <a
              href="https://www.linkedin.com/in/gurudas-bhardwaj-5a428b277"
              className="bg-gray-700 p-2 rounded-full hover:bg-blue-600 transition duration-300"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Visit my LinkedIn profile"
            >
              <FaLinkedin />
            </a>
            <a
              href="#"
              className="bg-gray-700 p-2 rounded-full hover:bg-sky-500 transition duration-300"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Visit my Twitter profile"
            >
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
  );
}
