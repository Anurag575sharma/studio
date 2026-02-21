import type { Metadata } from 'next';
import './globals.css';
import { cn } from '@/lib/utils';
import { Toaster } from '@/components/ui/toaster';
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { ChatbotWidget } from '@/components/chatbot/chatbot-widget';

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_APP_URL || 'https://inspiremanit.in'),
  title: {
    default: 'INSPIRE MANIT',
    template: '%s | INSPIRE MANIT',
  },
  description: 'The official website of INSPIRE MANIT, a student society at MANIT Bhopal focused on technical excellence, cultural promotion, and principle-centered leadership.',
  icons: {
    icon: 'https://res.cloudinary.com/dauf7v7uz/image/upload/v1771601447/InspireLogo_tuwl3m.jpg',
    shortcut: 'https://res.cloudinary.com/dauf7v7uz/image/upload/v1771601447/InspireLogo_tuwl3m.jpg',
    apple: 'https://res.cloudinary.com/dauf7v7uz/image/upload/v1771601447/InspireLogo_tuwl3m.jpg',
  },
  openGraph: {
    title: 'INSPIRE MANIT',
    description: 'The official website of INSPIRE MANIT, a student society at MANIT Bhopal.',
    url: process.env.NEXT_PUBLIC_APP_URL || 'https://inspiremanit.in',
    siteName: 'INSPIRE MANIT',
    images: [
      {
        url: 'https://res.cloudinary.com/dauf7v7uz/image/upload/v1771601447/InspireLogo_tuwl3m.jpg',
        width: 512,
        height: 512,
        alt: 'INSPIRE MANIT Logo',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'INSPIRE MANIT',
    description: 'The official website of INSPIRE MANIT, a student society at MANIT Bhopal.',
    images: ['https://res.cloudinary.com/dauf7v7uz/image/upload/v1771601447/InspireLogo_tuwl3m.jpg'],
  },
  keywords: ['INSPIRE MANIT', 'MANIT Bhopal', 'student society', 'technical society', 'cultural society', 'filmmaking', 'education', 'RangManch', 'Avantikulam'],
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <head>
        <link rel="icon" href="https://res.cloudinary.com/dauf7v7uz/image/upload/v1771601447/InspireLogo_tuwl3m.jpg" sizes="any" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body
        className={cn(
          'flex min-h-screen flex-col bg-background font-body antialiased'
        )}
      >
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <Toaster />
        <ChatbotWidget />
      </body>
    </html>
  );
}
