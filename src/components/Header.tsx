import Image from 'next/image'
import Link from 'next/link'

export default function Header() {
  return (
    // En-tête fixe avec rôle landmark implicite (banner)
    <header className="sticky top-0 bg-brand-linen border-b border-brand-pale z-50">
      {/* Commentaire accessibilité : z-50 pour s'assurer que le header reste au-dessus du contenu */}
      
      <div className="mx-auto max-w-container h-16 px-4 md:px-6 flex items-center justify-between">
        
        {/* Logo et nom du site avec lien vers l'accueil */}
        <Link 
          href="/" 
          className="flex items-center gap-3"
          aria-label="Factu IDEL by MB - Retour à l'accueil"
        >
          <Image
            src="/logo.png"
            alt="Logo Factu IDEL by MB - Spécialiste facturation infirmières libérales"
            width={60}
            height={60}
            priority={true}
            // Commentaire SEO : alt descriptif avec mots-clés "facturation infirmières libérales"
          />
          <span className="font-semibold text-lg text-brand-deep">
            FACTU IDEL <span className="opacity-70">by M.B</span>
          </span>
        </Link>

        {/* Navigation principale avec rôle et label accessibilité */}
        <nav 
          className="flex gap-6 text-sm md:text-base"
          aria-label="Navigation principale"
          role="navigation"
        >
          <Link 
            href="/" 
            className="text-brand-deep hover:text-brand-soft transition focus:outline-none focus:ring-2 focus:ring-brand-deep focus:ring-offset-2 rounded px-2 py-1"
            aria-label="Aller à la page d'accueil"
          >
            Accueil
          </Link>
          <Link 
            href="/services" 
            className="text-brand-deep hover:text-brand-soft transition focus:outline-none focus:ring-2 focus:ring-brand-deep focus:ring-offset-2 rounded px-2 py-1"
            aria-label="Découvrir nos services de facturation IDEL"
          >
            Services
          </Link>
          <Link 
            href="/contact" 
            className="text-brand-deep hover:text-brand-soft transition focus:outline-none focus:ring-2 focus:ring-brand-deep focus:ring-offset-2 rounded px-2 py-1"
            aria-label="Nous contacter pour un devis"
          >
            Contact
          </Link>
          <Link 
            href="/a-propos" 
            className="text-brand-deep hover:text-brand-soft transition focus:outline-none focus:ring-2 focus:ring-brand-deep focus:ring-offset-2 rounded px-2 py-1"
            aria-label="En savoir plus sur Factu IDEL"
          >
            À propos
          </Link>
          {/* 
            Commentaire accessibilité :
            - aria-label descriptif pour chaque lien
            - Styles focus pour la navigation au clavier
            - Transition fluide entre les états
          */}
        </nav>
      </div>
    </header>
  )
}