export default function Navbar() {
  return (
    <nav className="flex justify-between items-center px-8 py-4 border-b bg-green-700">
      <h1 className="text-2xl font-bold text-white">GigNest</h1>

      <div className="space-x-6 hidden md:flex">
        <a href="#how" className="text-white hover:text-gray-300">
          How it works
        </a>
        <a href="#categories" className="text-white hover:text-gray-300">
          Categories
        </a>
      </div>

      <div className="space-x-3">
        <a href="#become-developer" className="text-white hover:text-green-300">
          Become a Developer
        </a>
        <button className="px-4 py-2 border rounded-lg text-white border-white hover:bg-white hover:text-green-700 duration-300">
          Login
        </button>
        <button className="px-4 py-2 bg-white text-green-700 rounded-lg hover:bg-gray-300 duration-300">
          Sign Up
        </button>
      </div>
    </nav>
  );
}
