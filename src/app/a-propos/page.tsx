import Section from '@/components/Section'

export const metadata = { title: 'À propos – Factu IDEL by MB' }

export default function About() {
  return (
    <Section>
      <h1 className="text-3xl md:text-4xl font-semibold text-brand-deep">À propos de Maténin</h1>
      <div className="mt-6 space-y-4">
        <p>
          Après plus de dix ans d’expérience dans des domaines variés tels que l’accueil, la gestion administrative et la
          relation client, j’ai choisi d’entreprendre une reconversion professionnelle.
        </p>
        <p>
          Forte de cette expérience, j’ai décidé de mettre mes compétences au service des infirmiers libéraux en me
          spécialisant dans le domaine de la facturation.
        </p>
        <p>
          Habituée à des environnements exigeants comme le milieu aéroportuaire et le commerce international, j’ai
          développé un sens aigu de l’organisation, de la rigueur et du service client.
        </p>
        <p>
          Aujourd’hui, j’accompagne les IDEL dans la gestion quotidienne de leur facturation, afin de leur offrir plus de
          sérénité et de temps pour leurs patients.
        </p>
        <p><strong>Mon engagement : disponibilité, écoute et efficacité.</strong></p>
        <p>Chez <strong>Factu IDEL by MB</strong>, votre facturation devient simple, fluide et sécurisée.</p>
      </div>
    </Section>
  )
}
