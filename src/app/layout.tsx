import type { Metadata } from 'next';
import { Open_Sans } from 'next/font/google';
import { Footer } from '@/layout/Footer/Footer';
import '@/assets/styles/index.scss';
import { Providers } from '@/providers/Provider';
import Head from 'next/head';

type RootLayoutType = Readonly<{
  children: React.ReactNode;
}>;

export const metadata: Metadata = {
  title: 'FireKassa',
  description: 'FireKassa description',
};

const openSans = Open_Sans({
  subsets: ['cyrillic', 'latin'],
  style: ['normal', 'italic'],
  preload: true,
});

export default function RootLayout({ children }: RootLayoutType) {
  return (
    <html lang='ru'>
      <Head>
        <script src='//code.jivo.ru/widget/5wJO9iFX3' async />
      </Head>
      <body className={openSans.className}>
        <Providers>
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
