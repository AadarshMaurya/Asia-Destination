import { useEffect, useRef, useState } from "react";

const destinations = [
  { name: "Thailand", video: "./assets/Thailand.mp4" },
  { name: "Dubai", video: "./assets/Dubai.mp4" },
  { name: "Malaysia", video: "./assets/Malaysia.mp4" },
  { name: "Singapore", video: "./assets/Singapore.mp4" },
];

const HomePage = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const [charIndex, setCharIndex] = useState(0);
  const videoRef = useRef(null); // Reference to the video element

  useEffect(() => {
    // Change to the next destination every 3 seconds
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % destinations.length);
      setCharIndex(0); // Reset character index for the new destination
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    // Text animation for the current destination
    const text = destinations[currentIndex].name;

    if (charIndex < text.length) {
      const timeout = setTimeout(() => {
        setDisplayedText(text.slice(0, charIndex + 1));
        setCharIndex((prevCharIndex) => prevCharIndex + 1);
      }, 100); // Animation speed
      return () => clearTimeout(timeout);
    }
  }, [charIndex, currentIndex]);

  useEffect(() => {
    // Update video source dynamically without re-rendering
    const videoElement = videoRef.current;
    if (videoElement) {
      videoElement.src = destinations[currentIndex].video;
      videoElement.play().catch(() => console.log("Video playback blocked."));
    }
  }, [currentIndex]);

  return (
    <div id="home" className="relative h-screen w-full overflow-hidden pt-16">
      {/* Video Background */}
      <video
        ref={videoRef}
        className="absolute top-0 left-0 h-full w-full object-cover"
        autoPlay
        loop
        muted
        playsInline
        preload="metadata"
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
      <a
        href="#destinations"
        className="absolute bottom-40 right-8 px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-500 to-blue-400 text-white font-semibold text-lg rounded-full shadow-lg hover:scale-105 transition-transform duration-300"
      >
        Know More
      </a>
    </div>
  );
};

export default HomePage;
