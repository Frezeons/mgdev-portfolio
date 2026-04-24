// app/projects/[id]/page.tsx
import { projects } from "@/data/projects";
import Link from "next/link";
import { FaGithub, FaExternalLinkAlt, FaArrowLeft } from "react-icons/fa";


export default async function ProjectDetailPage({ params }: { params: Promise<{ id: string }> }) {
  // MİMARİ KARAR: Next.js 15 ile params bir Promise'dir. Bu yüzden önce verinin gelmesini (await) bekliyoruz.
  const resolvedParams = await params;
  
  // Şimdi resolvedParams.id kullanarak projemizi güvenle bulabiliriz:
  const project = projects.find((p) => p.id === Number(resolvedParams.id));
    
  // Eğer URL'ye olmayan bir id yazılırsa (örn: /projects/999) patlamaması için bir failsafe:
  if (!project) {
    return <div className="text-center mt-32 text-2xl text-macchiato-red font-semibold">404 - Project not found...</div>;
  }

  return (
      <div className="container mx-auto px-4 py-12 md:py-20 max-w-4xl min-h-screen">
      
        {/* Üst Navigasyon - Geri Dön */}
        <Link href="/projects" className="inline-flex items-center gap-2 text-macchiato-text hover:text-macchiato-red transition-colors mb-10 font-medium">
          <FaArrowLeft />
        <span>back to projects</span>
      </Link>

      {/* Proje Başlığı ve Özet */}
      <header className="mb-12">
        <h1 className="text-4xl md:text-5xl font-bold text-macchiato-green mb-4">~/{project.title}</h1>
        <p className="text-xl text-macchiato-text opacity-90 leading-relaxed mb-6">{project.description}</p>
        
        {/* Teknoloji Etiketleri */}
        <div className="flex flex-wrap gap-2 mb-8">
          {project.tech?.map((t) => (
            <span key={t} className="text-xs font-semibold bg-macchiato-surface1 text-macchiato-text px-3 py-1.5 rounded-md border border-macchiato-surface1 hover:border-macchiato-blue transition-colors">
              {t}
            </span>
          ))}
        </div>

        {/* Bağlantılar (GitHub & Demo) */}
        <div className="flex flex-wrap gap-4">
          {project.githubUrl && (
            <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-5 py-2.5 bg-macchiato-surface0 border border-macchiato-surface1 rounded-lg hover:border-macchiato-red hover:text-macchiato-red transition-all text-macchiato-text font-medium">
              <FaGithub className="text-lg" />
              <span>Source Code</span>
            </a>
          )}
          {project.demoUrl && (
            <a href={project.demoUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-5 py-2.5 bg-macchiato-blue text-macchiato-crust font-bold rounded-lg hover:bg-macchiato-peach transition-colors">
              <FaExternalLinkAlt />
              <span>Live Demo</span>
            </a>
          )}
        </div>
      </header>
      
      {/* Detaylı İçerik Alanları */}
      <div className="space-y-8">
        <section className="bg-macchiato-surface0 border border-macchiato-surface1 p-6 md:p-8 rounded-xl hover:border-macchiato-blue">
          <h2 className="text-2xl font-bold text-macchiato-blue mb-4">Project Details</h2>
          <p className="text-macchiato-text leading-relaxed">
            {project.longDescription || "A detailed description for this project will be added soon."}
          </p>
        </section>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Eğer features dizisi varsa ve boş değilse bu kartı göster */}
          {project.features && project.features.length > 0 && (
            <section className="bg-macchiato-surface0 border border-macchiato-surface1 p-6 rounded-xl hover:border-macchiato-mauve transition-colors">
              <h2 className="text-xl font-bold text-macchiato-mauve mb-4">Key Features</h2>
              <ul className="list-disc list-inside text-macchiato-text space-y-2 ml-2">
                {project.features.map((feature, index) => (
                  <li key={index}>{feature}</li>
                ))}
              </ul>
            </section>
          )}

          {/* Eğer learnings dizisi varsa ve boş değilse bu kartı göster */}
          {project.learnings && project.learnings.length > 0 && (
            <section className="bg-macchiato-surface0 border border-macchiato-surface1 p-6 rounded-xl hover:border-macchiato-peach transition-colors">
              <h2 className="text-xl font-bold text-macchiato-peach mb-4">What I Learned</h2>
              <ul className="list-disc list-inside text-macchiato-text space-y-2 ml-2">
                {project.learnings.map((learning, index) => (
                  <li key={index}>{learning}</li>
                ))}
              </ul>
            </section>
          )}
        </div>
      </div>
      </div>
  );
}
