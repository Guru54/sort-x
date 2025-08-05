export default function NavLinks({ aboutRef, open }) {
  return (
    <div className={`nav-links${open ? " open" : ""}`}>
      <button
        onClick={() => {
          aboutRef.current?.scrollIntoView({ behavior: 'smooth' });
        }}
        className="nav-link"
      >
        About
      </button>
      <button className="nav-link">
        Algorithms
      </button>
      <a 
        href="https://github.com/Guru54/sort-x" 
        target="_blank"
        rel="noopener noreferrer"
        className="bg-red-600 px-4 py-1 rounded-full hover:bg-red-700"
        style={{ color: "#fff" }}
      >
        Github
      </a>
    </div>
  );
}