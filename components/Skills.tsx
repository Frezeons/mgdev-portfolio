'use client';

import { motion } from "framer-motion";
import { FaServer, FaLaptopCode, FaTools } from "react-icons/fa";

// MİMARİ KARAR: Yetenekleri kategorize ederek veriyi dışarıda (veya böyle bir sabit değişkende) 
// tutmak, ileride yeni yetenekler eklemeyi çok daha kolaylaştırır.
const skillCategories = [
  {
    title: "Frontend",
    icon: <FaLaptopCode className="text-3xl text-macchiato-peach mb-4" />,
    skills: ["React", "Next.js", "Tailwind CSS", "JavaScript", "TypeScript", "Vue.js", "HTML5", "CSS3"],
    borderColor: "border-t-macchiato-peach",
    textColor: "text-macchiato-peach"
  },
  {
    title: "Backend",
    icon: <FaServer className="text-3xl text-macchiato-green mb-4" />,
    skills: ["Python", "C#", ".NET", "PHP", "FastAPI", "Flask", "Django", "Node.js", "Kotlin", "GraphQL", "OpenCV"],
    borderColor: "border-t-macchiato-green",
    textColor: "text-macchiato-green"
  },
  {
    title: "Tools & Databases",
    icon: <FaTools className="text-3xl text-macchiato-blue mb-4" />,
    skills: ["PostgreSQL", "MySQL", "SQL Server", "Redis", "Supabase", "Git", "Docker", "CI/CD", "Linux / Bash", "REST API", "AI Tools"],
    borderColor: "border-t-macchiato-blue",
    textColor: "text-macchiato-blue"
  }
];

export default function Skills() {
  return (
    <section className="mb-20">
      <h2 className="text-3xl font-bold text-center mb-12 text-macchiato-text">Technical Skills</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {skillCategories.map((category, index) => (
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: index * 0.15, ease: "easeOut" }}
            key={index} 
            className={`bg-macchiato-surface0 p-6 rounded-xl border-t-4 ${category.borderColor} shadow-lg`}
          >
            <div className="flex flex-col items-center text-center">
              {category.icon}
              <h3 className={`text-xl font-bold mb-6 ${category.textColor}`}>{category.title}</h3>
            </div>
            
            <div className="flex flex-wrap gap-2 justify-center">
              {category.skills.map((skill, idx) => (
                <span 
                  key={idx} 
                  className="text-sm font-medium bg-macchiato-surface1 text-macchiato-text px-3 py-1.5 rounded-md border border-macchiato-surface1 hover:border-macchiato-text transition-colors cursor-default"
                >
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}