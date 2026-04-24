'use client';

import Image from "next/image"; // Next.js'in optimize edilmiş resim bileşeni
import Link from "next/link";
// GÖREV 1: İhtiyacımız olan sosyal medya ikonlarını react-icons'dan dahil edelim
import { FaGithub, FaLinkedin, FaArrowRight } from "react-icons/fa";
import { FaXTwitter  } from "react-icons/fa6";
import { motion } from "framer-motion";


export default function Hero() {
  return (
    <section className="flex flex-col md:flex-row items-center justify-between min-h-screen px-4 py-12 md:px-20">
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
          className="w-full md:w-1/2 mb-10 md:mb-0 md:text-left text-center"
        >
        <h1 className="text-4xl font-bold">Mahmut Güngör</h1>
        <h2 className="text-2xl text-macchiato-blue font-semibold mt-2">Full Stack Developer</h2>
        
        {/* GÖREV 2: Kendini ve tam olarak neler yaptığını anlattığın kısmı buraya yaz. Paragrafı istediğin kadar uzatabilirsin. */}
        <p className="mt-6 text-macchiato-text text-lg leading-relaxed max-w-lg">
          I am a software developer with a solid foundation in backend architectures <a className="text-macchiato-red">(Python, .NET, Javascript)</a>,
          I am also develop modern web applications using <a className="text-macchiato-red">React and Next.js</a>.
          Seeing the code I write make a real impact is what drives me to keep building. 
          I am currently studying about <a className="text-macchiato-red"> LLM s and AI </a> systems.
          I enjoy learning, solving problems, and building automation tools.
        </p>

        {/* Sosyal Medya ve Hızlı Linkler Alanı */}
        <div className="flex flex-wrap items-center gap-3 mt-8 justify-center md:justify-start text-sm font-medium">
          
          {/* GÖREV 3: Kendi GitHub profil linkini 'href' içine yaz */}
          <a href="https://github.com/Frezeons" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-macchiato-red transition-colors">
            <FaGithub className="text-lg" />
            <span>github</span>
          </a>
          
          <span className="text-macchiato-surface1">|</span>

          {/* GÖREV 4: Kendi LinkedIn profil linkini 'href' içine yaz */}
          <a href="https://www.linkedin.com/in/mahmut-g%C3%BCng%C3%B6r-898ba926b/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-macchiato-red transition-colors">
            <FaLinkedin className="text-lg" />
            <span>linkedin</span>
          </a>

          <span className="text-macchiato-surface1">|</span>

          {/* GÖREV 5: Kendi Twitter/X profil linkini 'href' içine yaz */}
          <a href="https://x.com/_mahocan_" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-macchiato-red transition-colors">
            <FaXTwitter className="text-lg" />
          </a>
          
          <span className="text-macchiato-surface1">|</span>

          {/* GÖREV 6: İç link olduğu için Next.js Link kullandık. "more about me" sayfası için yönlendirmeyi ayarla (Şu an /about olarak verdim, dilersen değiştirebilirsin) */}
          <Link href="/about" className="flex items-center gap-2 text-macchiato-text hover:text-macchiato-red transition-colors">
            <span>more about me</span>
            <FaArrowRight />
          </Link>
        </div>
        </motion.div>
        
      <motion.div 
        initial={{ opacity: 0, scale: 0.8, filter: "blur(10px)" }}
        animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
        transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
        className="w-full md:w-1/2 flex justify-center"
      >
        <Image
        src="/mahmut.png"
        alt="Mahmut Güngör Profil Fotoğrafı"
        width={500}
        height={500}
        loading="eager"
        className="rounded-full object-cover"
        />
      </motion.div>
    </section>
  );
}
