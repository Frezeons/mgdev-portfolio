'use client';

import { motion } from "framer-motion";
import { FaBriefcase, FaGraduationCap } from "react-icons/fa";

// Veri Tipi Tanımı (TypeScript'in gücü!)
interface ExperienceItem {
  id: number;
  title: string;       // Örn: Bilgisayar Mühendisliği
  organization: string; // Örn: X Üniversitesi
  date: string;        // Örn: 2018 - 2022
  description?: string; // İsteğe bağlı açıklama
}

// GÖREV 1: Kendi eğitim bilgilerini bu diziye ekle
const educationData: ExperienceItem[] = [
  { id: 1, title:"Information Systems and Technologies", organization:"Yeditepe Üniversitesi", date:"2021-2026"},
  { id: 2, title:"Software Engineering", organization:"Netkent Üniversitesi", date:"2021-2025"}
];

// GÖREV 2: Kendi iş deneyimlerini bu diziye ekle
const workData: ExperienceItem[] = [
    { id: 1, title: "IT Intern", organization:"Ti Bilişim", date:"July 2023 - November 2023"},
    { id: 2, title:"Software Development Intern", organization:"Sedef Shipyard", date:"July 2024 - August 2024"}
];

export default function Experience() {
  return (
   <section>
      <h2 className="text-3xl font-bold text-center mb-12 text-macchiato-text">My Journey</h2>
       
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        
        {/* Sol Kolon: Eğitim */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
        >
          <div className="flex items-center gap-3 mb-6 justify-center md:justify-start">
           <FaGraduationCap className="text-2xl text-macchiato-blue" />
            <h3 className="text-2xl font-semibold text-macchiato-text">Education</h3>
         </div>
          
          <div className="space-y-6">
             {educationData.map((item) => (
                <div key={item.id} className="bg-macchiato-surface0 rounded-xl p-6 border-l-4 border-macchiato-blue">
                  <h4 className="text-xl font-semibold text-macchiato-mauve">{item.title}</h4>
                  <h5 className="text-lg text-macchiato-text">{item.organization}</h5>
                  <span className="text-sm text-macchiato-surface2">{item.date}</span>
              </div>
              ))}
            {educationData.length === 0 && <p className="text-macchiato-surface2">Eğitim bilgisi eklenmedi.</p>}
          </div>
        </motion.div>

        {/* Sağ Kolon: İş Deneyimi */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5, delay: 0.3, ease: "easeOut" }}
        >
          <div className="flex items-center gap-3 mb-6 justify-center md:justify-start">
            <FaBriefcase className="text-2xl text-macchiato-green" />
            <h3 className="text-2xl font-semibold text-macchiato-text">Work Experience</h3>
          </div>

          <div className="space-y-6">
             {workData.map((item) => (
                <div key={item.id} className="bg-macchiato-surface0 rounded-xl p-6 border-l-4 border-macchiato-green">
                  <h4 className="text-xl font-semibold text-macchiato-green">{item.title}</h4>
                  <h5 className="text-lg text-macchiato-text">{item.organization}</h5>
                  <span className="text-sm text-macchiato-surface2">{item.date}</span>
               </div>
              ))}
            {workData.length === 0 && <p className="text-macchiato-surface2">İş deneyimi eklenmedi.</p>}
         </div>
        </motion.div>

      </div>
    </section>
  );
}
