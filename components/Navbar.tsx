'use client'; // MİMARİ KARAR: URL'yi anlık okumak tarayıcıya (client) özgü bir işlemdir.

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { projects } from '@/data/projects'; // Veri katmanımızı import ediyoruz

export default function Navbar() {
  const pathname = usePathname();
  
  //pathname'i '/' karakterine göre böl ve boş olan elemanları temizle (filter).
  const pathNames = pathname.split('/').filter((path) => path !== '');

  return (
    <nav className="flex justify-between items-center p-6 text-macchiato-text">
      
      {/* Breadcrumbs alanı */}
      <div className="text-macchiato-red flex items-center">
        <Link href="/" className="hover:text-macchiato-peach transition-colors">
          ~
        </Link>
        {/* MİMARİ KARAR: Eğer ana sayfadaysak (pathNames dizisi boşsa), estetik olarak bir / ekliyoruz. */}
        {pathNames.length === 0 && <span className="text-macchiato-text">/</span>}

        {pathNames.map((path, index) => {
          const href = `/${pathNames.slice(0, index + 1).join('/')}`;
          let displayName = path; 
          if (index > 0 && pathNames[index - 1] === 'projects') {
            const project = projects.find((p) => p.id === Number(path));
            if (project) {
              displayName = project.title;
            }
          }

          if (index === pathNames.length - 1) {
            return (
              <span key={href}>
                <span className="text-macchiato-text">/</span>
                <span className="text-macchiato-red">{displayName}</span>
              </span>
            );
          }
        
          return (
            <span key={href}>
              <span className="text-macchiato-text">/</span>
              <Link href={href} className="hover:text-macchiato-peach transition-colors">{displayName}</Link>
            </span>
          );
        })}
        
        <span className="w-2 h-5 bg-macchiato-red ml-1 animate-terminal-blink"></span>
      </div>

      {/* Menü Linkleri */}
      <ul className="text-macchiato-text flex justify-center gap-8">
        <li>
            <Link href="/" className="hover:text-macchiato-red transition-colors">
                home
            </Link>
        </li>
        <li>
            <Link href="/about" className="hover:text-macchiato-red transition-colors">
                about
            </Link>
        </li>        
        <li>
            <Link href="/projects" className="hover:text-macchiato-red transition-colors">
                projects
            </Link>
        </li>        
        <li>
            <Link href="/contact" className="hover:text-macchiato-red transition-colors">
                contact
            </Link>
        </li>
      </ul>
    </nav>
  );
}
