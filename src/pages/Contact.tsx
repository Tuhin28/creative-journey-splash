import { motion } from "framer-motion";
import { Mail, Phone, MapPin } from "lucide-react";

const Contact = () => {
  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      content: "contact@example.com",
      link: "mailto:contact@example.com"
    },
    {
      icon: Phone,
      title: "Phone",
      content: "+1 234 567 890",
      link: "tel:+1234567890"
    },
    {
      icon: MapPin,
      title: "Location",
      content: "New York, NY",
      link: "https://maps.google.com"
    }
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="min-h-screen bg-gray-50 pt-24"
    >
      <div className="container mx-auto px-6">
        <h1 className="text-4xl font-bold text-center mb-12">Contact Me</h1>
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {contactInfo.map((info, index) => (
              <motion.a
                key={info.title}
                href={info.link}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                className="bg-white rounded-lg shadow-lg p-6 flex flex-col items-center text-center hover:shadow-xl transition-shadow"
              >
                <info.icon size={24} className="mb-4 text-gray-700" />
                <h2 className="text-xl font-bold mb-2">{info.title}</h2>
                <p className="text-gray-600">{info.content}</p>
              </motion.a>
            ))}
          </div>
          
          <motion.form
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="bg-white rounded-lg shadow-lg p-8"
            onSubmit={(e) => e.preventDefault()}
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <label className="block text-gray-700 mb-2">Name</label>
                <input
                  type="text"
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label className="block text-gray-700 mb-2">Email</label>
                <input
                  type="email"
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
                  placeholder="Your email"
                />
              </div>
            </div>
            <div className="mb-6">
              <label className="block text-gray-700 mb-2">Message</label>
              <textarea
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 h-32"
                placeholder="Your message"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-yellow-500 text-white py-2 px-4 rounded-lg hover:bg-yellow-600 transition-colors"
            >
              Send Message
            </button>
          </motion.form>
        </div>
      </div>
    </motion.div>
  );
};

export default Contact;