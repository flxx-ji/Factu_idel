 
import type { Config } from 'tailwindcss'

const config: Config = {
  content: ['./src/app/**/*.{js,ts,jsx,tsx,mdx}', './src/components/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          deep: '#204C48',   // Vert profond
          soft: '#7CA59A',   // Vert doux
          pale: '#C7D6CE',   // Vert clair
          linen: '#F7F5F2',  // Blanc cassé
          ink: '#1B2B2B',    // Noir doux
        },
      },
      maxWidth: { container: '1100px' },
      borderRadius: { soft: '8px', card: '12px' },
    },
  },
  plugins: [],
}
export default config
