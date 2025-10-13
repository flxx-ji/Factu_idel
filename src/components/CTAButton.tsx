import Link from 'next/link'
import { CTA_TEXT } from '@/lib/constants'

export default function CTAButton({ href }: { href: string }) {
  return (
    <Link
      href={href}
      className="inline-block rounded-soft bg-brand-deep px-6 py-3 text-brand-linen font-semibold hover:bg-brand-soft transition"
    >
      {CTA_TEXT}
    </Link>
  )
}
