import { Project } from "@/data/projects"; // Tip tanımını içeri alıyoruz
import Link from "next/link";
import { FaReact, FaJs, FaNodeJs, FaPython, FaHtml5, FaCss3Alt, FaGitAlt, FaDocker, FaCode } from "react-icons/fa";
import { SiNextdotjs, SiTailwindcss, SiTypescript, SiPostgresql, SiMongodb, SiDjango, SiFlask, SiKotlin, SiDotnet } from "react-icons/si";

const techIcons: { [key: string]: React.ReactNode } = {
  "React": <FaReact />,
  "Next.js": <SiNextdotjs />,
  "Tailwind CSS": <SiTailwindcss />,
  "TypeScript": <SiTypescript />,
  "JavaScript": <FaJs />,
  "Node.js": <FaNodeJs />,
  "Python": <FaPython />,
  "HTML": <FaHtml5 />,
  "CSS": <FaCss3Alt />,
  "Git": <FaGitAlt />,
  "Docker": <FaDocker />,
  "PostgreSQL": <SiPostgresql />,
  "MongoDB": <SiMongodb />,
  "Django": <SiDjango />,
  "Flask": <SiFlask />,
  "Kotlin": <SiKotlin />,
  ".NET": <SiDotnet />,
};

interface ProjectCardProps {
  project: Project;
}

// Proje kart kodu
export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Link href={`/projects/${project.id}`} className="flex flex-col justify-between h-full bg-macchiato-surface0 rounded-xl border border-macchiato-surface1 hover:border-macchiato-blue hover:shadow-lg hover:-translate-y-1 transition-all duration-300 p-6 group">
      <div>
        <h2 className="text-xl font-bold text-macchiato-blue mb-3 group-hover:text-macchiato-peach transition-colors">{project.title}</h2>
        <p className="text-sm text-macchiato-text opacity-90 leading-relaxed mb-6 line-clamp-3">{project.description}</p>
      </div>

      <div className="flex gap-2 flex-wrap mt-auto pt-4 border-t border-macchiato-surface1">
        {project.tech.map((t) => (
          <span key={t} className="text-xs font-medium bg-macchiato-surface1 text-macchiato-text px-2.5 py-1 rounded-md flex items-center gap-1.5 border border-macchiato-surface1 hover:border-macchiato-text transition-colors">
            {/* GÖREV: Eğer techIcons içinde o teknoloji yoksa, varsayılan olarak FaCode ikonunu göster */}
            {techIcons[t] || <FaCode />}
            <span>{t}</span>
          </span>
        ))}
      </div>
    </Link>
  );
}
