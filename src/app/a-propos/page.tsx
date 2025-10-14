import Section from '@/components/Section'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'À propos de Maténin – Factu IDEL by MB',
  description:
    'Découvrez le parcours de Maténin, facturière indépendante spécialisée dans la gestion et la facturation des infirmiers libéraux (IDEL). Expérience, rigueur et accompagnement personnalisé.',
  openGraph: {
    title: 'À propos de Maténin – Factu IDEL by MB',
    description:
      'Factu IDEL by MB accompagne les infirmiers libéraux dans la gestion quotidienne de leur facturation, pour plus de sérénité et d’efficacité.',
    url: 'https://factu-idel.fr/a-propos',
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

export default function About() {
  return (
    <Section>
      <h1 className="text-3xl md:text-4xl font-semibold text-brand-deep">
        À propos de Maténin
      </h1>

      <div className="mt-6 space-y-4 text-brand-ink leading-relaxed">
        <p>
          Après plus de dix ans d’expérience dans des domaines variés tels que l’accueil,
          la gestion administrative et la relation client, j’ai choisi d’entreprendre
          une reconversion professionnelle.
        </p>

        <p>
          Forte de cette expérience, j’ai décidé de mettre mes compétences au service
          des infirmiers libéraux en me spécialisant dans le domaine de la facturation.
        </p>

        <p>
          Habituée à des environnements exigeants comme le milieu aéroportuaire et
          le commerce international, j’ai développé un sens aigu de l’organisation,
          de la rigueur et du service client.
        </p>

        <p>
          Aujourd’hui, j’accompagne les IDEL dans la gestion quotidienne de leur
          facturation, afin de leur offrir plus de sérénité et de temps pour leurs patients.
        </p>

        <p className="font-semibold text-brand-deep">
          Mon engagement : disponibilité, écoute et efficacité.
        </p>

        <p>
          Chez <strong>Factu IDEL by MB</strong>, votre facturation devient simple,
          fluide et sécurisée.
        </p>
      </div>
    </Section>
  )
}
