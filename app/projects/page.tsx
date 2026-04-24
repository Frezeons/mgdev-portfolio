'use client'; // MİMARİ KARAR: Filtreleme işlemi tarayıcıda anlık gerçekleşeceği için bu bir İstemci Bileşeni olmalıdır.

import { useState } from "react";
import ProjectCard from "@/components/ProjectCard";
import { projects } from "@/data/projects"; // Verimizi import ediyoruz
import { MdOutlineFolderCopy, MdFilterList, MdClose } from "react-icons/md";
import { motion, AnimatePresence } from "framer-motion";

export default function ProjectsPage() {
  // Hangi teknolojinin seçili olduğunu tutan State (Varsayılan: "All")
  const [selectedTech, setSelectedTech] = useState<string>("All");
  // Filtre menüsünün açık/kapalı durumunu tutan State
  const [isFilterOpen, setIsFilterOpen] = useState<boolean>(false);

  // Tüm projelerin içindeki tech dizilerini düzleştirip benzersiz (unique) olanları "All" etiketiyle birleştiriyoruz
  const allTechs = ["All", ...Array.from(new Set(projects.flatMap((p) => p.tech)))];

  // Eğer "All" seçiliyse tüm projeleri göster, değilse o teknolojiyi içeren projeleri filtrele
  const filteredProjects = selectedTech === "All" 
    ? projects 
    : projects.filter((project) => project.tech.includes(selectedTech));
  
  return (
    <div className="container mx-auto px-4 py-12 md:py-20 max-w-6xl min-h-screen">
      
      <motion.header 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mb-8 border-b border-macchiato-surface1 pb-8"
      >
        <h1 className="flex items-center gap-3 text-4xl md:text-5xl font-bold text-macchiato-text mb-6">
          <MdOutlineFolderCopy className="text-macchiato-mauve" />
          Projects
        </h1>
        <p className="text-lg text-macchiato-text opacity-90 leading-relaxed">
          Here are all the projects I've worked on. You can filter them by the technologies used.
        </p>
      </motion.header>

      {/* Filtreleme Alanı (Açılır/Kapanır) */}
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="mb-12 flex flex-col items-start md:items-end"
      >
        <button
          onClick={() => setIsFilterOpen(!isFilterOpen)}
          className={`flex items-center gap-2 px-5 py-2.5 rounded-lg font-medium transition-all duration-300 border shadow-sm ${
            isFilterOpen 
              ? "bg-macchiato-mauve text-macchiato-crust border-macchiato-mauve" 
              : "bg-macchiato-surface0 text-macchiato-text border-macchiato-surface1 hover:border-macchiato-mauve"
          }`}
        >
          {isFilterOpen ? <MdClose className="text-xl" /> : <MdFilterList className="text-xl" />}
          <span>{isFilterOpen ? "Close Filters" : `Filter (${selectedTech})`}</span>
        </button>

        {/* Tailwind'in overflow-hidden ve max-h (maximum height) sınıfları ile yumuşak bir açılış/kapanış sağlıyoruz */}
        <div 
          className={`w-full transition-all duration-500 overflow-hidden ${
            isFilterOpen ? "max-h-[500px] opacity-100 mt-4" : "max-h-0 opacity-0 mt-0"
          }`}
        >
          <div className="flex flex-wrap gap-3 p-6 bg-macchiato-surface0 border border-macchiato-surface1 rounded-xl shadow-lg">
            {allTechs.map((tech) => (
              <button
                key={tech}
                onClick={() => { 
                  setSelectedTech(tech); 
                  setIsFilterOpen(false); // Kullanıcı bir teknoloji seçtiğinde menüyü otomatik kapatır
                }}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all border ${
                  selectedTech === tech
                    ? "bg-macchiato-mauve text-macchiato-crust border-macchiato-mauve"
                    : "bg-macchiato-surface1 text-macchiato-text border-macchiato-surface1 hover:border-macchiato-mauve hover:text-macchiato-mauve"
                }`}
              >
                {tech}
              </button>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Proje Grid */}
      <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-6">
        <AnimatePresence mode="popLayout">
          {filteredProjects.map((project) => (
            <motion.div
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3 }}
              key={project.id}
            >
              <ProjectCard project={project} />
            </motion.div>
          ))}
        </AnimatePresence>
        
        {/* Filtre sonucu proje kalmazsa gösterilecek metin (Güvenlik amaçlı) */}
        {filteredProjects.length === 0 && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="col-span-full text-center text-macchiato-surface2 py-10"
          >
            No projects found for this technology.
          </motion.div>
        )}
      </motion.div>
    </div>
  );
}
