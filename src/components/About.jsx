import { motion } from 'framer-motion';
import CountUp from 'react-countup';

const About = () => {
  return (
    <div
      id="about"
      className="relative min-h-screen flex flex-col justify-center bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600 p-6 text-white pt-14" // Added blue gradient background
    >
      {/* Section Title */}
      <section className="text-center mb-12">
        <h1 className="text-5xl font-extrabold text-white tracking-wide mb-4">
          About Asia Destination
        </h1>
        <p className="text-xl font-semibold max-w-3xl mx-auto text-gray-1000">
          At Asia Destination, we provide unforgettable travel experiences across the vibrant and diverse countries of Asia. Founded in 2018, we have been committed to offering tailored travel packages, guiding travelers through the rich cultures, scenic landscapes, and unique adventures this region has to offer.
        </p>
      </section>

      {/* Mission and Vision Cards */}
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
        <motion.div
          className="p-8 bg-white shadow-xl rounded-lg hover:scale-105 transform transition-all duration-300 ease-in-out"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <h3 className="text-3xl font-bold text-gray-800">Mission</h3>
          <p className="mt-4 font-semibold text-gray-600">
            To provide exceptional travel experiences and create lasting memories for every traveler by offering personalized and authentic Asian adventures.
          </p>
        </motion.div>

        <motion.div
          className="p-8 bg-white shadow-xl rounded-lg hover:scale-105 transform transition-all duration-300 ease-in-out"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2 }}
        >
          <h3 className="text-3xl font-bold text-gray-800 ">Vision</h3>
          <p className="mt-4 font-semibold text-gray-600">
            To be the leading travel agency for Asian tourism, known for quality service, innovation, and enriching experiences for our clients.
          </p>
        </motion.div>

        <motion.div
          className="p-8 bg-white shadow-xl rounded-lg hover:scale-105 transform transition-all duration-300 ease-in-out"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
        >
          <h3 className="text-3xl font-bold text-gray-800">Our Promise</h3>
          <p className="mt-4 font-semibold text-gray-600">
            We promise to provide a seamless and memorable experience with every journey, ensuring that our travelers return with unforgettable moments and cherished memories.
          </p>
        </motion.div>
      </section>

      {/* Stats Cards with Animation */}
      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <motion.div
          className="p-8 bg-white shadow-xl rounded-lg text-center hover:bg-gray-100 hover:scale-105 transform transition-all duration-300 ease-in-out" // Added hover effect here
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <h3 className="text-3xl font-semibold text-gray-800">Years of Expertise</h3>
          <p className="mt-4 text-4xl font-bold text-gray-600">
            <CountUp start={0} end={7} duration={2} suffix="+" />
          </p>
        </motion.div>

        <motion.div
          className="p-8 bg-white shadow-xl rounded-lg text-center hover:bg-gray-100 hover:scale-105 transform transition-all duration-300 ease-in-out" // Added hover effect here
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
        >
          <h3 className="text-3xl font-semibold text-gray-800">Happy Clients</h3>
          <p className="mt-4 text-4xl font-bold text-gray-600">
            <CountUp start={0} end={100000} duration={2} separator="," suffix="+" />
          </p>
        </motion.div>

        <motion.div
          className="p-8 bg-white shadow-xl rounded-lg text-center hover:bg-gray-100 hover:scale-105 transform transition-all duration-300 ease-in-out" // Added hover effect here
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2 }}
        >
          <h3 className="text-3xl font-semibold text-gray-800">Partners</h3>
          <p className="mt-4 text-4xl font-bold text-gray-600">
            <CountUp start={0} end={1000} duration={2} separator="," suffix="+" />
          </p>
        </motion.div>
      </section>
    </div>
  );
};

export default About;
