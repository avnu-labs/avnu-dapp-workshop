import '../styles/globals.css'
import { Inter } from 'next/font/google'
import {Providers} from "@/lib/shared/layout/providers";

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Quantum Leap',
  description: 'TODO - add description',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <Providers>
        {children}
      </Providers>
      </body>
    </html>
  )
}
