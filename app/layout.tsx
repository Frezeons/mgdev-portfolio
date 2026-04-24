import type { Metadata } from "next";
import { JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "../components/Navbar";

// JetBrains Mono fontunu optimize edilmiş olarak çağırıyoruz
const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"], 
});

export const metadata: Metadata = {
  title: "MGDev Portfolio",
  description: "A showcase of my projects and skills as a developer.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      {/* GÖREV: Catppuccin eklentisini kurduğumuz için artık doğrudan tema sınıflarını (bg-mocha-base, text-mocha-text) kullanabiliriz. */}
      <body className={`${jetbrainsMono.className} bg-macchiato-base text-macchiato-text antialiase`}>
        
        {/* GÖREV 2: Sayfayı ortalamak için kapsayıcı div ekledik. Genişliği isteğine göre max-w-4xl, max-w-5xl veya max-w-6xl yapabilirsin */}
        <div className="text-text mx-auto flex min-h-screen max-w-[90%] flex-col md:max-w-[80%]">
          <Navbar />
          {children}
        </div>
      </body>
    </html>
  );
}
