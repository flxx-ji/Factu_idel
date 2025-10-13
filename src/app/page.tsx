import Section from '@/components/Section'
import CTAButton from '@/components/CTAButton'
import { CONTACT } from '@/lib/constants'

export default function Home() {
  return (
    <Section className="text-center">
      <div className="mx-auto max-w-3xl">
        <h1 className="text-4xl md:text-5xl font-semibold text-brand-deep">
          Gestion et facturation IDEL en toute sérénité
        </h1>

        <p className="mt-4 italic text-lg text-brand-ink/90">
          Concentrez-vous sur vos patients, je m’occupe du reste.
        </p>

        <p className="mt-6 text-brand-ink">
          Je suis Maténin, facturière indépendante spécialisée dans l’accompagnement des infirmiers et infirmières
          libérales. J’aide les professionnels de santé à gérer leur facturation et leurs démarches CPAM en toute
          tranquillité. <strong>Premier échange gratuit</strong> pour faire le point sur vos besoins.
        </p>

        <div className="mt-8">
          <CTAButton href={CONTACT.calendly} />
        </div>
      </div>
    </Section>
  )
}
