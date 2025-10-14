import Section from '@/components/Section'
import CTAButton from '@/components/CTAButton'
import { CONTACT } from '@/lib/constants'
import {
  ClipboardDocumentCheckIcon,
  FolderIcon,
  MagnifyingGlassIcon,
} from '@heroicons/react/24/outline'

// Métadonnées SEO optimisées pour la page services
export const metadata = { 
  title: 'Services Facturation IDEL – Factu IDEL by MB | Gestion CPAM',
  description: 'Services de facturation IDEL : gestion complète CPAM, accompagnement administratif et audit gratuit. Optimisez votre temps et votre revenu.'
}

export default function Services() {
  return (
    <>
      <Section>
        {/* Titre principal avec structure hiérarchique SEO */}
        <h1 className="text-3xl md:text-4xl font-semibold text-brand-deep">
          Mes services pour les IDEL
        </h1>
        {/* Sous-titre optimisé pour le référencement */}
        <p className="mt-2 text-lg text-brand-ink/90">
          Solutions de facturation IDEL simplifiées : gestion CPAM, accompagnement administratif et audit gratuit
        </p>

        {/* Grille des services avec structure sémantique */}
        <div className="mt-8 grid md:grid-cols-3 gap-6" role="list" aria-label="Liste des services proposés">
          {/* Service 1 - Gestion complète de la facturation */}
          <div className="rounded-card border border-brand-pale p-6 bg-white" role="listitem">
            <div className="flex items-center gap-3">
              <ClipboardDocumentCheckIcon 
                className="h-6 w-6 text-brand-deep" 
                aria-hidden="true" 
              />
              {/* Titre du service avec balise h3 pour la hiérarchie SEO */}
              <h3 className="text-xl font-medium text-brand-deep">
                Gestion complète de la facturation IDEL
              </h3>
            </div>
            {/* Description détaillée du service avec mots-clés */}
            <p className="mt-2 text-brand-ink">
              Traitement des ordonnances, cotation des actes, préparation des éléments de facturation et
              suivi des rejets CPAM.
              <em className="block text-brand-deep/80 mt-1">
                Objectif : une facturation juste, conforme et sans perte de temps.
              </em>
              {/* Commentaire SEO : inclusion des termes "CPAM" et "facturation conforme" */}
            </p>
          </div>

          {/* Service 2 - Accompagnement administratif */}
          <div className="rounded-card border border-brand-pale p-6 bg-white" role="listitem">
            <div className="flex items-center gap-3">
              <FolderIcon 
                className="h-6 w-6 text-brand-deep" 
                aria-hidden="true" 
              />
              <h3 className="text-xl font-medium text-brand-deep">
                Accompagnement administratif IDEL
              </h3>
              {/* Commentaire accessibilité : titre précis avec "IDEL" pour le contexte */}
            </div>
            <p className="mt-2 text-brand-ink">
              Aide à la constitution des dossiers patients, gestion des ordonnances et suivi des documents
              nécessaires à la facturation.
              <em className="block text-brand-deep/80 mt-1">
                Ensemble, nous construisons une organisation fluide et une facturation toujours à jour.
              </em>
              {/* Commentaire SEO : "dossiers patients" et "organisation fluide" pour le référencement */}
            </p>
          </div>

          {/* Service 3 - Mini audit gratuit */}
          <div className="rounded-card border border-brand-pale p-6 bg-white" role="listitem">
            <div className="flex items-center gap-3">
              <MagnifyingGlassIcon 
                className="h-6 w-6 text-brand-deep" 
                aria-hidden="true" 
              />
              <h3 className="text-xl font-medium text-brand-deep">
                Audit facturation IDEL gratuit
              </h3>
              {/* Commentaire SEO : "Audit facturation IDEL" comme expression clé */}
            </div>
            <p className="mt-2 text-brand-ink">
              Un entretien offert pour analyser vos besoins et identifier les points d&apos;amélioration dans
              votre facturation.
              <em className="block text-brand-deep/80 mt-1">
                Une première étape pour optimiser votre activité IDEL.
              </em>
              {/* Commentaire marketing : "offert" et "optimiser" comme mots persuasifs */}
            </p>
          </div>
        </div>

        {/* Section Call-to-Action avec accessibilité */}
        <div className="mt-8" aria-label="Prendre rendez-vous pour un service">
          <CTAButton href={CONTACT.calendly} />
          {/* Commentaire accessibilité : le aria-label explique l'action du bouton */}
        </div>
      </Section>
    </>
  )
}