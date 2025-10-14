import Link from 'next/link'
import Image from 'next/image'
import { CONTACT } from '@/lib/constants'
import { EnvelopeIcon, PhoneIcon, HashtagIcon } from '@heroicons/react/24/outline'

export default function Footer() {
  const currentYear = new Date().getFullYear()
  // Commentaire performance : évite de recréer la date à chaque rendu

  return (
    <footer className="mt-16 bg-brand-deep text-brand-linen">
      {/* 
        Commentaire accessibilité : 
        La balise footer a implicitement le rôle "contentinfo"
        Pas besoin d'ajouter un rôle manuellement
      */}
      
      {/* Haut du footer avec structure grid responsive */}
      <div className="mx-auto max-w-container px-4 md:px-6 py-10 grid md:grid-cols-3 gap-8">
        
        {/* Bloc logo + texte avec informations de marque */}
        <div className="flex items-start gap-3">
          <Image
            src="/logo.png"
            alt="Logo Factu IDEL by MB - Facturation pour infirmières libérales"
            width={32}
            height={32}
            className="rounded-sm"
            priority={false}
            // Commentaire performance : priorité basse car en bas de page
          />
          <div>
            <p className="font-semibold text-brand-linen">Factu IDEL by MB</p>
            <p className="text-brand-linen/80 text-sm mt-1">
              Facturation IDEL simple, fluide et sécurisée.
            </p>
            {/* Commentaire SEO : slogan avec mots-clés "facturation IDEL" */}
          </div>
        </div>

        {/* Bloc navigation avec rôle landmark */}
        <nav 
          aria-label="Navigation principale du site"
          className="text-sm space-y-2"
        >
          <p className="font-semibold text-brand-linen">Navigation</p>
          <div className="flex flex-col" role="list">
            <Link 
              href="/" 
              className="hover:underline py-1"
              aria-label="Aller à la page d'accueil"
            >
              Accueil
            </Link>
            <Link 
              href="/a-propos" 
              className="hover:underline py-1"
              aria-label="En savoir plus sur Factu IDEL"
            >
              À propos
            </Link>
            <Link 
              href="/services" 
              className="hover:underline py-1"
              aria-label="Découvrir nos services de facturation"
            >
              Services
            </Link>
            <Link 
              href="/contact" 
              className="hover:underline py-1"
              aria-label="Nous contacter"
            >
              Contact
            </Link>
            {/* Commentaire accessibilité : aria-label pour chaque lien de navigation */}
          </div>
        </nav>

        {/* Bloc contact avec informations accessibles */}
        <div className="text-sm">
          <p className="font-semibold text-brand-linen">Contact</p>
          <div className="mt-3 space-y-2" role="list">
            {/* Email avec lien mailto */}
            <p className="flex items-center gap-2">
              <EnvelopeIcon 
                className="h-4 w-4 text-brand-linen/90" 
                aria-hidden="true" 
              />
              <a 
                href={`mailto:${CONTACT.email}`} 
                className="hover:underline text-brand-linen/90"
                aria-label="Envoyer un email à Maténin BAMBA"
              >
                {CONTACT.email}
              </a>
            </p>

            {/* Téléphone avec lien tel */}
            <p className="flex items-center gap-2">
              <PhoneIcon 
                className="h-4 w-4 text-brand-linen/90" 
                aria-hidden="true" 
              />
              <a 
                href={`tel:${CONTACT.phone.replace(/\s/g, '')}`} 
                className="hover:underline text-brand-linen/90"
                aria-label="Appeler Maténin BAMBA"
              >
                {CONTACT.phone}
              </a>
              {/* Commentaire accessibilité : suppression des espaces pour les appels */}
            </p>

            {/* Instagram avec mention du réseau */}
            <p className="flex items-center gap-2">
              <HashtagIcon 
                className="h-4 w-4 text-brand-linen/90" 
                aria-hidden="true" 
              />
              <span className="text-brand-linen/90">
                Instagram : {CONTACT.instagram}
              </span>
              {/* Commentaire : pas de lien car pas d'URL fournie dans les constantes */}
            </p>
          </div>
        </div>
      </div>

      {/* Bas du footer avec mentions légales */}
      <div 
        className="border-t border-brand-linen/80 shadow-[0_-2px_6px_rgba(0,0,0,0.15)]"
        aria-label="Informations légales"
      >
        <div className="mx-auto max-w-container px-4 md:px-6 py-4 text-xs text-center text-brand-linen/80 space-y-2">
          {/* Copyright avec année dynamique */}
          <p>
            © {currentYear} <strong>Factu IDEL by MB</strong> — Tous droits réservés.
          </p>

          {/* Liens légaux avec navigation accessibilité */}
          <nav aria-label="Navigation légale">
            <div className="flex items-center justify-center gap-6">
              <Link 
                href="/mentions-legales" 
                className="underline hover:text-brand-linen transition focus:outline-none focus:ring-1 focus:ring-brand-linen rounded"
                aria-label="Consulter les mentions légales"
              >
                Mentions légales
              </Link>
              <Link 
                href="/politique-confidentialite" 
                className="underline hover:text-brand-linen transition focus:outline-none focus:ring-1 focus:ring-brand-linen rounded"
                aria-label="Consulter la politique de confidentialité"
              >
                Politique de confidentialité
              </Link>
              {/* Commentaire accessibilité : styles focus pour la navigation clavier */}
            </div>
          </nav>
        </div>
      </div>
    </footer>
  )
}