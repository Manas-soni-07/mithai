import type { Metadata } from "next";
import { Playfair_Display, Poppins } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-heading",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  display: "swap",
});

const poppins = Poppins({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Shree Shyam Churma Prasad",
  description: "Premium Churma Prasad prepared with devotion for Shri Khatu Shyam Ji devotees.",
  icons: {
    icon: "/images/logo.svg",
    shortcut: "/images/logo.svg",
    apple: "/images/logo.svg",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${playfair.variable} ${poppins.variable} scroll-smooth`}
    >
      <body className="min-h-screen bg-[#FFFDF7] text-[#5A2B18] antialiased selection:bg-[#B8893C] selection:text-white">
        {children}
      </body>
    </html>
  );
}
