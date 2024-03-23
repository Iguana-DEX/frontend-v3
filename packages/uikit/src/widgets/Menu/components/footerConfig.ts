import { ContextApi } from "@pancakeswap/localization";
import { FooterLinkType } from "../../../components/Footer/types";

export const footerLinks: (t: ContextApi["t"]) => FooterLinkType[] = (t) => [
  {
    label: t("Ecosystem"),
    items: [
      {
        label: t("Trade"),
        href: "/swap",
      },
      {
        label: t("Earn"),
        href: "/farms",
      },
      {
        label: t("Tokenomics"),
        href: "https://docs.pancakeswap.finance/governance-and-tokenomics/cake-tokenomics",
      },
      {
        label: t("IGN Emission Projection"),
        href: "https://analytics.pancakeswap.finance/",
      },
    ],
  },
  {
    label: t("About"),
    items: [
      {
        label: t("Terms Of Service"),
        href: "https://iguanadex.com/terms-of-service",
      },
      {
        label: t("Brand Assets"),
        href: "https://github.com/Iguana-DEX/assets/tree/main/iguana_brand_assets",
      },
      {
        label: t("GitHub"),
        href: "https://github.com/orgs/Iguana-DEX/",
      },
      {
        label: t("Documentation"),
        href: "https://docs.iguanadex.com/",
      },
    ],
  },
];
