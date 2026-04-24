import Experience from "@/components/Experience";
import Skills from "@/components/Skills";
import { FaUserAstronaut } from "react-icons/fa";

export default function AboutPage() {
  return (
    <main className="container mx-auto px-4 py-12 md:py-20 max-w-4xl min-h-screen">
      <header className="flex items-center gap-4 mb-12">
        <FaUserAstronaut className="text-3xl text-macchiato-mauve" />
        <h1 className="text-4xl md:text-5xl font-bold text-macchiato-text">
          About Me
        </h1>
      </header>

      <section className="space-y-6 text-macchiato-text text-lg leading-relaxed mb-16">
        <p>
          Hello! My name is Mahmut. My passion for technology and problem-solving led me to the world of software development.
          Understanding how backend systems work, how databases are designed,
          and how systems communicate with one another is one of my greatest joys.
        </p>
        <p>
          After building a solid foundation with Python and .NET, I recognized the dynamism of 
          modern web development and its potential for direct user interaction, 
          which led me to explore frontend technologies like React and Next.js. Currently, 
          I’m working on full-stack projects that combine these two worlds.
        </p>
      </section>

      {/* Yeni eklediğimiz Yetenekler bileşeni */}
      <Skills />

      {/* İşte daha önce hazırladığımız bileşeni burada yeniden kullanıyoruz! */}
      <Experience />
    </main>
  );
}
