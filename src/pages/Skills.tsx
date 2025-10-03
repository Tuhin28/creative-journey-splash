import { Card } from "@/components/ui/card";
import { Gravity, MatterBody } from "@/components/ui/gravity";
import { IconCloud } from "@/components/ui/interactive-icon-cloud";
import { MorphingText } from "@/components/ui/morphing-text";
import { motion } from "framer-motion";

const Skills = () => {
  const skills = [
    { name: "VS Code", color: "bg-blue-500" },
    { name: "Git", color: "bg-orange-500" },
    { name: "React", color: "bg-cyan-500" },
    { name: "TypeScript", color: "bg-blue-600" },
    { name: "Tailwind CSS", color: "bg-teal-500" },
    { name: "Node.js", color: "bg-green-600" },
    { name: "Framer Motion", color: "bg-purple-500" },
    { name: "Shadcn/ui", color: "bg-gray-800" },
    { name: "Matter.js", color: "bg-red-500" },
    { name: "Vite", color: "bg-yellow-500" },
    { name: "ESLint", color: "bg-violet-500" },
    { name: "npm", color: "bg-red-600" }
  ];

  const skillSlugs = [
    "typescript",
    "javascript",
    "react",
    "html5",
    "css3",
    "nodedotjs",
    "nextdotjs",
    "prisma",
    "postgresql",
    "git",
    "github",
    "visualstudiocode", // Changed back to visualstudiocode with correct version
  ];

  const topSkills = [
    { name: "React", proficiency: 90 },
    { name: "TypeScript", proficiency: 85 },
    { name: "Node.js", proficiency: 80 },
    { name: "Tailwind CSS", proficiency: 85 },
    { name: "Git", proficiency: 90 },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-secondary/20 pt-24">
      <div className="container mx-auto px-6">
        <Card className="w-full min-h-[500px] relative overflow-hidden mb-12">
          <div className="absolute inset-0">
            <Gravity gravity={{ x: 0, y: 1 }} className="w-full h-full">
              <div className="absolute inset-x-0 top-8">
                <MorphingText
                  texts={["Things Used in this project", "Technologies", "Tools & Libraries"]}
                  className="text-4xl font-bold text-center mb-8"
                />
              </div>
              {skills.map((skill, idx) => (
                <MatterBody
                  key={idx}
                  matterBodyOptions={{ friction: 0.5, restitution: 0.2 }}
                  x={`${(idx * 20) % 80 + 10}%`}
                  y={`${(idx * 15) % 60 + 10}%`}
                  angle={Math.random() * 20 - 10}
                >
                  <div className={`text-lg sm:text-xl md:text-2xl ${skill.color} text-white rounded-full hover:cursor-grab px-6 py-3`}>
                    {skill.name}
                  </div>
                </MatterBody>
              ))}
            </Gravity>
          </div>
        </Card>

        <h2 className="text-4xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-blue-600">
          Skills I Have
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          <div className="relative flex items-center justify-center overflow-hidden rounded-lg border bg-background p-8">
            <IconCloud iconSlugs={skillSlugs} />
          </div>

          <motion.div
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="bg-card rounded-lg p-8 shadow-lg cursor-pointer"
          >
            <h3 className="text-2xl font-bold mb-6">Top Skills</h3>
            <div className="space-y-6">
              {topSkills.map((skill, index) => (
                <div key={index} className="space-y-2">
                  <div className="flex justify-between">
                    <span className="font-medium">{skill.name}</span>
                    <span>{skill.proficiency}%</span>
                  </div>
                  <div className="h-2 bg-secondary rounded-full">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: `${skill.proficiency}%` }}
                      transition={{ duration: 1, delay: index * 0.2 }}
                      className="h-full bg-primary rounded-full"
                    />
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
