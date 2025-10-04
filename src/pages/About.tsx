import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Spotlight } from "@/components/ui/spotlight";
import { TypeAnimation } from "react-type-animation";
import { FaLinkedin, FaInstagram } from "react-icons/fa";
import { SplineScene } from "@/components/ui/splite";
import { useState } from "react";
import { Dialog, DialogContent } from "@/components/ui/dialog";

const About = () => {
  const [showAboutDialog, setShowAboutDialog] = useState(false);

  return (
    <div className="min-h-screen bg-white p-4 md:p-8 space-y-8 md:space-y-12">
      <Card className="w-full h-[400px] md:h-[500px] bg-gradient-to-br from-black via-gray-900 to-black relative overflow-hidden border-none shadow-2xl">
        <Spotlight
          className="-top-40 left-0 md:left-60 md:-top-20"
          fill="white"
        />

        <div className="flex flex-col md:flex-row h-full">
          <div className="flex-1 p-6 md:p-8 relative z-10 flex flex-col justify-center">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 animate-pulse">
              Hey, Tuhin here
            </h1>
            <div className="mt-4 text-lg md:text-xl text-neutral-300">
              <TypeAnimation
                sequence={[
                  "I'm a Data Analyst",
                  1000,
                  "I'm a Chemical Engineer",
                  1000,
                  "I'm a BI Developer",
                  1000,
                  "I'm a Problem Solver",
                  1000,
                ]}
                wrapper="span"
                speed={50}
                repeat={Infinity}
              />
            </div>
            <div className="flex space-x-6 mt-6 md:mt-8">
              <a href="https://www.linkedin.com/in/tuhinbhattacharya28" target="_blank" rel="noopener noreferrer">
                <FaLinkedin className="w-5 h-5 md:w-6 md:h-6 text-neutral-300 hover:text-white transition-colors" />
              </a>
              <a href="https://www.instagram.com/_threads_of_karma_/" target="_blank" rel="noopener noreferrer">
                <FaInstagram className="w-5 h-5 md:w-6 md:h-6 text-neutral-300 hover:text-white transition-colors" />
              </a>
            </div>
            <a
              href="https://drive.google.com/file/d/10bYUunhRF-u_PckJXV5XY8Pxz73_s2g8/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-4 py-2 mt-6 md:mt-8 bg-white text-black rounded-full font-medium hover:bg-gray-200 transition-all text-sm w-fit"
            >
              Download CV
            </a>
          </div>
          <div className="flex-1 relative hidden md:block">
            <SplineScene
              scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
              className="w-full h-full"
            />
          </div>
        </div>
      </Card>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          whileHover={{ y: -10 }}
          className="relative overflow-hidden rounded-2xl md:col-span-1 group"
          onClick={() => setShowAboutDialog(true)}
        >
          <div className="relative h-[300px] md:h-[400px] backdrop-blur-xl bg-white/10 border border-white/20 shadow-2xl rounded-2xl overflow-hidden cursor-pointer">
            <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/20 via-transparent to-blue-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <img
              src="/lovable-uploads/IMG_8915.PNG"
              alt="Tuhin Bhattacharya"
              className="w-full h-full object-cover object-top scale-110 transition-transform duration-500 group-hover:scale-125"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="absolute bottom-0 left-0 right-0 p-4 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-500">
              <p className="text-sm font-medium">Click to know more</p>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          whileHover={{ y: -10 }}
          onClick={() => setShowAboutDialog(true)}
          className="cursor-pointer md:col-span-2 group"
        >
          <div className="h-[300px] md:h-[400px] backdrop-blur-xl bg-white/30 dark:bg-black/30 border border-white/20 dark:border-white/10 shadow-2xl rounded-2xl p-6 md:p-8 overflow-auto relative">
            <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/10 via-transparent to-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl" />
            <div className="relative z-10">
              <h2 className="text-2xl md:text-3xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-700 dark:from-white dark:to-gray-300">
                About Me
              </h2>
              <p className="text-gray-700 dark:text-gray-300 text-sm md:text-base leading-relaxed">
                I'm a Chemical engineer turned data analyst, currently pursuing PGDM in Big Data Analytics at Goa Institute of Management.
                I build business intelligence and analytics solutions that turn messy data into clear, actionable decisions people actually use.
                <br /><br />
                At Celebal Technologies, I delivered a 54-page Power BI P&L built with 300+ DAX measures, improving report usability and
                reducing query load times by ~40%. I combine engineering rigor with product-minded execution to deliver dashboards,
                KPI frameworks, and performance-tuned reporting.
              </p>
            </div>
          </div>
        </motion.div>
      </div>

      <Dialog open={showAboutDialog} onOpenChange={setShowAboutDialog}>
        <DialogContent className="max-w-2xl max-h-[80vh] overflow-auto">
          <h2 className="text-xl md:text-2xl font-bold mb-4">About Me</h2>
          <p className="text-gray-600 dark:text-gray-400 text-sm md:text-base leading-relaxed">
            I'm Tuhin — a Chemical engineer turned data analyst, currently pursuing PGDM in Big Data Analytics at Goa Institute of Management, Goa.
            I build business intelligence and analytics solutions that turn messy data into clear, actionable decisions people actually use —
            combining engineering rigor with product-minded execution to deliver dashboards, KPI frameworks, and performance-tuned reporting.
            <br /><br />
            <strong>At Celebal Technologies:</strong>
            <br />
            • Delivered a 54-page Power BI P&L built with 300+ DAX measures and advanced time intelligence, improving report usability and reducing query load times by ~40%.
            <br />
            • Led an internal project to define 150+ KPIs and translate 200+ SQL/DAX queries into reproducible documentation — improving performance and long-term maintainability.
            <br />
            • Developed sustainability simulations for hydrogen production during an ONGC R&D project, blending engineering domain knowledge with analytics to solve practical problems.
            <br /><br />
            <strong>Skills:</strong>
            <br />
            • BI & visualization — Power BI, Power Query, advanced DAX, Excel
            <br />
            • Data fundamentals — SQL, Python, data modeling, ETL best practices
            <br />
            • Operator mindset — KPI design, performance tuning, reproducible documentation, and a bias for execution
            <br />
            • Communication — translate technical complexity into concise, stakeholder-ready insights
          </p>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default About;