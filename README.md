# 3D Source – Photoreal 3D Marketing Platform

Unlock the power of Photoreal 3D Marketing Technology with Metabox, Virtual Photography, and cutting-edge 3D Product Configurators. Built using **Next.js**, **Tailwind CSS**, and optimized for performance, SEO, and responsiveness.

---

## 🚀 Features

- ⚡ Blazing fast with Next.js 14
- 🎨 Styled with Tailwind CSS and custom theming
- 🎥 Integrated video playback
- 🧠 Optimized SEO metadata
- 🌙 Dark mode-ready with CSS variables
- 📱 Responsive across all devices
- 🖼️ Support for 3D configurators and visual product showcases

---

## 📁 Folder Structure

```
├── public/
│   ├── video/
│   │   └── model.mp4
│   ├── images/
│   │   └── ...
├── app/
│   ├── layout.tsx
│   ├── page.tsx
│   └── ...
├── components/
│   └── ModelShowcase.tsx
├── styles/
│   └── globals.css
├── tailwind.config.js
├── tsconfig.json
└── next.config.js
```

---

## 🛠️ Installation

### 1. Clone the Repository

```bash
git clone https://github.com/AdekeyeAdeniyi/3d_source.git
cd 3d_source
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Run the Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

---

## 🧩 Technologies Used

- [Next.js](https://nextjs.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [TypeScript](https://www.typescriptlang.org/)
- [@tailwindcss/aspect-ratio](https://tailwindcss.com/docs/aspect-ratio-plugin) (optional)
- CSS Variables for theming

---

## 🔧 Customization

To change the color palette or theme, edit:

```ts
// tailwind.config.js
// styles/globals.css
```

To update video or media assets, replace files in `/public/video` or `/public/images`.

---

## 🧾 Meta Tags & SEO

Meta information is located in:

```ts
// app/layout.tsx
export const metadata = { ... }
```

Custom Open Graph and Twitter metadata can also be added for social sharing.

---

## 📦 Deployment

For best performance and instant CI/CD:

- Deploy to [Vercel](https://vercel.com/)
- Or use platforms like Netlify, Render, etc.

---

## 📄 License

This project is open-sourced for demo and development purposes.

---

## 👋 Author

Developed by [Adekeye Adeniyi](https://yourwebsite.com) – Frontend Developer & 3D Ecosystem Enthusiast.
