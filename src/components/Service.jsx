import { motion } from "framer-motion";

const servicesData = [
  "MICE (Meeting, Incentive, Conferences & Events)",
  "Leisure Groups",
  "Group Series",
  "Student Groups (Educational trip)",
  "Events, Award Function, R&R & Gala Dinners",
  "FIT Tours",
  "Special Honeymoon tours",
  "Family Oriented tours",
  "Senior Citizen tours with special care",
  "Luxury FIT tours",
  "Limousine & luxury vehicles",
  "Pvt Yacht & Cruises",
  "Hotel Accommodations",
  "Event setup for groups",
  "Transportation & Guide services",
];

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      duration: 0.5,
    },
  },
};

const itemVariants = {
  hidden: { y: 50, opacity: 0 },
  show: { y: 0, opacity: 1, transition: { type: "spring", stiffness: 100 } },
};

const Services = () => {
  return (
    <div
      id="services"
      className="relative min-h-screen flex flex-col justify-center items-center bg-gradient-to-b from-blue-500 via-blue-600 to-blue-800 p-6 text-white"
    >
      {/* Section Title */}
      <motion.section
        className="text-center mb-12"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <h1 className="text-5xl font-extrabold text-white tracking-wide mb-4">
          Our Services In Each Destination
        </h1>
        <p className="text-lg font-bold text-white max-w-3xl mx-auto">
          Explore our wide range of services designed to make your journey unforgettable. From luxury tours to educational trips, we cater to all your travel needs.
        </p>
      </motion.section>

      {/* Services Cards */}
      <motion.section
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        variants={containerVariants}
        initial="hidden"
        animate="show"
      >
        {servicesData.map((service, index) => (
          <motion.div
            key={index}
            className="relative p-6 bg-white rounded-lg shadow-lg text-center transform transition-all duration-300 ease-in-out hover:cursor-pointer"
            variants={itemVariants}
            whileHover={{
              scale: 1.1,
              rotate: 2,
              boxShadow: "0px 15px 30px rgba(0, 0, 255, 0.5) " ,
            }}
          >
            {/* Inner Content with hover animation */}
            <motion.div
              className="relative h-full flex items-center justify-center"
              whileHover={{ scale: 1.05 }}
            >
              <p className="text-lg font-semibold text-gray-800">
                {service}
              </p>
            </motion.div>
          </motion.div>
        ))}
      </motion.section>

      {/* Animated Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
        <motion.div
          className="bg-blue-300 rounded-full absolute w-40 h-40 opacity-20"
          style={{ top: "20%", left: "10%" }}
          animate={{
            y: [0, 20, -20, 0],
            x: [0, 20, -20, 0],
          }}
          transition={{
            repeat: Infinity,
            duration: 6,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="bg-blue-400 rounded-full absolute w-56 h-56 opacity-20"
          style={{ top: "60%", left: "70%" }}
          animate={{
            y: [0, -20, 20, 0],
            x: [0, -20, 20, 0],
          }}
          transition={{
            repeat: Infinity,
            duration: 8,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="bg-blue-200 rounded-full absolute w-24 h-24 opacity-20"
          style={{ top: "80%", left: "30%" }}
          animate={{
            y: [0, 30, -30, 0],
            x: [0, -10, 10, 0],
          }}
          transition={{
            repeat: Infinity,
            duration: 5,
            ease: "easeInOut",
          }}
        />
      </div>
    </div>
  );
};

export default Services;
