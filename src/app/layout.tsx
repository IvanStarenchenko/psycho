import { Header } from '@/app/layout/Header/Header'
import { jacquesFrancoisShadow, libreBaskerville, openSans, sovMode } from '../lib/fonts'
import './globals.css'
import { Footer } from './layout/Footer/Footer'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="en"
      className={`${jacquesFrancoisShadow.variable} ${libreBaskerville.variable} ${openSans.variable} ${sovMode.variable}`}
    >
      <body className="flex flex-col min-h-screen w-full antialiased">
        <Header />
        <main className="flex-1 w-full">{children}</main>
        <Footer />
      </body>
    </html>
  )
}