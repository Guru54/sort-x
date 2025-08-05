import { FaReact, FaJs } from 'react-icons/fa';
import { SiTailwindcss } from 'react-icons/si';

export default function BuiltWith() {
  return (
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
  );
}