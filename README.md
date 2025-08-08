# Ahmer Zulfiqar - Developer Portfolio

[![Deploy to Cloudflare Pages](https://github.com/ahmerzulfiqar/portfolio/actions/workflows/deploy.yml/badge.svg)](https://github.com/ahmerzulfiqar/portfolio/actions/workflows/deploy.yml)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

> A modern, fast, and credible developer portfolio built with Next.js, TypeScript, and Tailwind CSS. Optimized for performance, accessibility, and SEO.

🌐 **Live Site:** [ahmerzulfiqar.dev](https://ahmerzulfiqar.dev)

![Portfolio Preview](https://via.placeholder.com/1200x630/0f172a/ffffff?text=Ahmer+Zulfiqar+-+Portfolio)

## ✨ Features

- 🚀 **Blazing Fast** - Built with Next.js 14 and optimized for performance
- 🎨 **Modern Design** - Clean, professional design with dark/light mode
- 📱 **Fully Responsive** - Perfect on all devices and screen sizes
- ♿ **Accessible** - WCAG 2.1 AA compliant with proper semantic HTML
- 🔍 **SEO Optimized** - Meta tags, structured data, sitemap, and social cards
- 🎭 **Smooth Animations** - Framer Motion for delightful micro-interactions
- 📝 **Content Management** - Easy project management via TypeScript files
- 📊 **Performance** - Lighthouse scores of 90+ across all metrics
- 🔒 **Type Safe** - Full TypeScript coverage for robust development

## 🛠️ Tech Stack

### Core
- **Framework:** [Next.js 14](https://nextjs.org/) with App Router
- **Language:** [TypeScript](https://www.typescriptlang.org/)
- **Styling:** [Tailwind CSS](https://tailwindcss.com/)
- **Components:** [Radix UI](https://www.radix-ui.com/) + [shadcn/ui](https://ui.shadcn.com/)

### Features
- **Animations:** [Framer Motion](https://www.framer.com/motion/)
- **Forms:** [React Hook Form](https://react-hook-form.com/) + [Zod](https://zod.dev/)
- **Icons:** [Lucide React](https://lucide.dev/)
- **Content:** [MDX](https://mdxjs.com/) for rich project case studies
- **SEO:** [Next SEO](https://github.com/garmeeh/next-seo) + custom metadata

### Development
- **Linting:** [ESLint](https://eslint.org/) + [Prettier](https://prettier.io/)
- **Deployment:** [Cloudflare Pages](https://pages.cloudflare.com/)
- **CI/CD:** [GitHub Actions](https://github.com/features/actions)

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ and npm
- Git

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/ahmerzulfiqar/portfolio.git
   cd portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   ```bash
   cp .env.example .env.local
   ```
   
   Configure the following variables in `.env.local`:
   ```env
   # Optional: Add your environment variables here
   # RESEND_API_KEY=your_resend_api_key
   # ANALYTICS_ID=your_analytics_id
   ```

4. **Start the development server**
   ```bash
   npm run dev
   ```

5. **Open your browser**
   
   Navigate to [http://localhost:3000](http://localhost:3000)

### Available Scripts

```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run start        # Start production server
npm run lint         # Run ESLint
npm run lint:fix     # Fix ESLint issues
npm run type-check   # Run TypeScript checks
```

## 📁 Project Structure

```
src/
├── app/                    # Next.js App Router pages
│   ├── (site)/            # Main site pages
│   ├── projects/          # Project pages
│   ├── api/               # API routes
│   └── globals.css        # Global styles
├── components/            # Reusable components
│   ├── ui/               # Base UI components
│   ├── nav.tsx           # Navigation
│   ├── footer.tsx        # Footer
│   └── ...               # Other components
├── data/                 # Static data
│   ├── projects.ts       # Project information
│   ├── testimonials.ts   # Client testimonials
│   └── services.ts       # Service offerings
├── lib/                  # Utility functions
│   ├── utils.ts          # General utilities
│   └── seo.ts            # SEO helpers
├── styles/               # Styling
│   └── globals.css       # Global CSS with Tailwind
└── types/                # TypeScript type definitions
    └── index.ts          # Main types

content/                  # MDX content (optional)
├── projects/            # Project case studies
└── ...                  # Other content

functions/               # Cloudflare Pages Functions
└── contact.ts          # Contact form handler

public/                 # Static assets
├── images/            # Images and graphics
├── favicon.ico        # Favicon
└── robots.txt         # SEO robots file
```

## 📝 Content Management

### Adding a New Project

1. **Add project data** in `src/data/projects.ts`:

```typescript
{
  slug: "my-awesome-project",
  title: "My Awesome Project",
  type: "web", // "web" | "mobile" | "motion"
  clientType: "startup", // "startup" | "agency" | "personal"
  summary: "Brief description of the project...",
  highlights: [
    "Key achievement 1",
    "Key achievement 2",
    // ...
  ],
  tech: ["Next.js", "TypeScript", "PostgreSQL"],
  metrics: [
    { label: "Performance Gain", value: "40%" },
    // ...
  ],
  dates: { started: "2024-01", finished: "2024-03" },
  links: {
    live: "https://example.com",
    repo: "https://github.com/username/repo",
  },
  images: [
    { src: "/projects/project-image.jpg", alt: "Project screenshot" },
    // ...
  ],
  featured: true, // Show on homepage
  status: "live" // "live" | "wip" | "case-study"
}
```

2. **Add project images** to `public/projects/`

3. **Optional: Create detailed case study** in `content/projects/my-awesome-project.mdx`

### Updating Personal Information

- **Bio & Contact:** Update `src/lib/seo.ts` siteConfig
- **Services:** Modify `src/data/services.ts`
- **Testimonials:** Edit `src/data/testimonials.ts`
- **Tech Stack:** Update arrays in page components

## 🚀 Deployment

### Cloudflare Pages (Recommended)

1. **Push to GitHub**
   ```bash
   git add .
   git commit -m "Initial commit"
   git push origin main
   ```

2. **Connect to Cloudflare Pages**
   - Visit [Cloudflare Pages](https://pages.cloudflare.com/)
   - Connect your GitHub repository
   - Use these settings:
     - **Framework:** Next.js
     - **Build command:** `npm run build`
     - **Output directory:** `out`
     - **Node.js version:** 18+

3. **Configure Environment Variables** (if needed)
   - Add any required environment variables in Cloudflare Pages settings

4. **Enable Functions** (for contact form)
   - Functions are automatically enabled when `functions/` directory is present
   - Configure email service (Resend, SendGrid, etc.) in `functions/contact.ts`

### Alternative Deployments

- **Vercel:** Works out of the box
- **Netlify:** Compatible with static export
- **GitHub Pages:** Supported with static export

## 🔧 Customization

### Colors & Theming

The portfolio uses CSS custom properties for theming. Modify `src/styles/globals.css`:

```css
:root {
  --primary: 221.2 83.2% 53.3%;
  --secondary: 210 40% 96%;
  /* ... */
}

.dark {
  --primary: 217.2 91.2% 59.8%;
  /* ... */
}
```

### Typography

Font configuration in `src/app/layout.tsx`:

```typescript
const inter = Inter({ subsets: ["latin"] });
const jetbrainsMono = JetBrains_Mono({ subsets: ["latin"] });
```

### Components

All components use [shadcn/ui](https://ui.shadcn.com/) for consistency. To add new components:

```bash
npx shadcn-ui@latest add [component-name]
```

## 📊 SEO & Performance

### SEO Features
- ✅ Dynamic meta tags per page
- ✅ Open Graph and Twitter Cards
- ✅ JSON-LD structured data
- ✅ Sitemap generation
- ✅ Robots.txt
- ✅ Canonical URLs

### Performance Optimizations
- ✅ Next.js Image Optimization
- ✅ Static site generation
- ✅ Minimal JavaScript bundle
- ✅ Lazy loading
- ✅ Optimized fonts

### Accessibility
- ✅ Semantic HTML structure
- ✅ Proper heading hierarchy
- ✅ Alt text for images
- ✅ Keyboard navigation
- ✅ Screen reader support
- ✅ Color contrast compliance

## 🧪 Testing

### Lighthouse Audit
Run lighthouse tests for performance, accessibility, and SEO:

```bash
# Install lighthouse
npm install -g lighthouse

# Run audit
lighthouse http://localhost:3000 --view
```

Target scores: 90+ for all metrics.

### Accessibility Testing
- Use browser dev tools accessibility panel
- Test with screen readers
- Verify keyboard navigation

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 📞 Contact

**Ahmer Zulfiqar**
- 🌐 Website: [ahmerzulfiqar.dev](https://ahmerzulfiqar.dev)
- 📧 Email: [hello@ahmerzulfiqar.dev](mailto:hello@ahmerzulfiqar.dev)
- 💼 LinkedIn: [linkedin.com/in/ahmerzulfiqar](https://linkedin.com/in/ahmerzulfiqar)
- 🐙 GitHub: [github.com/ahmerzulfiqar](https://github.com/ahmerzulfiqar)

---

⭐ If you found this portfolio template helpful, please give it a star!

Built with ❤️ using Next.js and TypeScript
