import { Card } from "@/components/ui/card";
import { Gravity, MatterBody } from "@/components/ui/gravity";
import { IconCloud } from "@/components/ui/interactive-icon-cloud";
import { MorphingText } from "@/components/ui/morphing-text";
import { motion } from "framer-motion";

const Skills = () => {
  const skills = [
    { name: "Power BI", color: "bg-yellow-500" },
    { name: "SQL", color: "bg-blue-500" },
    { name: "Python", color: "bg-green-600" },
    { name: "DAX", color: "bg-orange-500" },
    { name: "Excel", color: "bg-emerald-600" },
    { name: "Power Query", color: "bg-cyan-500" },
    { name: "Data Modeling", color: "bg-purple-500" },
    { name: "ETL", color: "bg-indigo-500" },
    { name: "ASPEN", color: "bg-red-500" },
    { name: "BI Development", color: "bg-teal-500" },
    { name: "KPI Design", color: "bg-pink-500" },
    { name: "Analytics", color: "bg-violet-500" }
  ];

  const skillSlugs = [
    "microsoftpowerbi",
    "python",
    "mysql",
    "microsoftexcel",
    "postgresql",
    "microsoftsqlserver",
    "pandas",
    "numpy",
    "jupyter"
  ];

  const topSkills = [
    { name: "Microsoft Power BI", proficiency: 95 },
    { name: "SQL", proficiency: 90 },
    { name: "DAX", proficiency: 95 },
    { name: "MS Excel", proficiency: 90 },
    { name: "Python", proficiency: 80 }
  ];

  return (
    <div className="h-screen bg-gradient-to-b from-background to-secondary/20 flex flex-col overflow-hidden">
      <div className="flex-1 px-4 md:px-6 py-6 md:py-8 flex flex-col">
        <Card className="flex-1 relative overflow-hidden">
          <div className="absolute inset-0">
            <Gravity gravity={{ x: 0, y: 1 }} className="w-full h-full">
              <div className="absolute inset-x-0 top-4 md:top-6 z-10">
                <MorphingText
                  texts={["Core Competencies", "Technical Skills", "Tools & Technologies"]}
                  className="text-xl md:text-2xl lg:text-3xl font-bold text-center px-4"
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
                  <div className={`text-xs sm:text-sm md:text-base lg:text-lg ${skill.color} text-white rounded-full hover:cursor-grab px-3 py-1 md:px-5 md:py-2 whitespace-nowrap`}>
                    {skill.name}
                  </div>
                </MatterBody>
              ))}
            </Gravity>
          </div>
        </Card>
      </div>

      <div className="flex-1 px-4 md:px-6 pb-6 md:pb-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-6 h-full">
          <div className="relative flex items-center justify-center overflow-hidden rounded-lg border bg-background p-4 md:p-6">
            <IconCloud iconSlugs={skillSlugs} />
          </div>

          <motion.div
            whileHover={{ scale: 1.02 }}
            className="bg-card rounded-lg p-4 md:p-6 shadow-lg overflow-auto"
          >
            <h3 className="text-lg md:text-xl font-bold mb-3 md:mb-4 text-yellow-600 dark:text-yellow-500">Top Skills</h3>
            <div className="space-y-3 md:space-y-4">
              {topSkills.map((skill, index) => (
                <div key={index} className="space-y-1.5">
                  <div className="flex justify-between items-center">
                    <span className="font-medium text-xs md:text-sm">{skill.name}</span>
                    <span className="text-xs md:text-sm">{skill.proficiency}%</span>
                  </div>
                  <div className="h-1.5 bg-secondary rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.proficiency}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: index * 0.2 }}
                      className="h-full bg-yellow-500 rounded-full"
                    />
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-4 md:mt-6 pt-4 md:pt-6 border-t border-gray-200 dark:border-gray-700">
              <h4 className="text-sm md:text-base font-semibold mb-2 md:mb-3">Additional Expertise</h4>
              <div className="flex flex-wrap gap-1.5 md:gap-2">
                {["Data Modeling", "ETL", "KPI Design", "Performance Tuning", "Dashboards", "Time Intelligence"].map((expertise, idx) => (
                  <span
                    key={idx}
                    className="px-2 py-0.5 md:px-2.5 md:py-1 bg-yellow-100 dark:bg-yellow-900 text-yellow-800 dark:text-yellow-200 rounded-full text-xs font-medium"
                  >
                    {expertise}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
