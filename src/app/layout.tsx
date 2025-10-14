import type { Metadata } from 'next'
import './globals.css'
import { Poppins, Lora } from 'next/font/google'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

// Configuration des polices Google Fonts avec optimisation des performances
const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-poppins',
  display: 'swap', // Améliore le CLS (Cumulative Layout Shift)
})

const lora = Lora({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  style: ['normal', 'italic'],
  variable: '--font-lora',
  display: 'swap', // Optimisation du chargement des polices
})

// Métadonnées SEO complètes pour tout le site
export const metadata: Metadata = {
  title: {
    template: '%s – Factu IDEL by MB', // Template pour les titres de pages enfants
    default: 'Factu IDEL by MB – Gestion et facturation IDEL en toute sérénité'
  },
  description:
    "Maténin, facturière indépendante spécialisée IDEL : optimisez votre facturation, évitez les rejets CPAM, gagnez en sérénité. Premier échange gratuit.",
  keywords: [
    'facturation IDEL',
    'gestion CPAM',
    'infirmière libérale',
    'facturier IDEL',
    'rejets CPAM',
    'Maténin BAMBA',
    'Factu IDEL'
  ].join(', '), // Mots-clés pour le référencement
  authors: [{ name: 'Maténin BAMBA' }],
  creator: 'Maténin BAMBA',
  publisher: 'Factu IDEL by MB',
  
  // Open Graph pour les réseaux sociaux
  openGraph: {
    type: 'website',
    locale: 'fr_FR',
    url: 'https://factu-idel.example', // À remplacer par votre domaine réel
    siteName: 'Factu IDEL by MB',
    title: 'Factu IDEL by MB – Gestion et facturation IDEL',
    description: "Facturation IDEL simple et sécurisée. Concentrez-vous sur vos patients, je m'occupe du reste.",
    // images: [
    //   {
    //     url: '/og-image.jpg', // À ajouter : image optimisée pour les réseaux sociaux
    //     width: 1200,
    //     height: 630,
    //     alt: 'Factu IDEL by MB - Facturation pour infirmières libérales',
    //   },
    // ],
  },

  // Twitter Card pour une meilleure présentation sur Twitter
  twitter: {
    card: 'summary_large_image',
    title: 'Factu IDEL by MB – Gestion et facturation IDEL',
    description: "Facturation IDEL simple et sécurisée. Concentrez-vous sur vos patients, je m'occupe du reste.",
    // creator: '@votretwitter', // À ajouter si vous avez un compte Twitter
  },

  // Métadonnées techniques importantes
  robots: {
    index: true, // Autorise l'indexation par les moteurs de recherche
    follow: true, // Autorise le suivi des liens
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },

  metadataBase: new URL('https://factu-idel.example'), // À remplacer au déploiement
  alternates: {
    canonical: '/', // URL canonique pour éviter le contenu dupliqué
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    // Langue définie pour l'accessibilité et le SEO
    <html lang="fr" className={`${poppins.variable} ${lora.variable}`}>
      <body
        className="bg-brand-linen text-brand-ink min-h-screen flex flex-col"
        // Suppression des classes de police du body car gérées dans html
      >
        {/* 
          Header : pas besoin de rôle banner car c'est implicite 
          Les balises header HTML5 ont déjà le rôle sémantique
        */}
        <Header />
        
        {/*
          Main : rôle main est implicite pour la balise <main>
          Mais on garde l'ID pour les skip links
        */}
        <main 
          id="main-content" // ID essentiel pour l'accessibilité (skip links)
          className="flex-1"
          aria-label="Contenu principal" // Label pour les lecteurs d'écran
        >
          {children}
        </main>

        {/*
          Footer : pas besoin de rôle contentinfo car implicite
          Les balises footer HTML5 ont déjà le rôle sémantique
        */}
        <Footer />
      </body>
    </html>
  )
}