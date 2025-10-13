import Section from '@/components/Section'
import { CONTACT } from '@/lib/constants'
import CTAButton from '@/components/CTAButton'
import {
  EnvelopeIcon,
  PhoneIcon,
  HashtagIcon,
} from '@heroicons/react/24/outline'

export const metadata = { title: 'Contact – Factu IDEL by MB' }

export default function Contact() {
  return (
    <Section>
      <h1 className="text-3xl md:text-4xl font-semibold text-brand-deep">Contactez-moi</h1>
      <p className="mt-4 text-brand-ink/90">
        Une question ? Un besoin spécifique ? Je serai ravie d’échanger avec vous.
      </p>

      <div className="mt-6 space-y-3 text-brand-ink">
        <p className="flex items-center gap-2">
          <EnvelopeIcon className="h-5 w-5 text-brand-deep" aria-hidden="true" />
          <a href={`mailto:${CONTACT.email}`} className="underline hover:text-brand-deep">
            {CONTACT.email}
          </a>
        </p>

        <p className="flex items-center gap-2">
          <PhoneIcon className="h-5 w-5 text-brand-deep" aria-hidden="true" />
          <a href={`tel:${CONTACT.phone}`} className="hover:text-brand-deep">
            {CONTACT.phone}
          </a>
        </p>

        <p className="flex items-center gap-2">
          <HashtagIcon className="h-5 w-5 text-brand-deep" aria-hidden="true" />
          <span>Instagram : {CONTACT.instagram}</span>
        </p>
      </div>

      <div className="mt-8">
        <CTAButton href={CONTACT.calendly} />
      </div>
    </Section>
  )
}
