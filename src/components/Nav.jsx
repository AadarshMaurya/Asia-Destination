import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion"; // Import AnimatePresence for smooth exit animations

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Function to close the menu when a link is clicked
  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <nav className="bg-black bg-opacity-50 text-white fixed w-full z-50 shadow-lg">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo and Text */}
          <div className="flex-shrink-0 flex items-center">
          <a href="#home">  <img
              className="w-40 h-10 mr-2" // Adjust logo size here
              src="./assets/Images/asiadestinationlogo.webp"
              alt="Asia Destination Logo"
            /></a>
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
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="lg:hidden fixed inset-0 bg-black bg-opacity-50 backdrop-blur-lg z-40"
            initial={{ opacity: 0 }} // Start with 0 opacity
            animate={{ opacity: 1 }} // Fade in
            exit={{ opacity: 0 }} // Fade out
            transition={{ duration: 0.3 }} // Transition duration
          >
            <motion.div
              className="absolute top-0 right-0 w-64 h-full bg-black bg-opacity-30 p-4" // Reduced opacity for transparency
              initial={{ x: "100%" }} // Start from the right
              animate={{ x: 0 }} // Slide to the left (into view)
              exit={{ x: "100%" }} // Slide out to the right (when closed)
              transition={{ duration: 0.3 }} // Transition duration for the slide
            >
              <button
                onClick={closeMenu}
                className="absolute top-4 right-4 text-white hover:text-gray-400 focus:outline-none"
              >
                <svg
                  className="h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
              <div className="mt-12 space-y-4">
                <a
                  href="#home"
                  className="block px-3 py-2 text-white font-medium hover:bg-gray-700 hover:bg-opacity-50"
                  onClick={closeMenu}
                >
                  Home
                </a>
                <a
                  href="#about"
                  className="block px-3 py-2 text-white font-medium hover:bg-gray-700 hover:bg-opacity-50"
                  onClick={closeMenu}
                >
                  About
                </a>
                <a
                  href="#destinations"
                  className="block px-3 py-2 text-white font-medium hover:bg-gray-700 hover:bg-opacity-50"
                  onClick={closeMenu}
                >
                  Destinations
                </a>
                <a
                  href="#services"
                  className="block px-3 py-2 text-white font-medium hover:bg-gray-700 hover:bg-opacity-50"
                  onClick={closeMenu}
                >
                  Services
                </a>
                <a
                  href="#contact"
                  className="block px-3 py-2 text-white font-medium hover:bg-gray-700 hover:bg-opacity-50"
                  onClick={closeMenu}
                >
                  Contact
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;