import { useState, useEffect } from "react";

const HoverCard = ({ destination }) => {
  const [currentImage, setCurrentImage] = useState(0);
  const [isHovering, setIsHovering] = useState(false);
  const [intervalId, setIntervalId] = useState(null); // Store interval ID to clear it later

  const startImageSwitching = () => {
    // Only start the image switching if not already in a hover state
    if (!isHovering) {
      setIsHovering(true);
      const id = setInterval(() => {
        setCurrentImage((prev) =>
          prev === destination.images.length - 1 ? 0 : prev + 1
        );
      }, 1000); // Image switches every 1.5 seconds
      setIntervalId(id); // Store the interval ID
    }
  };

  const stopImageSwitching = () => {
    clearInterval(intervalId); // Stop the interval
    setIsHovering(false); // Set hovering to false
    setCurrentImage(0); // Reset to the first image when hover ends
  };

  useEffect(() => {
    // Cleanup interval when component unmounts or hover ends
    return () => {
      if (intervalId) {
        clearInterval(intervalId);
      }
    };
  }, [intervalId]);

  return (
    <div
      className="bg-white rounded-lg shadow-md overflow-hidden transition-transform transform hover:scale-105"
      onMouseEnter={startImageSwitching}
      onMouseLeave={stopImageSwitching}
    >
      <div className="relative">
        <img
          src={destination.images[currentImage]}
          alt={destination.name}
          className="w-full h-80 object-cover transition-all duration-500 ease-in-out"
        />
        {/* Text overlay at the bottom of the image */}
        <div className="absolute bottom-0 left-0 w-full bg-black bg-opacity-50 text-white p-4">
          <h3 className="text-2xl font-semibold">{destination.name}</h3>
          <p className="mt-2">{destination.description}</p>
        </div>
      </div>
    </div>
  );
};

const Destination = () => {
  const destinations = [
    {
      name: "Thailand",
      description:
        "Known for its golden beaches, vibrant nightlife, and rich cultural heritage, Thailand is a tropical paradise. Explore ancient temples, indulge in delicious street food, and relax in luxurious resorts.",
      images: [
        "./assets/Images/thailand-1.jpg",
        "./assets/Images/thailand-2.jpg",
        "./assets/Images/thailand-3.jpg",
      ],
    },
    {
      name: "Dubai",
      description:
        "A city of futuristic skyscrapers, opulent shopping malls, and cultural landmarks, Dubai is a gateway to luxury and adventure. Experience desert safaris, iconic landmarks like the Burj Khalifa, and world-class entertainment.",
      images: [
        "./assets/Images/dubai-2.jpg",
        "./assets/Images/dubai-3.jpg",
        "./assets/Images/dubai-1.jpg",
      ],
    },
    {
      name: "Malaysia",
      description:
        "From bustling cities like Kuala Lumpur to serene rainforests and stunning islands, Malaysia is a diverse destination. Don’t miss the Petronas Towers, Cameron Highlands, and the beaches of Langkawi.",
      images: [
        "./assets/Images/malaysia-1.jpg",
        "./assets/Images/malaysia-2.jpg",
        "./assets/Images/malaysia-3.jpg",
      ],
    },
    {
      name: "Singapore",
      description:
        "Singapore offers a perfect blend of modernity and tradition. Visit the futuristic Gardens by the Bay, iconic Marina Bay Sands, and immerse yourself in the bustling streets of Chinatown.",
      images: [
        "./assets/Images/singapore-2.jpg",
        "./assets/Images/singapore-1.jpg",

        "./assets/Images/singapore-3.jpg",
      ],
    },
    {
      name: "Indonesia",
      description:
        "An archipelago with over 17,000 islands, Indonesia is famed for Bali’s beaches, Java’s volcanoes, and the untouched beauty of Raja Ampat. It's a haven for nature and adventure enthusiasts.",
      images: [
        "./assets/Images/indonesia-1.jpg",
        "./assets/Images/indonesia-2.jpg",
        "./assets/Images/indonesia-3.jpg",
      ],
    },
    {
      name: "Vietnam",
      description:
        "Vietnam is a land of stunning landscapes and deep history. Cruise through Ha Long Bay, explore the historic streets of Hanoi, and savor the local delicacies like pho and banh mi.",
      images: [
        "./assets/Images/vietnam-2.jpg",
        "./assets/Images/vietnam-1.jpg",

        "./assets/Images/vietnam-3.jpg",
      ],
    },
    {
      name: "Nepal",
      description:
        "Home to the majestic Himalayas, Nepal is a spiritual haven for trekkers and culture lovers. Visit the birthplace of Buddha, the bustling streets of Kathmandu, and embark on a journey to Everest Base Camp.",
      images: [
        "./assets/Images/nepal-1.jpg",
        "./assets/Images/nepal-2.jpg",
        "./assets/Images/nepal-3.jpg",
        
        
        
      ],
    },
  ];

  return (
    <div id="destinations" className="bg-gray-200 text-gray-800">
      {/* Header */}
      <header
        className="bg-gradient-to-r from-blue-600 via-blue-500 to-blue-400 text-white text-center py-10"
        style={{ paddingTop: "4rem" }} // Add padding to prevent overlap
      >
        <h1 className="text-4xl font-bold">Explore Our Destinations</h1>
        <p className="mt-4 font-semibold text-lg">
          Discover the world’s most fascinating places with us. From tropical
          beaches to cultural landmarks, we have something for everyone.
        </p>
      </header>

      {/* Destination Cards */}
      <section className="container mx-auto py-10 px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {destinations.map((destination, index) => (
          <HoverCard key={index} destination={destination} />
        ))}
      </section>
    </div>
  );
};

export default Destination;
