import Section from '@/components/Section'

export const metadata = { title: 'Politique de confidentialité – Factu IDEL by MB' }

export default function PolitiqueConfidentialite() {
  return (
    <Section>
      <h1 className="text-3xl md:text-4xl font-semibold text-brand-deep mb-6">Politique de confidentialité</h1>

      <div className="space-y-6 text-brand-ink">
        <section>
          <h2 className="text-xl font-semibold text-brand-deep">1. Responsable du traitement</h2>
          <p className="mt-2">
            <strong>Factu IDEL by MB</strong> – Maténin BAMBA, contact : mateninfacturation@gmail.com.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-brand-deep">2. Données collectées</h2>
          <p className="mt-2">
            Dans le cadre d’un échange ou d’une prise de rendez-vous (Calendly), nous pouvons collecter :
            nom, prénom, adresse email, téléphone, et le contenu de votre message/les informations du rendez-vous.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-brand-deep">3. Finalités</h2>
          <ul className="mt-2 list-disc pl-5 space-y-1">
            <li>Répondre à vos demandes et organiser un appel découverte.</li>
            <li>Préparer une proposition d’accompagnement adaptée.</li>
            <li>Suivi de la relation client.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-brand-deep">4. Base légale</h2>
          <p className="mt-2">
            L’intérêt légitime de la responsable du traitement et/ou votre consentement (prise de rendez-vous).
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-brand-deep">5. Destinataires et sous-traitants</h2>
          <p className="mt-2">
            Vos données ne sont pas revendues. La prise de rendez-vous est gérée via le service tiers <strong>Calendly</strong>.
            Veuillez consulter sa politique : <a href="https://calendly.com/privacy" target="_blank" className="underline hover:text-brand-deep">calendly.com/privacy</a>.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-brand-deep">6. Durées de conservation</h2>
          <p className="mt-2">
            Les messages et informations liées aux échanges sont conservés au maximum <strong>12 mois</strong> puis supprimés,
            sauf obligation légale contraire ou relation contractuelle en cours.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-brand-deep">7. Vos droits (RGPD)</h2>
          <p className="mt-2">
            Vous disposez d’un droit d’accès, de rectification, d’opposition, de limitation et d’effacement de vos données.
            Pour exercer ces droits, contactez&nbsp;
            <a href="mailto:mateninfacturation@gmail.com" className="underline hover:text-brand-deep">
              mateninfacturation@gmail.com
            </a>. Vous pouvez aussi introduire une réclamation auprès de la CNIL (cnil.fr).
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-brand-deep">8. Cookies</h2>
          <p className="mt-2">
            Le site ne dépose pas de cookies de mesure d’audience ni publicitaires. Si des outils de suivi sont ajoutés
            ultérieurement, un bandeau de consentement sera mis en place.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-brand-deep">9. Sécurité</h2>
          <p className="mt-2">
            Nous mettons en œuvre des mesures raisonnables pour protéger vos informations (accès restreint, outils
            sécurisés). Évitez d’envoyer des données de santé sensibles via les formulaires ou par email.
          </p>
        </section>
      </div>
    </Section>
  )
}
