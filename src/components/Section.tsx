import { ReactNode } from 'react'
export default function Section({ children, className = '' }: { children: ReactNode; className?: string }) {
  return (
    <section className="w-full px-4 md:px-6 py-16 md:py-24">
      <div className={`mx-auto w-full max-w-container ${className}`}>{children}</div>
    </section>
  )
}
