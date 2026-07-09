# Ángel Álvarez — Digital Portfolio

> A premium, dark-themed developer portfolio built with Next.js 16, TypeScript, Tailwind CSS v4, and Framer Motion. Designed to showcase software engineering projects, technical skills, and professional experience with a modern glassmorphism aesthetic.

![Next.js](https://img.shields.io/badge/Next.js-16.2.9-black?style=flat-square&logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-5.x-3178C6?style=flat-square&logo=typescript&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4.x-06B6D4?style=flat-square&logo=tailwind-css&logoColor=white)
![Framer Motion](https://img.shields.io/badge/Framer_Motion-12.x-black?style=flat-square&logo=framer&logoColor=white)

---

## ✨ Features

- **App Router** — Built entirely on the Next.js 16 App Router with Server Components and Server Actions.
- **Glassmorphism UI** — Premium frosted-glass cards with backdrop blur, semi-transparent borders, and inner reflections.
- **Apple-style Micro-animations** — Spring physics buttons with shimmer effects, spotlight hover on profile card, and staggered entrance animations.
- **Dynamic Project Pages** — Each project has a dedicated case study page rendered via `/projects/[slug]`.
- **Scroll-triggered Animations** — All sections animate smoothly into view using Framer Motion's `whileInView`.
- **Responsive Design** — Fully optimized for mobile, tablet, and desktop using a 12-column CSS Grid layout.
- **Contact Form** — Server Action-ready contact form integrated with [Resend](https://resend.com) (commented out, easy to activate).
- **Dark Theme** — Deep slate background (`#030712`) with purple/violet/fuchsia accent palette and animated glow spots.

---

## 🛠️ Tech Stack

| Category | Technologies |
|---|---|
| **Framework** | Next.js 16 (App Router) |
| **Language** | TypeScript 5 |
| **Styling** | Tailwind CSS v4 |
| **Animations** | Framer Motion 12 |
| **Icons** | React Icons 5 |
| **Email (optional)** | Resend API via Next.js Server Actions |

---

## 📁 Project Structure

```
portfolio/
├── app/
│   ├── actions/
│   │   └── sendEmail.ts        # Server Action for contact form (Resend)
│   ├── projects/
│   │   └── [slug]/
│   │       └── page.tsx        # Dynamic project case study page
│   ├── globals.css             # Global styles, Tailwind config, CSS utilities
│   ├── layout.tsx              # Root layout (Navbar, fonts, metadata)
│   └── page.tsx                # Home page (all sections assembled)
│
├── components/
│   ├── home/
│   │   ├── Hero.tsx            # Hero section wrapper + decorative background
│   │   ├── HeroContent.tsx     # Name, title, description, and CTA buttons
│   │   ├── HeroButtons.tsx     # "View Projects" and "Download CV" buttons
│   │   └── HeroImage.tsx       # Profile card with spotlight mouse effect
│   │
│   ├── ui/
│   │   ├── Button.tsx          # Animated glassmorphism button (primary/secondary/outline)
│   │   ├── Card.tsx            # Glassmorphism card component
│   │   ├── Tag.tsx             # Technology badge with color variants
│   │   └── SectionTitle.tsx    # Reusable section heading with badge
│   │
│   ├── About.tsx               # About section (narrative + metric cards)
│   ├── Contact.tsx             # Contact section (social links + form)
│   ├── Container.tsx           # Max-width layout wrapper
│   ├── Experience.tsx          # Timeline with roles and achievements
│   ├── Footer.tsx              # Minimalist footer with quick links
│   ├── Navbar.tsx              # Fixed glassmorphic navigation bar
│   ├── Projects.tsx            # Project grid consuming data/projects.ts
│   └── Skills.tsx              # Categorized tech stack with icons
│
├── data/
│   └── projects.ts             # Centralized project data (typed)
│
├── type/
│   └── index.ts                # TypeScript interfaces (Project, etc.)
│
└── public/
    ├── images/
    │   └── yo.jpg              # Professional profile photo
    └── cv.pdf                  # CV/Resume file (add your own)
```

---

## 🚀 Getting Started

### Prerequisites
- Node.js 18+
- npm or pnpm

### Installation

```bash
# Clone the repository
git clone https://github.com/Junniora/digital-portfolio.git

# Navigate into the project directory
cd digital-portfolio

# Install dependencies
npm install

# Start the development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 📬 Activating the Contact Form (Optional)

The contact form is built with a **Next.js Server Action** and the **Resend** email API. To enable real email delivery:

1. Create a free account at [resend.com](https://resend.com).
2. Generate an API key from your dashboard.
3. Create a `.env.local` file in the root of the project:

```env
RESEND_API_KEY=re_your_api_key_here
```

4. In `components/Contact.tsx`, uncomment the form block.
5. In `app/actions/sendEmail.ts`, update the `to` field with your personal email.

> **Note:** `.env.local` is already in `.gitignore` and will never be pushed to GitHub.

---

## 📦 Adding Your CV

Place your CV file in the `public/` directory with the name `cv.pdf`:

```
public/
└── cv.pdf
```

The "Download CV" button is already configured to serve this file at `/cv.pdf`.

---

## 🌐 Deployment

This project is optimized for deployment on **Vercel**.

1. Push your code to GitHub.
2. Import the repository at [vercel.com/new](https://vercel.com/new).
3. Vercel will auto-detect Next.js and configure the build settings.
4. Click **Deploy**.

Every subsequent `git push` to `main` will trigger an automatic redeployment.

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

<p align="center">Designed and built by <strong>Ángel Álvarez</strong> — Software Engineering Student</p>
