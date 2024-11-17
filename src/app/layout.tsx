import type { Metadata } from 'next';
import { Open_Sans } from 'next/font/google';
import { Header } from '@/layout/Header/Header';
import { Footer } from '@/layout/Footer/Footer';
import '@/assets/styles/index.scss'

type RootLayoutType = Readonly<{
  children: React.ReactNode;
}>;

export const metadata: Metadata = {
  title: 'FireKassa',
  description: 'FireKassa description',
};

const openSans = Open_Sans({
  subsets: ['cyrillic', 'latin'],
});

export default function RootLayout({ children }: RootLayoutType) {
  return (
    <html lang='ru'>
      <body className={openSans.className}>
        <Header/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
