function Head() {
  return (
    <div className="navbar mt-3  mb-20 sticky top-0">
      <nav className="bg-[#38211E] p-4 shadow-lg ">
        <div className="flex justify-between items-center max-w-7xl mx-auto ">
          <h1 className="text-white text-2xl font-bold">Caffeine Corner</h1>
          <ul className="flex gap-6">
            <li>
              <a href="#home" className="text-white hover:text-blue-200">
                Home
              </a>
            </li>
            <li>
              <a href="#menu" className="text-white hover:text-blue-200">
                Menu
              </a>
            </li>
            <li>
              <a href="#about" className="text-white hover:text-blue-200">
                About
              </a>
            </li>
            <li>
              <a href="#contact" className="text-white hover:text-blue-200">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default Head;
