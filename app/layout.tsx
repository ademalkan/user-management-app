import './globals.css'
import { Inter } from 'next/font/google'
import StoreProvider from '@/stores/store-provider';

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Student Management App',
  description: 'Created by Adem ALKAN',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <StoreProvider>
          {children}
        </StoreProvider>
      </body>
    </html>
  )
}
