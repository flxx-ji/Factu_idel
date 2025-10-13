import Section from '@/components/Section'
import CTAButton from '@/components/CTAButton'
import { CONTACT } from '@/lib/constants'
import {
  ClipboardDocumentCheckIcon,
  FolderIcon,
  MagnifyingGlassIcon,
} from '@heroicons/react/24/outline'

export const metadata = { title: 'Services – Factu IDEL by MB' }

export default function Services() {
  return (
    <>
      <Section>
        <h1 className="text-3xl md:text-4xl font-semibold text-brand-deep">Mes services pour les IDEL</h1>
        <p className="mt-2 text-lg text-brand-ink/90">
          Des solutions simples et efficaces pour une facturation sans stress
        </p>

        <div className="mt-8 grid md:grid-cols-3 gap-6">
          {/* 1 */}
          <div className="rounded-card border border-brand-pale p-6 bg-white">
            <div className="flex items-center gap-3">
              <ClipboardDocumentCheckIcon className="h-6 w-6 text-brand-deep" aria-hidden="true" />
              <h3 className="text-xl font-medium text-brand-deep">
                Gestion complète de la facturation IDEL
              </h3>
            </div>
            <p className="mt-2 text-brand-ink">
              Traitement des ordonnances, cotation des actes, préparation des éléments de facturation et
              suivi des rejets CPAM.
              <em className="block text-brand-deep/80 mt-1">
                Objectif : une facturation juste, conforme et sans perte de temps.
              </em>
            </p>
          </div>

          {/* 2 */}
          <div className="rounded-card border border-brand-pale p-6 bg-white">
            <div className="flex items-center gap-3">
              <FolderIcon className="h-6 w-6 text-brand-deep" aria-hidden="true" />
              <h3 className="text-xl font-medium text-brand-deep">Accompagnement administratif</h3>
            </div>
            <p className="mt-2 text-brand-ink">
              Aide à la constitution des dossiers patients, gestion des ordonnances et suivi des documents
              nécessaires à la facturation.
              <em className="block text-brand-deep/80 mt-1">
                Ensemble, nous construisons une organisation fluide et une facturation toujours à jour.
              </em>
            </p>
          </div>

          {/* 3 */}
          <div className="rounded-card border border-brand-pale p-6 bg-white">
            <div className="flex items-center gap-3">
              <MagnifyingGlassIcon className="h-6 w-6 text-brand-deep" aria-hidden="true" />
              <h3 className="text-xl font-medium text-brand-deep">Mini audit gratuit</h3>
            </div>
            <p className="mt-2 text-brand-ink">
              Un entretien offert pour analyser vos besoins et identifier les points d’amélioration dans
              votre facturation.
              <em className="block text-brand-deep/80 mt-1">
                Une première étape pour optimiser votre activité IDEL.
              </em>
            </p>
          </div>
        </div>

        <div className="mt-8">
          <CTAButton href={CONTACT.calendly} />
        </div>
      </Section>
    </>
  )
}
