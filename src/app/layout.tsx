import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'SAAMDIS',
  description: 'SAAMDIS, votre distributeur alimentaire de confiance à La Réunion. Spécialisé dans les snacks, boissons, chips et confiseries.',
  icons: {
    icon: '/favicon.ico',
    apple: '/apple-touch-icon.png',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr">
      <head>
        <script src="https://analytics.ahrefs.com/analytics.js" data-key="9TUvzYwzCrFt3q2MPLC7Eg" async></script>
        <script>
          var ahrefs_analytics_script = document.createElement('script');
          ahrefs_analytics_script.async = true;
          ahrefs_analytics_script.src = 'https://analytics.ahrefs.com/analytics.js';
          ahrefs_analytics_script.setAttribute('data-key', '9TUvzYwzCrFt3q2MPLC7Eg');
          document.getElementsByTagName('head')[0].appendChild(ahrefs_analytics_script);
        </script>
      </head>
      <body className={inter.className}>
        {children}
      </body>
    </html>
  )
} 