import type { Metadata } from "next";
import { Nunito, Lora, Poppins, Cormorant_Garamond } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import "./globals.css";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["600", "700"],
});

const lora = Lora({
  variable: "--font-lora",
  subsets: ["latin"],
  weight: ["400"],
  style: ["italic"],
});

const nunito = Nunito({
  variable: "--font-nunito",
  subsets: ["latin"],
  weight: ["400", "600", "700", "800"],
});

// Slogan font — klassiek schreefletter voor de nav-tagline.
// Cormorant Garamond italic brengt een onderscheidende, hoogwaardige uitstraling
// die qua karakter sterk contrasteert met het geometrische Poppins en het
// humanistische Nunito, zonder te concurreren met het logo zelf.
const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["400", "500"],
  style: ["italic"],
});

export const metadata: Metadata = {
  title: {
    default: "OpenPerspectief — op organiseren en vernieuwen",
    template: "%s | OpenPerspectief",
  },
  description:
    "OpenPerspectief — adviesbureau van Rosemarie Mijlhoff, gespecialiseerd in netwerksamenwerking tussen organisaties.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="nl"
      className={`${poppins.variable} ${lora.variable} ${nunito.variable} ${cormorant.variable} h-full scroll-smooth`}
    >
      <body className="flex min-h-full flex-col font-body antialiased text-op-body">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
