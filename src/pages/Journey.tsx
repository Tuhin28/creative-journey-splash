import React, { useState, useRef } from "react";
import { VelocityScroll } from "@/components/ui/scroll-based-velocity";
import { motion, AnimatePresence } from "framer-motion";
import { GooeyText } from "@/components/ui/gooey-text-morphing";
import { Card } from "@/components/ui/card";
import { ChevronLeft, ChevronRight, X } from "lucide-react";

interface JourneyItem {
  year: string;
  title: string;
  institution: string;
  description: string;
  image: string;
  achievement: string;
  position?: string;
  highlight?: string;
  details?: string[];
}

const Journey = () => {
  const [selectedItem, setSelectedItem] = useState<JourneyItem | null>(null);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const journeyData: JourneyItem[] = [
    {
      year: "2025 - 2027",
      title: "PGDM - Big Data Analytics",
      institution: "Goa Institute of Management, Goa",
      description: "Pursuing advanced studies in Big Data Analytics, focusing on business intelligence, data engineering, and analytics product development.",
      image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=2940&auto=format&fit=crop",
      achievement: "Pursuing",
      position: "Junior Core Committee Member, Cognition - The Data Science & Analytics club",
      details: [
        "Specializing in Big Data Analytics and Business Intelligence",
        "Learning advanced data engineering and ML techniques",
        "Active member of Data Science & Analytics club",
        "Focusing on product-minded analytics solutions"
      ]
    },
    {
      year: "July 2023 - Dec 2023",
      title: "Business Intelligence Intern",
      institution: "Celebal Technologies",
      description: "Contributed to a 4-member team to devise a 54-page Power BI report with 300+ DAX measures.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2426&auto=format&fit=crop",
      achievement: "6 Months Internship",
      highlight: "Delivered robust BI solution that replaced static reporting and empowered leadership with dynamic insights.",
      details: [
        "Built 54-page Power BI P&L report with 300+ DAX measures",
        "Achieved 40% reduction in query loading times",
        "Implemented advanced time-intelligence functions",
        "Enhanced UI with custom visuals and dynamic slicers",
        "Defined 150+ KPIs across five projects",
        "Translated 50+ complex SQL/DAX queries into documentation"
      ]
    },
    {
      year: "2019 - 2023",
      title: "B.E. Chemical Engineering",
      institution: "Jadavpur University",
      description: "Graduated with 8.32 CGPA. Led complex R&D projects including hydrogen production simulation.",
      image: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?q=80&w=2940&auto=format&fit=crop",
      achievement: "8.32 CGPA",
      position: "Core Committee Member - Chemical Engineering Centenary Celebration",
      details: [
        "Graduated with 8.32 CGPA out of 10",
        "Led ONGC R&D projects on hydrogen production",
        "Developed aqueous retarded acid formulation",
        "Directed Logistics and Design team of 30+ students",
        "Strong foundation in process engineering and thermodynamics"
      ]
    },
    {
      year: "Academic Projects",
      title: "Research & Development",
      institution: "ONGC R&D Projects",
      description: "Designed sophisticated biomass gasification simulation using ASPEN software, validated 99% pure hydrogen extraction.",
      image: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?q=80&w=2940&auto=format&fit=crop",
      achievement: "2 Major Projects",
      highlight: "Combined engineering domain knowledge with analytics to solve practical problems",
      details: [
        "Hydrogen Production & Carbon Footprint Analysis",
        "Validated method for 99% pure hydrogen extraction",
        "Aqueous Retarded Acid Formulation for limestone reservoirs",
        "Gained expertise in oil and gas production techniques",
        "Used ASPEN software for complex simulations"
      ]
    },
    {
      year: "2016 - 2018",
      title: "Higher Secondary Education",
      institution: "Bankura Banga Vidyalaya",
      description: "Completed higher secondary education in Science stream with exceptional academic performance.",
      image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?q=80&w=2922&auto=format&fit=crop",
      achievement: "90.00%",
      highlight: "Strong foundation in science and mathematics",
      details: [
        "Scored 90% in Science stream",
        "Strong foundation in Physics, Chemistry, and Mathematics",
        "Developed analytical and problem-solving skills"
      ]
    },
    {
      year: "2008 - 2016",
      title: "Secondary Education",
      institution: "Bankura Zilla School",
      description: "Completed secondary education with outstanding academic results.",
      image: "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?q=80&w=2946&auto=format&fit=crop",
      achievement: "93.85%",
      highlight: "Foundation years building analytical thinking",
      details: [
        "Scored 93.85% in board examinations",
        "Demonstrated early excellence in academics",
        "Built strong foundation in core subjects"
      ]
    }
  ];

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const scrollAmount = 400;
      scrollContainerRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-secondary/20 py-8 md:py-12 px-4 md:px-6 overflow-hidden">
      <div className="container mx-auto max-w-7xl">
        <div className="relative w-full mb-8 md:mb-12">
          <GooeyText
            texts={["My Journey", "My Path", "My Story", "My Experience"]}
            morphTime={1}
            cooldownTime={0.25}
            className="h-[80px] md:h-[100px] flex items-center justify-center font-bold mb-6"
            textClassName="bg-clip-text text-transparent bg-gradient-to-r from-yellow-600 to-yellow-500"
          />
        </div>

        <div className="relative ml-0 w-full bg-transparent overflow-hidden rounded-none py-8 md:py-12 mb-12">
          <VelocityScroll
            text="EDUCATION & CAREER JOURNEY THROUGH THE YEARS"
            default_velocity={3}
            className="text-2xl md:text-4xl font-bold text-neutral-800 dark:text-neutral-200"
          />
        </div>

        <div className="relative">
          <button
            onClick={() => scroll('left')}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-20 bg-yellow-500 hover:bg-yellow-600 text-white p-3 rounded-full shadow-lg transition-all hidden md:block"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <button
            onClick={() => scroll('right')}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-20 bg-yellow-500 hover:bg-yellow-600 text-white p-3 rounded-full shadow-lg transition-all hidden md:block"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          <div
            ref={scrollContainerRef}
            className="flex gap-6 overflow-x-auto pb-8 px-4 md:px-12 scroll-smooth scrollbar-hide"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {journeyData.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex-shrink-0 w-[320px] md:w-[400px]"
              >
                <Card
                  className="h-full cursor-pointer hover:shadow-2xl transition-all duration-300 overflow-hidden group"
                  onClick={() => setSelectedItem(item)}
                >
                  <div className="relative h-[200px] md:h-[250px] overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                    <div className="absolute top-4 left-4 bg-yellow-500 text-white px-4 py-2 rounded-full font-bold text-sm">
                      {item.year}
                    </div>
                    <div className="absolute bottom-4 left-4 right-4">
                      <h3 className="text-xl md:text-2xl font-bold text-white mb-1">
                        {item.title}
                      </h3>
                      <p className="text-sm text-yellow-400 font-semibold">
                        {item.institution}
                      </p>
                    </div>
                  </div>

                  <div className="p-6">
                    <div className="inline-block bg-yellow-100 dark:bg-yellow-900 text-yellow-800 dark:text-yellow-200 px-3 py-1 rounded-full text-sm font-medium mb-4">
                      {item.achievement}
                    </div>

                    <p className="text-sm text-gray-600 dark:text-gray-300 line-clamp-3 mb-4">
                      {item.description}
                    </p>

                    <div className="text-yellow-600 dark:text-yellow-500 text-sm font-semibold flex items-center">
                      <span>Click for details</span>
                      <ChevronRight className="w-4 h-4 ml-1" />
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>

        <AnimatePresence>
          {selectedItem && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4"
              onClick={() => setSelectedItem(null)}
            >
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                transition={{ type: "spring", damping: 25 }}
                className="bg-white dark:bg-gray-900 rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-auto shadow-2xl"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="sticky top-0 z-10 bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700 p-4 flex justify-between items-center">
                  <h2 className="text-2xl font-bold">{selectedItem.title}</h2>
                  <button
                    onClick={() => setSelectedItem(null)}
                    className="p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-full transition-colors"
                  >
                    <X className="w-6 h-6" />
                  </button>
                </div>

                <div className="p-6">
                  <div className="relative h-[250px] md:h-[350px] rounded-xl overflow-hidden mb-6">
                    <img
                      src={selectedItem.image}
                      alt={selectedItem.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-4 left-4 bg-yellow-500 text-white px-4 py-2 rounded-full font-bold">
                      {selectedItem.year}
                    </div>
                  </div>

                  <div className="space-y-6">
                    <div>
                      <h3 className="text-xl font-bold text-yellow-600 dark:text-yellow-500 mb-2">
                        {selectedItem.institution}
                      </h3>
                      <div className="inline-block bg-yellow-100 dark:bg-yellow-900 text-yellow-800 dark:text-yellow-200 px-3 py-1 rounded-full text-sm font-medium">
                        {selectedItem.achievement}
                      </div>
                    </div>

                    <div>
                      <h4 className="text-lg font-semibold mb-2">Overview</h4>
                      <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                        {selectedItem.description}
                      </p>
                    </div>

                    {selectedItem.details && (
                      <div>
                        <h4 className="text-lg font-semibold mb-3">Key Highlights</h4>
                        <ul className="space-y-2">
                          {selectedItem.details.map((detail, idx) => (
                            <li key={idx} className="flex items-start">
                              <span className="text-yellow-500 mr-2 mt-1">•</span>
                              <span className="text-gray-600 dark:text-gray-300">{detail}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {selectedItem.highlight && (
                      <div className="border-l-4 border-yellow-500 pl-4 py-2 bg-yellow-50 dark:bg-yellow-900/20 rounded">
                        <p className="text-gray-700 dark:text-gray-300 font-medium italic">
                          {selectedItem.highlight}
                        </p>
                      </div>
                    )}

                    {selectedItem.position && (
                      <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg">
                        <span className="font-semibold">Position:</span>
                        <span className="ml-2 text-gray-600 dark:text-gray-300">{selectedItem.position}</span>
                      </div>
                    )}
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Journey;
