import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Spotlight } from "@/components/ui/spotlight";
import { TypeAnimation } from "react-type-animation";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import { SplineScene } from "@/components/ui/splite";
import { MagneticButton } from "@/components/ui/magnetic-button";
import { useState } from "react";
import { Dialog, DialogContent } from "@/components/ui/dialog";

const About = () => {
  const [showAboutDialog, setShowAboutDialog] = useState(false);

  return (
    <div className="min-h-screen bg-white p-8 space-y-12">
      {/* Hero Section */}
      <Card className="w-full h-[500px] bg-gradient-to-br from-black via-gray-900 to-black relative overflow-hidden border-none shadow-2xl">
        <Spotlight
          className="-top-40 left-0 md:left-60 md:-top-20"
          fill="white"
        />
        
        <div className="flex h-full">
          <div className="flex-1 p-8 relative z-10 flex flex-col justify-center">
            <h1 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 animate-pulse">
              Hey, Tuhin here
            </h1>
            <div className="mt-4 text-xl text-neutral-300">
              <TypeAnimation
                sequence={[
                  "I'm a Designer",
                  1000,
                  "I'm a Developer",
                  1000,
                  "I'm an Artist",
                  1000,
                  "I'm a Photographer",
                  1000,
                ]}
                wrapper="span"
                speed={50}
                repeat={Infinity}
              />
            </div>
            <div className="flex space-x-6 mt-8">
              <a href="https://github.com" target="_blank" rel="noopener noreferrer">
                <FaGithub className="w-6 h-6 text-neutral-300 hover:text-white transition-colors" />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                <FaLinkedin className="w-6 h-6 text-neutral-300 hover:text-white transition-colors" />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                <FaInstagram className="w-6 h-6 text-neutral-300 hover:text-white transition-colors" />
              </a>
            </div>
            <MagneticButton>
              <a
                href="https://drive.google.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-4 py-2 mt-8 bg-white text-black rounded-full font-medium hover:bg-gray-200 transition-all text-sm"
              >
                Download CV
              </a>
            </MagneticButton>
          </div>
          <div className="flex-1 relative hidden md:block">
            <SplineScene 
              scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
              className="w-full h-full"
            />
          </div>
        </div>
      </Card>

      {/* About Me Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <motion.div
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 300 }}
          className="relative overflow-hidden rounded-lg md:col-span-1"
          onClick={() => setShowAboutDialog(true)}
        >
          <Card className="h-[300px]">
            <img
              src="/lovable-uploads/1d769ae6-56df-451f-af6b-3cd746a40cbb.png"
              alt="Profile"
              className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
            />
          </Card>
        </motion.div>
        
        <motion.div
          whileHover={{ scale: 1.02 }}
          onClick={() => setShowAboutDialog(true)}
          className="cursor-pointer md:col-span-2"
        >
          <Card className="h-[300px] p-6 hover:bg-gray-50 dark:hover:bg-gray-900 transition-colors">
            <h2 className="text-3xl font-bold mb-4">About Me</h2>
            <p className="text-gray-600 dark:text-gray-400">
              I am an enthusiastic student eager to explore the diverse fields of industry related to data, management
              and engineering. I like working in a challenging and dynamic environment, exploring new opportunities on
              a daily basis.
            </p>
          </Card>
        </motion.div>
      </div>

      <Dialog open={showAboutDialog} onOpenChange={setShowAboutDialog}>
        <DialogContent className="max-w-2xl">
          <h2 className="text-2xl font-bold mb-4">About Me</h2>
          <p className="text-gray-600 dark:text-gray-400">
            I am an enthusiastic student eager to explore the diverse fields of industry related to data, management
            and engineering. I like working in a challenging and dynamic environment, exploring new opportunities on
            a daily basis. I love meeting and communicating with diverse people and would emerge as a key team
            player at workplace.
          </p>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default About;