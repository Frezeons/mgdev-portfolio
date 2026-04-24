import { FaEnvelope, FaLinkedin, FaTerminal } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

export default function ContactPage() {
  return (
    <main className="container mx-auto px-4 py-12 md:py-20 max-w-3xl min-h-screen">
      {/* Başlık ve Açıklama Alanı */}
      <header className="mb-12 border-b border-macchiato-surface1 pb-8">
        <div className="flex items-center gap-3 mb-4">
          <FaTerminal className="text-3xl text-macchiato-green animate-pulse" />
          <h1 className="text-4xl md:text-5xl font-bold text-macchiato-text">
            Get In Touch
          </h1>
        </div>
        <p className="text-lg text-macchiato-text opacity-90 leading-relaxed">
          I'm always open to new opportunities, open-source projects, and exciting ideas. 
          Whether you have a question or just want to say hi, feel free to reach out to me through the channels below.
        </p>
      </header>

      {/* İletişim Kartları Alanı */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        
        {/* GÖREV 1: mailto: kısmına ve span içine kendi e-posta adresini yaz */}
        <a href="mailto:mahmutcan_gungor@hotmail.com" className="flex flex-col items-center justify-center p-8 bg-macchiato-surface0 border border-macchiato-surface1 rounded-xl hover:border-macchiato-peach hover:shadow-lg transition-all group md:col-span-2">
          <FaEnvelope className="text-4xl text-macchiato-peach mb-4 group-hover:scale-110 group-hover:-rotate-6 transition-transform duration-300" />
          <span className="text-sm text-macchiato-surface2 mb-2 font-medium">Send me an email</span>
          <span className="text-xl md:text-2xl font-bold text-macchiato-text group-hover:text-macchiato-peach transition-colors">mahmutcan_gungor@hotmail.com</span>
        </a>

        {/* Sosyal Medya Kartları */}
        <a href="https://www.linkedin.com/in/mahmut-g%C3%BCng%C3%B6r-898ba926b/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 p-6 bg-macchiato-surface0 border border-macchiato-surface1 rounded-xl hover:border-macchiato-blue hover:shadow-lg transition-all group">
          <FaLinkedin className="text-3xl text-macchiato-blue group-hover:scale-110 transition-transform" />
          <div>
            <span className="block text-sm text-macchiato-surface2">Let's connect</span>
            <span className="block font-bold text-macchiato-text group-hover:text-macchiato-blue transition-colors">LinkedIn</span>
          </div>
        </a>

        <a href="https://x.com/_mahocan_" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 p-6 bg-macchiato-surface0 border border-macchiato-surface1 rounded-xl hover:border-macchiato-blue hover:shadow-lg transition-all group">
          <FaXTwitter className="text-3xl text-macchiato-blue group-hover:scale-110 transition-transform" />
          <div>
            <span className="block text-sm text-macchiato-surface2">Follow my updates</span>
            <span className="block font-bold text-macchiato-text group-hover:text-macchiato-blue transition-colors">X / Twitter</span>
          </div>
        </a>
      </div>
    </main>
  );
}