import { ReactNode } from 'react'

// Composant Section réutilisable avec accessibilité et SEO
export default function Section({ 
  children, 
  className = '',
  id,
  ariaLabelledby,
  ariaLabel
}: { 
  children: ReactNode; 
  className?: string;
  id?: string;
  ariaLabelledby?: string;
  ariaLabel?: string;
}) {
  return (
    // Section avec attributs d'accessibilité optionnels
    <section 
      className="w-full px-4 md:px-6 py-16 md:py-24"
      id={id} // ID optionnel pour l'accessibilité (ancres, skip links)
      aria-labelledby={ariaLabelledby} // Relie la section à son titre
      aria-label={ariaLabel} // Label descriptif pour les lecteurs d'écran
      /*
        Commentaire accessibilité :
        - aria-labelledby : utilisé quand la section a un titre visible (h2, h3, etc.)
        - aria-label : utilisé quand la section n'a pas de titre visible mais besoin d'une description
        - id : pour créer des ancres ou des références
      */
    >
      {/* Conteneur avec largeur maximale et classes personnalisables */}
      <div className={`mx-auto w-full max-w-container ${className}`}>
        {children}
      </div>
    </section>
  )
}

/*
  Exemples d'utilisation :

  // Section avec titre lié accessibilité
  <Section id="services" ariaLabelledby="services-title">
    <h2 id="services-title">Nos Services</h2>
    ...
  </Section>

  // Section sans titre visible mais avec description
  <Section ariaLabel="Témoignages de clients satisfaits">
    <div>...</div>
  </Section>

  // Section standard
  <Section className="text-center">
    <h2>Contact</h2>
    ...
  </Section>
*/