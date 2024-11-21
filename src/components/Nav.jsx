import { useState } from "react";
import { motion } from "framer-motion"; // Import framer-motion for smooth animations

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Function to close the menu when a link is clicked
  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <nav className="bg-black bg-opacity-50 text-white fixed w-full z-50 shadow-lg">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-14">
          {/* Logo */}
          {/* <div className="flex-shrink-0">
            <a href="#home" className="text-2xl font-bold">Asia Destination</a>
          </div> */}
             <div className="flex-shrink-0 ml-4">
            <a href="#home" className="text-3xl font-bold italic ">
              Asia Destination
            </a>
          </div>

          {/* Menu Toggle for Mobile */}
          <div className="block lg:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="text-gray-400 hover:text-white focus:outline-none"
            >
              <svg
                className="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>

          {/* Links - Desktop View */}
          <div className="hidden lg:flex lg:items-center lg:space-x-6">
            <a
              href="#home"
              className="block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-700 hover:bg-opacity-50"
            >
              Home
            </a>
            <a
              href="#about"
              className="block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-700 hover:bg-opacity-50"
            >
              About
            </a>
            <a
              href="#destinations"
              className="block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-700 hover:bg-opacity-50"
            >
              Destinations
            </a>
            <a
              href="#services"
              className="block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-700 hover:bg-opacity-50"
            >
              Services
            </a>
            <a
              href="#contact"
              className="block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-700 hover:bg-opacity-50"
            >
              Contact
            </a>
          </div>
        </div>
      </div>

      {/* Mobile View Menu (when clicked) */}
      {isOpen && (
        <motion.div
          className="lg:hidden absolute top-0 right-0 w-1/3 bg-black bg-opacity-80 backdrop-blur-lg z-40 p-4 rounded-l-lg"
          initial={{ x: "100%" }} // Start from the right
          animate={{ x: 0 }} // Slide to the left (into view)
          exit={{ x: "100%" }} // Slide out to the right (when closed)
          transition={{ duration: 0.5 }} // Transition duration for the slide
        >
          <a
            href="#home"
            className="block px-3 py-2 text-white font-medium hover:bg-gray-700 hover:bg-opacity-50"
            onClick={closeMenu} // Close the menu when clicked
          >
            Home
          </a>
          <a
            href="#about"
            className="block px-3 py-2 text-white font-medium hover:bg-gray-700 hover:bg-opacity-50"
            onClick={closeMenu} // Close the menu when clicked
          >
            About
          </a>
          <a
            href="#destinations"
            className="block px-3 py-2 text-white font-medium hover:bg-gray-700 hover:bg-opacity-50"
            onClick={closeMenu} // Close the menu when clicked
          >
            Destinations
          </a>
          <a
            href="#services"
            className="block px-3 py-2 text-white font-medium hover:bg-gray-700 hover:bg-opacity-50"
            onClick={closeMenu} // Close the menu when clicked
          >
            Services
          </a>
          <a
            href="#contact"
            className="block px-3 py-2 text-white font-medium hover:bg-gray-700 hover:bg-opacity-50"
            onClick={closeMenu} // Close the menu when clicked
          >
            Contact
          </a>
        </motion.div>
      )}
    </nav>
  );
};

export default Navbar;
