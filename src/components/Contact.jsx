import { useState, useEffect } from "react";
import { FaWhatsapp } from 'react-icons/fa'; // Import WhatsApp icon from react-icons

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
    destination: "",
  });

  const [quote, setQuote] = useState("Book your trip now!");
  const quotes = [
    "Ready to explore? Contact us today!",
    "Book your trip now!",
    "Let's make your dream vacation a reality!",
    "Reach out to us now!",
    "Your adventure starts here. Get in touch!",
  ];

  // Function to rotate quotes
  useEffect(() => {
    const quoteInterval = setInterval(() => {
      setQuote((prev) => {
        const currentIndex = quotes.indexOf(prev);
        const nextIndex = (currentIndex + 1) % quotes.length;
        return quotes[nextIndex];
      });
    }, 3000); // Change quote every 3 seconds

    return () => clearInterval(quoteInterval); // Cleanup interval on component unmount
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Prepare email body with form data
    const emailBody = `
      Name: ${formData.name}
      Email: ${formData.email}
      Phone: ${formData.phone}
      Destination: ${formData.destination}
      Message: ${formData.message}
    `;

    // Redirect to the email client with pre-filled content
    window.location.href = `mailto:sales.asiadestination@gmail.com?subject=Inquiry from ${formData.name}&body=${encodeURIComponent(emailBody)}`;
  };

  return (
    <div
      id="contact"
      className="bg-gradient-to-b from-blue-500 via-blue-600 to-blue-700 min-h-screen pt-24 p-8 relative"
    >
      {/* Section Title */}
      <section className="text-center mb-12 z-10 relative">
        <h1 className="text-4xl font-extrabold text-white mb-4">
          {quote} {/* Displaying dynamic quote */}
        </h1>
        <p className="text-lg font-bold text-white max-w-3xl mx-auto">
          Get in touch with us for any inquiries. We are happy to assist you at our offices in India and Singapore.
        </p>
      </section>

      {/* Flex Layout for Form and Offices */}
      <div className="flex flex-col lg:flex-row gap-8 mb-16 z-10 relative">
        {/* Contact Form Section - Left Side */}
        <section className="w-full lg:w-1/2 bg-white p-6 rounded-lg shadow-xl z-10 relative mb-16">
          <h2 className="text-3xl font-bold text-center text-black-600 mb-6">
            {/* Static Title for Form */}
            Drop us a Message...
          </h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-gray-800 font-semibold mb-2">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full p-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-gray-800 font-semibold mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full p-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>

            <div>
              <label htmlFor="phone" className="block text-gray-800 font-semibold mb-2">
                Phone Number
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full p-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
 {/* Destination Dropdown */}
 <div>
              <label htmlFor="destination" className="block text-gray-800 font-semibold mb-2">
                Destination
              </label>
              <select
                id="destination"
                name="destination"
                value={formData.destination}
                onChange={handleChange}
                className="w-full p-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              >
                <option value="">Select Destination</option>
                <option value="Thailand">Thailand</option>
                <option value="Dubai">Dubai</option>
                <option value="Malaysia">Malaysia</option>
                <option value="Singapore">Singapore</option>
                <option value="Indonesia">Indonesia</option>
                <option value="Vietnam">Vietnam</option>
                <option value="Nepal">Nepal</option>
              </select>
            </div>
            <div>
              <label htmlFor="message" className="block text-gray-800 font-semibold mb-2">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                className="w-full p-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                rows="3"
                required
              />
            </div>

           

            <button
              type="submit"
              className="w-full bg-blue-600 text-white font-semibold py-3 rounded-lg hover:bg-blue-700 transition-colors duration-300"
            >
              Send Message
            </button>
          </form>
        </section>

        {/* Offices Section - Right Side */}
        <div className="flex flex-col w-full lg:w-1/2 space-y-8">
          {/* India Office Section */}
          <div className="p-8 bg-white rounded-lg shadow-lg text-center transform hover:scale-105 transition-all duration-300 ease-in-out relative z-10">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Asia Destination</h2>
            <h2 className="text-3xl font-semibold text-gray-800 mb-4">India Office</h2>
            <p className="text-gray-600 mb-2">Dadar, 400001, Mumbai</p>
            <p className="text-gray-600 mb-2">Phone: +91 9284144359</p>
            <p className="text-gray-600 mb-4">Email: sales.asiadestination@gmail.com</p>
          </div>

          {/* Singapore Office Section */}
          <div className="p-8 bg-white rounded-lg shadow-lg text-center transform hover:scale-105 transition-all duration-300 ease-in-out relative z-10">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Asia Destination</h2>
            <h2 className="text-3xl font-semibold text-gray-800 mb-4">Singapore Office</h2>
            <p className="text-gray-600 mb-2">456, Orchard Road, Singapore</p>
            <p className="text-gray-600 mb-2">Phone: +91 9284144359</p>
            <p className="text-gray-600 mb-4">Email: sales.asiadestination@gmail.com</p>
          </div>
        </div>
      </div>

      {/* WhatsApp Floating Icon */}
      
<a
  href="https://wa.me/+919284144359?text=Hi"
  target="_blank"
  rel="noopener noreferrer"
  className="fixed bottom-20 right-8 bg-green-500 p-4 rounded-full shadow-lg hover:scale-110 transition-transform duration-300 z-20"
>
  <FaWhatsapp className="text-white text-4xl" />
</a>

    </div>
  );
};

export default Contact;
