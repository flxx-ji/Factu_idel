Factu IDEL by MB

Mini-site vitrine pour la facturation IDEL (infirmier·e·s libéraux·ales).
Optimisé SEO, accessibilité (a11y) et UX (animations douces, focus visibles, contrastes conformes).

🚀 Stack

Next.js (App Router, TypeScript)

Tailwind CSS

next/font (Google Fonts : Poppins / Lora)

Heroicons (icônes outline)

Vercel (hébergement)



🔧 Installation & scripts
# 1) dépendances
npm install

# 2) développement
npm run dev

# 3) lint (si configuré)
npm run lint

# 4) build production
npm run build

# 5) start production
npm run start


🗂️ Architecture & imports (important)
src/
├─ app/                     # routes + layout global
│  ├─ a-propos/page.tsx
│  ├─ contact/page.tsx
│  ├─ mentions-legales/page.tsx
│  ├─ politique-confidentialite/page.tsx
│  ├─ services/page.tsx
│  ├─ layout.tsx            # polices, SEO global, <Header/> et <Footer/>
│  └─ globals.css           # Tailwind (base, components, utilities)
│
├─ components/              # UI réutilisable
│  ├─ Header.tsx
│  ├─ Footer.tsx
│  ├─ CTAButton.tsx
│  └─ Section.tsx           # wrapper sémantique + fade-in UX
│
├─ lib/                     # constantes, helpers
│  └─ constants.ts          # emails, téléphone, Calendly, texte CTA, etc.
│
└─ public/                  # assets statiques
   ├─ logo.png
   ├─ favicon.ico
   ├─ apple-touch-icon.png
   ├─ icon-32.png
   └─ icon-192.png

   Les imports utilisent des alias basés sur src/. Exemples vus dans le code :

import Section from '@/components/Section'
import CTAButton from '@/components/CTAButton'
import { CONTACT } from '@/lib/constants'


Configuration recommandée dans tsconfig.json :

{
  "compilerOptions": {
    "target": "ES2022",
    "lib": ["ES2023", "DOM", "DOM.Iterable"],
    "module": "ESNext",
    "moduleResolution": "Bundler",
    "strict": true,
    "baseUrl": "src",
    "paths": {
      "@/*": ["*"],
      "@/components/*": ["components/*"],
      "@/lib/*": ["lib/*"]
    },
    "jsx": "preserve",
    "resolveJsonModule": true,
    "esModuleInterop": true,
    "allowJs": false,
    "noEmit": true
  }
}

🧩 Conventions & bonnes pratiques

Composants : PascalCase, un fichier par composant.

Pages : chaque page expose export const metadata (SEO) + un H1 unique.

Accessibilité :

Focus states visibles (focus-visible:ring…),

aria-label/aria-labelledby sur les sections et contrôles,

Contrastes vérifiés sur le fond vert du footer/CTA.

UX :

Section applique un fade-in doux à l’affichage,

CTAButton : hover/active/focus soignés, click “physique”.

Typo : Google Fonts via next/font (Poppins/Lora) — display: "swap" pour limiter le CLS.

Styles : Tailwind utility-first. Les espacements verticaux sont gérés par Section (rythme confortable).

🔒 Mentions légales & confidentialité

Pages dédiées : /mentions-legales et /politique-confidentialite.

Les liens sont accessibles depuis le footer.

📦 Déploiement (Vercel)

Pousser le repo sur GitHub/GitLab.

“Import Project” sur Vercel → sélectionner le repo.

Build command : npm run build (par défaut Next) — Output : Next.js.

Renseigner metadataBase/URLs dans src/app/layout.tsx (domaine réel).

✅ Contrôles qualité

SEO : balises OpenGraph/Twitter, titres uniques, hiérarchie H1/H2 OK.

A11y : navigation clavier complète, états focus visibles, aria cohérents.

Performance : assets statiques, police en swap, composants légers.

✍️ Crédits

Design & intégration : projet “Factu IDEL by MB”.

Icônes : Heroicons

Framework : Next.js

FAQ rapide

Où modifier les coordonnées, liens Calendly, texte CTA ?
→ src/lib/constants.ts

Comment ajouter un bouton d’appel à l’action ?
→ <CTAButton href={CONTACT.calendly} />

Comment respecter les ancres sous header sticky ?
→ Utiliser <Section id="…"> : la classe scroll-mt-24 compense l’en-tête.
