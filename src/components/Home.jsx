import { useEffect, useState } from "react";

const destinations = [
  { name: "Thailand", video: "./assets/Thailand.mp4" },
  { name: "Dubai", video: "./assets/Dubai.mp4" },
  { name: "Malaysia", video: "./assets/Malaysia.mp4" },
  { name: "Singapore", video: "./assets/Singapore.mp4" },
];

const HomePage = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState(""); // Animated text for the current destination
  const [charIndex, setCharIndex] = useState(0); // Current character index for the animation

  useEffect(() => {
    // Change to the next destination every 3 seconds
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % destinations.length);
      setCharIndex(0); // Reset the character index for the new destination
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    // Reset text animation for the new destination
    const text = destinations[currentIndex].name;

    if (charIndex < text.length) {
      const timeout = setTimeout(() => {
        setDisplayedText(text.slice(0, charIndex + 1)); // Update the text character by character
        setCharIndex((prevCharIndex) => prevCharIndex + 1);
      }, 100); // Animation speed: 100ms per character
      return () => clearTimeout(timeout);
    }
  }, [charIndex, currentIndex]);

  return (
    <div id="home" className="relative h-screen w-full overflow-hidden pt-16">
      {/* Video Background */}
      <video
        key={currentIndex}
        className="absolute top-0 left-0 h-full w-full object-cover"
        src={destinations[currentIndex].video}
        autoPlay
        loop
        muted
      ></video>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-40"></div>

      {/* Animated Text */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white">
        <h1 className="text-5xl font-extrabold tracking-wide animate-fadeIn">
          Travel With Us
        </h1>
        <h2 className="text-2xl font-medium mt-2">
          in <span className="animate-slideIn">{displayedText}</span>
        </h2>
      </div>

      {/* Know More Button */}
      <a  href = "#destinations" className="absolute  bottom-40 right-8  px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-500 to-blue-400 text-white font-semibold text-lg rounded-full shadow-lg hover:scale-105 transition-transform duration-300">
        Know More
      </a>
    </div>
  );
};

export default HomePage;
