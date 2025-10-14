import Section from '@/components/Section'

// Métadonnées SEO optimisées pour la page de politique de confidentialité
export const metadata = { 
  title: 'Politique de confidentialité – Factu IDEL by MB | Protection des données',
  description: 'Découvrez comment Factu IDEL by MB protège vos données personnelles. Conformité RGPD, gestion des données clients et informations sur vos droits.'
}

export default function PolitiqueConfidentialite() {
  return (
    <Section>
      {/* Titre principal avec structure hiérarchique SEO */}
      <h1 className="text-3xl md:text-4xl font-semibold text-brand-deep mb-6">
        Politique de confidentialité
      </h1>
      {/* Description cachée pour le SEO et l'accessibilité */}
      <div className="sr-only">
        Politique de protection des données personnelles pour les utilisateurs de Factu IDEL by MB
      </div>

      <div className="space-y-6 text-brand-ink">
        {/* Section 1 - Responsable du traitement */}
        <section aria-labelledby="responsable-traitement">
          <h2 id="responsable-traitement" className="text-xl font-semibold text-brand-deep">
            1. Responsable du traitement
          </h2>
          {/* Structure sémantique pour les informations de contact */}
          <p className="mt-2">
            <strong>Factu IDEL by MB</strong> – Maténin BAMBA, contact : 
            <a 
              href="mailto:mateninfacturation@gmail.com" 
              className="underline hover:text-brand-deep ml-1"
              aria-label="Contacter Maténin BAMBA par email"
            >
              mateninfacturation@gmail.com
            </a>.
            {/* Commentaire accessibilité : lien email identifié clairement */}
          </p>
        </section>

        {/* Section 2 - Données collectées */}
        <section aria-labelledby="donnees-collectees">
          <h2 id="donnees-collectees" className="text-xl font-semibold text-brand-deep">
            2. Données collectées
          </h2>
          <p className="mt-2">
            Dans le cadre d&apos;un échange ou d&apos;une prise de rendez-vous (Calendly), nous pouvons collecter :
            nom, prénom, adresse email, téléphone, et le contenu de votre message/les informations du rendez-vous.
            {/* Commentaire SEO : mention explicite des données collectées */}
          </p>
        </section>

        {/* Section 3 - Finalités */}
        <section aria-labelledby="finalites">
          <h2 id="finalites" className="text-xl font-semibold text-brand-deep">
            3. Finalités
          </h2>
          {/* Liste non ordonnée pour les finalités du traitement */}
          <ul className="mt-2 list-disc pl-5 space-y-1" role="list">
            <li>Répondre à vos demandes et organiser un appel découverte.</li>
            <li>Préparer une proposition d&apos;accompagnement adaptée.</li>
            <li>Suivi de la relation client.</li>
            {/* Commentaire accessibilité : rôle list pour clarifier la sémantique */}
          </ul>
        </section>

        {/* Section 4 - Base légale */}
        <section aria-labelledby="base-legale">
          <h2 id="base-legale" className="text-xl font-semibold text-brand-deep">
            4. Base légale
          </h2>
          <p className="mt-2">
            L&apos;intérêt légitime de la responsable du traitement et/ou votre consentement (prise de rendez-vous).
            {/* Commentaire RGPD : mention des bases légales conformes */}
          </p>
        </section>

        {/* Section 5 - Destinataires et sous-traitants */}
        <section aria-labelledby="destinataires">
          <h2 id="destinataires" className="text-xl font-semibold text-brand-deep">
            5. Destinataires et sous-traitants
          </h2>
          <p className="mt-2">
            Vos données ne sont pas revendues. La prise de rendez-vous est gérée via le service tiers <strong>Calendly</strong>.
            Veuillez consulter sa politique : 
            <a 
              href="https://calendly.com/privacy" 
              target="_blank" 
              rel="noopener noreferrer"
              className="underline hover:text-brand-deep ml-1"
              aria-label="Consulter la politique de confidentialité de Calendly (ouvre dans un nouvel onglet)"
            >
              calendly.com/privacy
            </a>.
            {/* Commentaire sécurité : noopener noreferrer pour les liens externes */}
          </p>
        </section>

        {/* Section 6 - Durées de conservation */}
        <section aria-labelledby="durees-conservation">
          <h2 id="durees-conservation" className="text-xl font-semibold text-brand-deep">
            6. Durées de conservation
          </h2>
          <p className="mt-2">
            Les messages et informations liées aux échanges sont conservés au maximum <strong>12 mois</strong> puis supprimés,
            sauf obligation légale contraire ou relation contractuelle en cours.
            {/* Commentaire RGPD : durée précise conforme au principe de limitation */}
          </p>
        </section>

        {/* Section 7 - Vos droits RGPD */}
        <section aria-labelledby="droits-rgpd">
          <h2 id="droits-rgpd" className="text-xl font-semibold text-brand-deep">
            7. Vos droits (RGPD)
          </h2>
          <p className="mt-2">
            Vous disposez d&apos;un droit d&apos;accès, de rectification, d&apos;opposition, de limitation et d&apos;effacement de vos données.
            Pour exercer ces droits, contactez&nbsp;
            <a 
              href="mailto:mateninfacturation@gmail.com" 
              className="underline hover:text-brand-deep"
              aria-label="Exercer vos droits RGPD par email"
            >
              mateninfacturation@gmail.com
            </a>. 
            Vous pouvez aussi introduire une réclamation auprès de la CNIL (
            <a 
              href="https://cnil.fr" 
              target="_blank" 
              rel="noopener noreferrer"
              className="underline hover:text-brand-deep"
              aria-label="Portail de la CNIL - Commission Nationale de l'Informatique et des Libertés (ouvre dans un nouvel onglet)"
            >
              cnil.fr
            </a>).
            {/* Commentaire accessibilité : double information texte + aria-label */}
          </p>
        </section>

        {/* Section 8 - Cookies */}
        <section aria-labelledby="cookies">
          <h2 id="cookies" className="text-xl font-semibold text-brand-deep">
            8. Cookies
          </h2>
          <p className="mt-2">
            Le site ne dépose pas de cookies de mesure d&apos;audience ni publicitaires. Si des outils de suivi sont ajoutés
            ultérieurement, un bandeau de consentement sera mis en place.
            {/* Commentaire SEO : mention absence de cookies pour transparence */}
          </p>
        </section>

        {/* Section 9 - Sécurité */}
        <section aria-labelledby="securite">
          <h2 id="securite" className="text-xl font-semibold text-brand-deep">
            9. Sécurité
          </h2>
          <p className="mt-2">
            Nous mettons en œuvre des mesures raisonnables pour protéger vos informations (accès restreint, outils
            sécurisés). Évitez d&apos;envoyer des données de santé sensibles via les formulaires ou par email.
            {/* Commentaire sécurité : recommandation proactive pour l'utilisateur */}
          </p>
        </section>
      </div>
    </Section>
  )
}