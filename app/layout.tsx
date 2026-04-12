import type { Metadata } from "next";
import { Geist, Geist_Mono, VT323 } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin", "cyrillic"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const vt323 = VT323({
  variable: "--font-vt323",
  weight: "400",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Kodomandry — Minecraft сервер для юних айтішників",
  description:
    "Довідник модів сервера Kodomandry: CC:Tweaked, Create, Cobblemon, WorldEdit та інші. Програмування, інженерія та магія у світі кубиків.",
  openGraph: {
    title: "Kodomandry — Minecraft сервер",
    description:
      "Таємна лабораторія кодомандрів. Програмуй роботів, будуй заводи, підкорюй дракона.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="uk"
      className={`${geistSans.variable} ${geistMono.variable} ${vt323.variable} h-full antialiased dark`}
    >
      <body className="min-h-full flex flex-col bg-background text-foreground">
        {children}
      </body>
    </html>
  );
}
