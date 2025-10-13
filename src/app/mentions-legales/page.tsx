import Section from '@/components/Section'

export const metadata = { title: 'Mentions légales – Factu IDEL by MB' }

export default function MentionsLegales() {
  return (
    <Section>
      <h1 className="text-3xl md:text-4xl font-semibold text-brand-deep mb-6">Mentions légales</h1>

      <div className="space-y-6 text-brand-ink">
        <section>
          <h2 className="text-xl font-semibold text-brand-deep">Éditeur du site</h2>
          <p className="mt-2">
            <strong>Factu IDEL by MB</strong><br />
            Propriétaire / Responsable de la publication : <strong>Maténin BAMBA</strong><br />
            Statut : Micro-entreprise (facturière indépendante IDEL)<br />
            Adresse professionnelle : <em>[à compléter]</em><br />
            Téléphone : 06&nbsp;52&nbsp;56&nbsp;99&nbsp;49<br />
            Email : mateninfacturation@gmail.com<br />
            N° SIREN/SIRET : <em>[à compléter]</em>
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-brand-deep">Hébergement</h2>
          <p className="mt-2">
            Vercel Inc., 340 S Lemon Ave #4133, Walnut, CA 91789, États-Unis — Site : vercel.com
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-brand-deep">Propriété intellectuelle</h2>
          <p className="mt-2">
            L’ensemble des contenus (textes, visuels, éléments graphiques) est la propriété de Factu IDEL by MB.
            Toute reproduction, représentation ou adaptation, totale ou partielle, est interdite sans autorisation
            préalable.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-brand-deep">Contact</h2>
          <p className="mt-2">
            Pour toute question, vous pouvez écrire à&nbsp;
            <a href="mailto:mateninfacturation@gmail.com" className="underline hover:text-brand-deep">
              mateninfacturation@gmail.com
            </a>.
          </p>
        </section>
      </div>
    </Section>
  )
}
