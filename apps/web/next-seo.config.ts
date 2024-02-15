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
    title: '🦎 IguanaDEX - Trade, save and discover new horizons',
    description: 'Crypto trading made simple',
    images: [{ url: 'https://assets.pancakeswap.finance/web/og/v2/hero.jpg' }],
  },
}
