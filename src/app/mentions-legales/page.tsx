import Section from '@/components/Section'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Mentions légales – Factu IDEL by MB',
  description:
    'Mentions légales du site Factu IDEL by MB – Informations sur la propriétaire Maténin Bamba, l’hébergement et les droits liés aux contenus du site.',
  openGraph: {
    title: 'Mentions légales – Factu IDEL by MB',
    description:
      'Retrouvez toutes les informations légales concernant le site Factu IDEL by MB, son hébergeur et la propriétaire Maténin Bamba.',
    url: 'https://factu-idel.fr/mentions-legales',
    siteName: 'Factu IDEL by MB',
    images: [
      {
        url: '/logo.png',
        width: 600,
        height: 600,
        alt: 'Logo Factu IDEL by MB',
      },
    ],
    locale: 'fr_FR',
    type: 'website',
  },
}

export default function MentionsLegales() {
  return (
    <Section>
      <h1 className="text-3xl md:text-4xl font-semibold text-brand-deep mb-6">
        Mentions légales
      </h1>

      <div className="space-y-6 text-brand-ink leading-relaxed">
        {/* Éditeur */}
        <section>
          <h2 className="text-xl font-semibold text-brand-deep">
            Éditeur du site
          </h2>
          <p className="mt-2">
            <strong>Factu IDEL by MB</strong>
            <br />
            Propriétaire / Responsable de la publication :{' '}
            <strong>Maténin BAMBA</strong>
            <br />
            Statut : Micro-entreprise (facturière indépendante IDEL)
            <br />
            Adresse professionnelle : <em>[à compléter]</em>
            <br />
            Téléphone : 06 52 56 99 49
            <br />
            Email :{' '}
            <a
              href="mailto:mateninfacturation@gmail.com"
              className="underline hover:text-brand-deep"
            >
              mateninfacturation@gmail.com
            </a>
            <br />
            N° SIREN/SIRET : <em>[à compléter]</em>
          </p>
        </section>

        {/* Hébergement */}
        <section>
          <h2 className="text-xl font-semibold text-brand-deep">
            Hébergement
          </h2>
          <p className="mt-2">
            Le site <strong>Factu IDEL by MB</strong> est hébergé par :
            <br />
            <strong>Vercel Inc.</strong>
            <br />
            340 S Lemon Ave #4133, Walnut, CA 91789, États-Unis
            <br />
            Site :{' '}
            <a
              href="https://vercel.com"
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-brand-deep"
            >
              vercel.com
            </a>
          </p>
        </section>

        {/* Propriété intellectuelle */}
        <section>
          <h2 className="text-xl font-semibold text-brand-deep">
            Propriété intellectuelle
          </h2>
          <p className="mt-2">
            L’ensemble des contenus présents sur le site{' '}
            <strong>Factu IDEL by MB</strong> (textes, images, graphismes,
            logos, icônes, etc.) est protégé par les lois françaises et
            internationales relatives à la propriété intellectuelle.
          </p>
          <p className="mt-2">
            Toute reproduction, représentation, modification, publication ou
            adaptation, totale ou partielle, de ces éléments, quel que soit le
            moyen ou le procédé utilisé, est interdite sans l’autorisation
            écrite préalable de <strong>Maténin Bamba</strong>.
          </p>
        </section>

        {/* Limitation de responsabilité */}
        <section>
          <h2 className="text-xl font-semibold text-brand-deep">
            Limitation de responsabilité
          </h2>
          <p className="mt-2">
            <strong>Factu IDEL by MB</strong> met tout en œuvre pour assurer la
            fiabilité des informations diffusées sur le site. Cependant, la
            propriétaire ne pourra être tenue responsable des erreurs ou
            omissions, ni de l’utilisation qui pourrait être faite de ces
            informations.
          </p>
        </section>

        {/* Données personnelles */}
        <section>
          <h2 className="text-xl font-semibold text-brand-deep">
            Données personnelles
          </h2>
          <p className="mt-2">
            Le site ne collecte des informations personnelles que pour permettre
            la prise de contact ou la réservation d’un appel via Calendly. Pour
            plus de détails, consultez la{' '}
            <a
              href="/politique-confidentialite"
              className="underline hover:text-brand-deep"
            >
              Politique de confidentialité
            </a>
            .
          </p>
        </section>

        {/* Contact */}
        <section>
          <h2 className="text-xl font-semibold text-brand-deep">Contact</h2>
          <p className="mt-2">
            Pour toute question ou signalement de contenu, vous pouvez écrire à :
            <br />
            <a
              href="mailto:mateninfacturation@gmail.com"
              className="underline hover:text-brand-deep"
            >
              mateninfacturation@gmail.com
            </a>
          </p>
        </section>
      </div>
    </Section>
  )
}
