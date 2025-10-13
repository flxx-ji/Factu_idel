import Image from 'next/image'
import Link from 'next/link'

export default function Header() {
  return (
    <header className="sticky top-0 bg-brand-linen border-b border-brand-pale">
      <div className="mx-auto max-w-container h-16 px-4 md:px-6 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3">
          {/* width/height requis pour réserver l’espace */}
          <Image
            src="/logo.png"
            alt="Factu IDEL by M.B"
            width={60}
            height={60}
            priority  /* charge vite sur la page d’accueil */
          />
          <span className="font-semibold text-lg text-brand-deep">
            FACTU IDEL <span className="opacity-70">by M.B</span>
          </span>
        </Link>

        <nav className="flex gap-6 text-sm md:text-base">
          <Link href="/" className="text-brand-deep hover:text-brand-soft">Accueil</Link>
          <Link href="/services" className="text-brand-deep hover:text-brand-soft">Services</Link>
          <Link href="/contact" className="text-brand-deep hover:text-brand-soft">Contact</Link>
          <Link href="/a-propos" className="text-brand-deep hover:text-brand-soft">À propos</Link>
        </nav>
      </div>
    </header>
  )
}
