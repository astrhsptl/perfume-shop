import { ProductsHeader } from '@/widgets';
import { Metadata } from 'next';

interface ProductProps {}

export const metadata: Metadata = {
  title: 'Духи в Ростове-на-Дону | Famous perfume',
  description: 'Магазин духов в Ростове (Ростове-на-Дону). Вход',
  icons: {
    icon: '/favicon.svg',
  },
  openGraph: {
    type: 'website',
    locale: 'ru_RU',
    url: 'https://perfume.labofdev.ru/sign-in',
    countryName: 'Россия',
    siteName: 'Famous perfume',
    title: 'Famous perfume',
    description: 'Сайт для продажи духов в Ростове (Ростове-на-Дону)',
    images: [
      {
        url: 'https://perfume.labofdev.ru/og-preview.png',
        width: 1300,
        height: 500,
        alt: 'Famous perfume духи',
      },
    ],
  },
};

export default async function ProductPage({}: ProductProps) {
  return (
    <>
      <ProductsHeader />
    </>
  );
}
