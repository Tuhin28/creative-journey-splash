import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const Landing = () => {
  const navigate = useNavigate();

  return (
    <div className="h-screen w-screen flex overflow-hidden">
      {/* Left side - Image */}
      <motion.div 
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        className="w-1/2 h-full relative"
      >
        <img
          src="/lovable-uploads/c89c229d-4bfc-4750-aaa3-a1f29cf5d482.png"
          alt="Profile"
          className="w-full h-full object-cover"
        />
      </motion.div>

      {/* Right side - Content */}
      <motion.div 
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        className="w-1/2 flex items-center justify-center p-8"
      >
        <div className="max-w-xl">
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="text-sm uppercase tracking-wider text-gray-500 mb-4 block"
          >
            WELCOME TO MY WEBSITE
          </motion.span>
          
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="text-4xl md:text-5xl font-bold text-gray-900 mb-6"
          >
            Hello, I am <span className="text-yellow-500">Tuhin Bhattacharya</span> currently based in New York city.
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7, duration: 0.8 }}
            className="text-lg text-gray-600 mb-8"
          >
            Passionate about creating innovative solutions and bringing ideas to life through code. I specialize in web development and design, constantly pushing the boundaries of what's possible in the digital realm.
          </motion.p>
          
          <motion.button
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.9, duration: 0.5 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => navigate("/about")}
            className="px-8 py-3 border-2 border-gray-900 text-gray-900 rounded-full font-semibold hover:bg-gray-900 hover:text-white transition-all"
          >
            GET STARTED
          </motion.button>
        </div>
      </motion.div>
    </div>
  );
};

export default Landing;