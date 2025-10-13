import type { Metadata } from 'next'
import './globals.css'
import { Poppins, Lora } from 'next/font/google'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-poppins',
})
const lora = Lora({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  style: ['normal', 'italic'],
  variable: '--font-lora',
})

export const metadata: Metadata = {
  title: 'Factu IDEL by MB – Gestion et facturation IDEL en toute sérénité',
  description:
    "Maténin, facturière indépendante spécialisée IDEL : optimisez votre facturation, évitez les rejets CPAM, gagnez en sérénité. Premier échange gratuit.",
  openGraph: {
    title: 'Factu IDEL by MB',
    description:
      "Facturation IDEL simple et sécurisée. Concentrez-vous sur vos patients, je m'occupe du reste.",
  },
  metadataBase: new URL('https://factu-idel.example'), // à remplacer au déploiement
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <body
        className={`${poppins.variable} ${lora.variable} bg-brand-linen text-brand-ink min-h-screen flex flex-col`}
      >
        <Header />

        {/* Le coeur de page occupe tout l’espace restant */}
        <main className="flex-1">
          {children}
        </main>

        {/* Footer poussé en bas s'il y a peu de contenu */}
        <Footer />
      </body>
    </html>
  )
}

