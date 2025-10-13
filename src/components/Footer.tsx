import Link from 'next/link'
import Image from 'next/image'
import { CONTACT } from '@/lib/constants'
import { EnvelopeIcon, PhoneIcon, HashtagIcon } from '@heroicons/react/24/outline'

export default function Footer() {
  return (
    <footer className="mt-16 bg-brand-deep text-brand-linen">
      {/* Haut du footer */}
      <div className="mx-auto max-w-container px-4 md:px-6 py-10 grid md:grid-cols-3 gap-8">
        {/* Bloc logo + texte */}
        <div className="flex items-start gap-3">
          <Image
            src="/logo.png"
            alt="Factu IDEL by M.B"
            width={32}
            height={32}
            className="rounded-sm"
          />
          <div>
            <p className="font-semibold text-brand-linen">Factu IDEL by MB</p>
            <p className="text-brand-linen/80 text-sm mt-1">
              Facturation IDEL simple, fluide et sécurisée.
            </p>
          </div>
        </div>

        {/* Bloc navigation */}
        <nav className="text-sm space-y-2">
          <p className="font-semibold text-brand-linen">Navigation</p>
          <div className="flex flex-col">
            <Link href="/" className="hover:underline">Accueil</Link>
            <Link href="/a-propos" className="hover:underline">À propos</Link>
            <Link href="/services" className="hover:underline">Services</Link>
            <Link href="/contact" className="hover:underline">Contact</Link>
          </div>
        </nav>

        {/* Bloc contact */}
        <div className="text-sm">
          <p className="font-semibold text-brand-linen">Contact</p>
          <div className="mt-3 space-y-2">
            <p className="flex items-center gap-2">
              <EnvelopeIcon className="h-4 w-4 text-brand-linen/90" />
              <a href={`mailto:${CONTACT.email}`} className="hover:underline text-brand-linen/90">
                {CONTACT.email}
              </a>
            </p>
            <p className="flex items-center gap-2">
              <PhoneIcon className="h-4 w-4 text-brand-linen/90" />
              <a href={`tel:${CONTACT.phone}`} className="hover:underline text-brand-linen/90">
                {CONTACT.phone}
              </a>
            </p>
            <p className="flex items-center gap-2">
              <HashtagIcon className="h-4 w-4 text-brand-linen/90" />
              <span className="text-brand-linen/90">
                Instagram : {CONTACT.instagram}
              </span>
            </p>
          </div>
        </div>
      </div>

     {/* Ligne de séparation + Copyright + mentions */}
<div className="border-t border-brand-linen/80 shadow-[0_-2px_6px_rgba(0,0,0,0.15)]">
  <div className="mx-auto max-w-container px-4 md:px-6 py-4 text-xs text-center text-brand-linen/80 space-y-2">
    <p>© {new Date().getFullYear()} <strong>Factu IDEL by MB</strong> — Tous droits réservés.</p>

    {/* Liens légaux avec espace */}
    <div className="flex items-center justify-center gap-6">
      <Link href="/mentions-legales" className="underline hover:text-brand-linen transition">
        Mentions légales
      </Link>
      <Link href="/politique-confidentialite" className="underline hover:text-brand-linen transition">
        Politique de confidentialité
      </Link>
    </div>
  </div>
</div>

    </footer>
  )
}
