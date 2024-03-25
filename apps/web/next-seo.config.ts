import { DefaultSeoProps } from 'next-seo'

export const SEO: DefaultSeoProps = {
  titleTemplate: '%s | IguanaDEX',
  defaultTitle: 'IguanaDEX',
  description: 'Crypto trading made simple',
  twitter: {
    cardType: 'summary_large_image',
    handle: '@IguanaDEX',
    site: '@IguanaDEX',
  },
  openGraph: {
    title: '🦎 IguanaDEX - Trade, earn and discover new horizons',
    description: 'Crypto trading made simple',
    images: [{ url: 'https://raw.githubusercontent.com/Iguana-DEX/assets/main/iguana_brand_assets/hero.jpg' }],
  },
}
