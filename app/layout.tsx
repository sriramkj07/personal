import './globals.css'
import { JetBrains_Mono } from 'next/font/google'
import { ThemeProvider } from '@/components/theme-provider'

export const metadata = {
  title: 'Sriram Kothandaraman',
  description: 'A personal website, thats all folks'
}

const jetbrainsMono = JetBrains_Mono({ 
  subsets: ['latin'],
  display: 'swap'
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={jetbrainsMono.className}>
        <ThemeProvider>
          <div className="min-h-screen bg-white dark:bg-gray-950 text-black dark:text-white transition-colors">
            {children}
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}
