import Section from '@/components/Section'
import CTAButton from '@/components/CTAButton'
import { CONTACT } from '@/lib/constants'

export default function Home() {
  return (
    // Section principale avec rôle landmark implicite
    <Section className="text-center">
      <div className="mx-auto max-w-3xl">
        {/* Titre principal de la page avec hiérarchie H1 pour le SEO */}
        <h1 className="text-4xl md:text-5xl font-semibold text-brand-deep">
          Gestion et facturation IDEL en toute sérénité
        </h1>
        {/* Commentaire SEO : titre principal avec mots-clés "facturation IDEL" */}

        {/* Sous-titre en italique pour accentuer le message principal */}
        <p className="mt-4 italic text-lg text-brand-ink/90">
          Concentrez-vous sur vos patients, je m&apos;occupe du reste.
        </p>
        {/* Commentaire accessibilité : texte italic mais reste lisible */}

        {/* Paragraphe de présentation avec mise en valeur des points clés */}
        <p className="mt-6 text-brand-ink">
          Je suis <strong>Maténin</strong>, facturière indépendante spécialisée dans l&apos;accompagnement des{' '}
          <strong>infirmiers et infirmières libérales</strong>. J&apos;aide les professionnels de santé à gérer{' '}
          leur facturation et leurs démarches <strong>CPAM</strong> en toute tranquillité.{' '}
          <strong className="text-brand-deep">Premier échange gratuit</strong> pour faire le point sur vos besoins.
        </p>
        {/* Commentaire SEO : mots-clés stratégiques "CPAM", "infirmières libérales" */}

        {/* Section Call-to-Action avec accessibilité */}
        <div className="mt-8" aria-label="Prendre rendez-vous pour un premier échange gratuit">
          <CTAButton href={CONTACT.calendly} />
          {/* 
            Commentaire accessibilité : 
            Le aria-label décrit l&apos;action du bouton pour les lecteurs d&apos;écran
          */}
        </div>
      </div>
    </Section>
  )
}