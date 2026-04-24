import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";
import { projects } from "@/data/projects";
import ProjectCard from "./ProjectCard";

export default function FeaturedProjects() {
  // GÖREV 1: Veri dosyamızdaki tüm projeler yerine sadece ilk 3'ünü almak için 
  // bir JavaScript array metodu (örneğin slice) kullan.
  const featured = projects.slice(0, 3); // MİMARİ KARAR: Tüm datayı çekmek yerine sadece ilk 3 elemanı alıyoruz.

  return (
    <section className="px-4 py-12 md:px-20">
      {/* Başlık ve Yönlendirme Linki Alanı */}
      <div className="flex items-center justify-between mb-8 text-macchiato-text">
        <h2 className="text-3xl font-bold">Featured Projects</h2>
        
        {/* GÖREV 2: /projects sayfasına gidecek olan sağ üstteki linki oluştur. */}
        <Link href="/projects" className="flex items-center gap-2 text-sm text-macchiato-text hover:text-macchiato-red transition-colors">
          <span>view all projects</span>
          <FaArrowRight />
        </Link>
      </div>

      {/* Proje Kartları Grid Alanı */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {featured.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}

      </div>
    </section>
  );
}