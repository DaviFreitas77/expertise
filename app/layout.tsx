import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.expertiseportaria.com.br"),
  title: {
    default: "EXPERTISE | Portaria e Controle de Acesso",
    template: "%s | EXPERTISE",
  },
  description: "Portaria presencial, controle de acesso e recepção para condomínios em São Paulo. Conheça a EXPERTISE e solicite um orçamento.",
  keywords: [
    "portaria para condomínios",
    "portaria presencial",
    "controle de acesso",
    "recepção de condomínios",
    "empresa de portaria em São Paulo",
    "solução em portaria",
  ],
  authors: [{ name: "EXPERTISE Solução em Portaria" }],
  creator: "EXPERTISE Solução em Portaria",
  publisher: "EXPERTISE Solução em Portaria",
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "/",
    siteName: "EXPERTISE — Solução em Portaria",
    title: "EXPERTISE | Portaria e Controle de Acesso",
    description: "Segurança, organização e tranquilidade para o seu condomínio.",
    images: [{ url: "/hero-building.jpg", width: 1400, height: 933, alt: "Edifícios modernos vistos de baixo" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "EXPERTISE | Portaria e Controle de Acesso",
    description: "Soluções profissionais em portaria para condomínios.",
    images: ["/hero-building.jpg"],
  },
  robots: { index: true, follow: true },
  icons: { icon: "/favicon.ico" },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return <html lang="pt-BR"><body>{children}</body></html>;
}
