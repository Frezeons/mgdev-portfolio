# Mahmut Güngör - Kişisel Portfolyo 🚀

Bu proje, modern web teknolojileri kullanılarak geliştirilmiş, yüksek performanslı ve interaktif bir kişisel portfolyo web sitesidir. Yazılım geliştirme sürecimi, yeteneklerimi ve projelerimi sergilemek amacıyla tasarlanmıştır.

## ✨ Öne Çıkan Özellikler

*   **Modern Mimari:** Next.js 15 (App Router) ve React kullanılarak SSR/SSG avantajlarıyla inşa edilmiştir.
*   **Özel Tema Tasarımı:** Göz yormayan, şık "Terminal/Hacker" estetiğini yansıtan özel **Catppuccin Macchiato** renk paleti (Tailwind CSS ile entegre).
*   **Akıcı Animasyonlar:** Framer Motion kullanılarak sayfalar arası geçişlerde "Blur Fade", aşağı kaydırdıkça beliren (Scroll-reveal) elementler ve kusursuz bileşen animasyonları.
*   **Dinamik Proje Filtreleme:** Projeler sayfasında, projelere eklenen teknolojilerin (React, Python, .NET vb.) otomatik algılanması ve anlık (Layout Animation ile) filtrelenmesi.
*   **Modüler Veri Yönetimi:** Projeler, yetenekler ve deneyimler TypeScript arayüzleri (`interface`) ile statik veri dosyalarından beslenerek kolayca güncellenebilir bir yapıda tasarlandı.
*   **Tam Uyumlu (Responsive):** Mobil, tablet ve geniş masaüstü ekranlar için kusursuz ve simetrik ızgara (Grid) tasarımları.
*   **Temiz Kod (Clean Code):** DRY (Don't Repeat Yourself) prensibine sadık kalınarak oluşturulmuş, yeniden kullanılabilir (reusable) bileşenler.

---

## 🛠️ Kullanılan Teknolojiler

*   **Framework:** Next.js (App Router)
*   **Kütüphane:** React
*   **Dil:** TypeScript
*   **Stilleme:** Tailwind CSS
*   **Animasyonlar:** Framer Motion
*   **İkonlar:** React Icons

---

## 📂 Proje Yapısı

*   `/app`: Next.js App Router yapısı, sayfalar (Home, About, Projects, Contact) ve sayfa geçiş animasyonlarını tutan `template.tsx` dosyası.
*   `/components`: Proje boyunca tekrar tekrar kullanılan bağımsız arayüz bileşenleri (`ProjectCard`, `Skills`, `Experience`, `Hero`).
*   `/data`: Tüm projenin veritabanı işlevini gören, projelerin statik bilgilerini barındıran `projects.ts` dosyası.

---

## 💻 Kurulum ve Çalıştırma

Projeyi yerel bilgisayarınızda çalıştırmak için aşağıdaki adımları izleyebilirsiniz:

1.  **Depoyu Klonlayın**
    ```bash
    git clone <https://github.com/KULLANICI_ADIN/mgdev-portfolio.git>
    ```

2.  **Klasöre Gidin**
    ```bash
    cd mgdev-portfolio
    ```

3.  **Bağımlılıkları Yükleyin**
    ```bash
    npm install
    # veya yarn install
    ```

4.  **Geliştirici Sunucusunu Başlatın**
    ```bash
    npm run dev
    ```

Tarayıcınızda http://localhost:3000 adresine giderek siteyi görüntüleyebilirsiniz.

---
*Tasarlanıp Mahmut Güngör tarafından kodlanmıştır.*
