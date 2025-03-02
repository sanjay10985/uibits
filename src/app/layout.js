import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/navigation/navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: "Dribbble Clone - Discover the World's Best Components",
  description:
    "Explore and discover high-quality UI components from talented developers worldwide. Find inspiration, download resources, and connect with designers.",
  keywords: [
    "UI components",
    "design",
    "development",
    "inspiration",
    "dribbble",
    "designers",
  ],
  openGraph: {
    title: "Dribbble Clone - Discover the World's Best Components",
    description:
      "Explore high-quality UI components from talented developers worldwide",
    type: "website",
    locale: "en_US",
    siteName: "Dribbble Clone",
  },
  twitter: {
    card: "summary_large_image",
    title: "Dribbble Clone - Discover the World's Best Components",
    description:
      "Explore high-quality UI components from talented developers worldwide",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar />
        <main className="min-h-screen">{children}</main>
        <footer className="bg-gray-100 py-8">
          <div className="container mx-auto px-4">
            <p className="text-center text-gray-600">
              &copy; {new Date().getFullYear()} Dribbble Clone. All rights
              reserved.
            </p>
          </div>
        </footer>
      </body>
    </html>
  );
}
