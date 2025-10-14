import Link from 'next/link'
import { CTA_TEXT } from '@/lib/constants'

export default function CTAButton({ href }: { href: string }) {
  return (
    // Composant bouton CTA avec accessibilité avancée
    <Link
      href={href}
      className="inline-block rounded-soft bg-brand-deep px-6 py-3 text-brand-linen font-semibold hover:bg-brand-soft transition focus:outline-none focus:ring-2 focus:ring-brand-deep focus:ring-offset-2"
      // Ajout des styles focus pour la navigation au clavier
      aria-label={`${CTA_TEXT} - Ouvrir le calendrier de rendez-vous`}
      // Commentaire accessibilité : description contextuelle de l'action
      role="button"
      // Commentaire accessibilité : rôle explicite pour les lecteurs d'écran
      tabIndex={0}
      // Commentaire accessibilité : s'assurer que le lien est focusable au clavier
    >
      {CTA_TEXT}
      {/* 
        Commentaire SEO : 
        Le texte du CTA est centralisé via les constantes pour une cohérence
        sur tout le site et un meilleur tracking
      */}
    </Link>
  )
}