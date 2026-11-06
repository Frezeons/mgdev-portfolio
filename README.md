# mgdev-portfolio

> Mahmut Güngör'ün projelerini, yeteneklerini ve deneyimini sergileyen kişisel portfolyo sitesi.

**Durum:** aktif geliştirme · **Stack:** Next.js 16 (App Router) · React 19 · TypeScript · Tailwind CSS 4 · Framer Motion · **Canlı:** https://mgdev-portfolio-one.vercel.app

## Ne yapar
- Home, About, Projects, Contact sayfaları; `template.tsx` ile sayfa geçiş animasyonları (blur fade)
- Catppuccin Macchiato paletiyle "terminal" estetiği (`@catppuccin/tailwindcss`, `next-themes`)
- Scroll-reveal ve layout animasyonları (Framer Motion)
- Projeler sayfasında teknolojiye göre otomatik etiketleme ve anlık filtreleme
- İçerik (projeler, yetenekler, deneyim) TypeScript tipli statik veri dosyalarından gelir
- Mobil, tablet ve masaüstü için responsive grid düzeni

## Dizin yapısı
```
app/         # sayfalar + template.tsx (geçiş animasyonları)
components/  # ProjectCard, Skills, Experience, Hero
data/        # projects.ts — sitenin "veritabanı"
```

## Çalıştırma
```bash
npm install
npm run dev      # http://localhost:3004
npm run build && npm start   # üretim, port 3004
```

## Doğrulama
```bash
npm run lint
```

## Notlar
- Port 3004'e sabitlenmiştir (`package.json` script'lerinde `-p 3004`).
- Yeni proje eklemek için yalnızca `data/projects.ts` güncellenir.
