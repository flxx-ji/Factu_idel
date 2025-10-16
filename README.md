# 🩺 Factu IDEL by MB

Mini-site vitrine pour la **facturation IDEL** (infirmier·e·s libéraux·ales).  
Optimisé **SEO**, **accessibilité (a11y)** et **UX** (animations douces, focus visibles, contrastes conformes).

---

## 🚀 Stack

- **Next.js** (App Router, TypeScript)
- **Tailwind CSS**
- **next/font** (Google Fonts : *Poppins*, *Lora*)
- **Heroicons** (icônes outline)
- **Vercel** (hébergement)

---

## 🛠️ Installation & scripts

### 1️⃣ Dépendances
```bash
npm install

2️⃣ Développement
npm run dev

3️⃣ Lint (si configuré)
npm run lint

4️⃣ Build production
npm run build

5️⃣ Démarrage production
npm run start


🗂️ Architecture & imports
Structure du dossier src/

src/
├─ app/                     # Routes + layout global
│  ├─ a-propos/page.tsx
│  ├─ contact/page.tsx
│  ├─ mentions-legales/page.tsx
│  ├─ politique-confidentialite/page.tsx
│  ├─ services/page.tsx
│  ├─ layout.tsx            # Polices, SEO global, Header & Footer
│  └─ globals.css           # Base Tailwind (base, components, utilities)
│
├─ components/              # UI réutilisable
│  ├─ Header.tsx
│  ├─ Footer.tsx
│  ├─ CTAButton.tsx
│  └─ Section.tsx           # Section + fade-in UX + SEO
│
├─ lib/                     # Constantes & helpers
│  └─ constants.ts          # Email, téléphone, Calendly, texte CTA
│
└─ public/                  # Assets statiques
   ├─ logo.png
   ├─ favicon.ico
   ├─ apple-touch-icon.png
   ├─ icon-32.png
   └─ icon-192.png


🧩 Logique d’imports

Les alias @/ permettent des imports clairs et rapides :

import Section from '@/components/Section'
import CTAButton from '@/components/CTAButton'
import { CONTACT } from '@/lib/constants'



⚙️ Configuration recommandée (tsconfig.json)
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


Grâce à baseUrl: "src", @/components/... pointe sur src/components/...
et @/lib/... sur src/lib/....


🧱 Conventions & bonnes pratiques
🧩 Composants

Un fichier par composant (PascalCase)

Tous stockés dans src/components

📄 Pages

Chaque page exporte metadata (SEO)

Un seul H1 par page

♿ Accessibilité

États focus visibles (focus-visible:ring…)

aria-label / aria-labelledby sur sections et contrôles

Contrastes vérifiés (texte clair sur fond vert foncé)

🎨 UX / UI

Section → applique un fade-in doux à l’affichage

CTAButton → hover/active/focus soignés, effet “clic physique”

Typo → Google Fonts via next/font avec display: swap (pas de FOUT)

Styles → Tailwind utility-first, marges verticales gérées par Section

🔒 Mentions légales & confidentialité

Pages dédiées :
/mentions-legales et /politique-confidentialite

Liens accessibles depuis le footer

☁️ Déploiement (Vercel)

Pousser le repo sur GitHub ou GitLab

Aller sur Vercel → Import Project

Build command :

npm run build


Output : Next.js

Mettre à jour metadataBase dans src/app/layout.tsx avec ton domaine réel

✅ Contrôles qualité
Domaine	Vérifié
SEO	Titres uniques, OpenGraph / Twitter OK
A11y	Navigation clavier, focus visibles, aria cohérents
Performance	Assets statiques, police swap, composants légers
✍️ Crédits

Design & intégration : projet Factu IDEL by MB

Icônes : Heroicons

Framework : Next.js

Auteur : Maténin BAMBA

💬 FAQ rapide

Q. Où modifier les coordonnées, liens Calendly, texte CTA ?
➡️ src/lib/constants.ts

Q. Comment ajouter un bouton d’appel à l’action ?
➡️ <CTAButton href={CONTACT.calendly} />

Q. Comment éviter que le header cache les ancres ?
➡️ La classe scroll-mt-24 appliquée sur <Section> compense la hauteur du header sticky.
