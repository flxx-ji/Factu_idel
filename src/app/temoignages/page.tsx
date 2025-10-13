import Section from '@/components/Section'

export const metadata = { title: 'Témoignages – Factu IDEL by MB' }

export default function Testimonials() {
  return (
    <Section>
      <h1 className="text-3xl md:text-4xl font-semibold text-brand-deep">Elles me font confiance</h1>
      <p className="mt-4">
        Découvrez les retours des infirmières libérales que j’ai accompagnées dans leur gestion de facturation.
        Leur satisfaction est ma plus belle récompense.
      </p>
      <div className="mt-8 rounded-card border border-dashed border-brand-pale p-8 text-center text-brand-ink/70">
        Zone témoignages — à ajouter plus tard.
      </div>
    </Section>
  )
}
