import { DefaultButton, HomeStyle, montserrat, oldenburg } from '@/shared';
import clsx from 'clsx';
import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Магазин духов | Famous perfume',
  description: 'Магазин духов в Ростове (Ростове-на-Дону)',
  icons: {
    icon: '/favicon.svg',
  },
  openGraph: {
    type: 'website',
    locale: 'ru_RU',
    url: 'https://perfume.labofdev.ru/',
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

export default async function Page() {
  return (
    <div className={HomeStyle.page}>
      <section className={HomeStyle.homeTitle}>
        <h1 className={clsx(oldenburg.className)}>Famous perfume</h1>
        <h2 className={clsx(montserrat.className)}>
          Новая коллекция уже в продаже
        </h2>
        <Link href={'/product'}>
          <DefaultButton>Попробовать</DefaultButton>
        </Link>
      </section>
      <section className={HomeStyle.perfume}>
        <Image
          src={'/perfume.png'}
          alt={'perfume shop магазин духов ростов ростов-на-дону'}
          width={228}
          height={328}
          layout='responsive'
        />
      </section>
      <section className={HomeStyle.videoContainer}>
        <video muted loop autoPlay src='/smoke.mp4'></video>
      </section>
    </div>
  );
}