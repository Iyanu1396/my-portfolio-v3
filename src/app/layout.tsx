import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import AppToaster from "@/components/toaster";
import { ThemeProvider } from "@/contexts/ThemeContext";

const geistSans = Poppins({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "IyanuOluwa Atijosan | Product Engineer",
  description:
    "Product Engineer who is passionate with crafting beautiful and functional digital experiences. With a keen eye for design and a knack for code, I specialize in bringing ideas to life through engaging user interfaces and seamless interactions. By using the newest and and most powerful tools, I design and build web applications that are not only functional but also look great.",
  keywords: [
    "Software Engineer",
    "Web Development",
    "App Development",
    "Robotics",
    "Cloud Computing",
    "Game Development",
    "Full Stack Developer",
    "IyanuOluwa Atijosan",
  ],
  authors: [{ name: "IyanuOluwa Atijosan" }],
  creator: "IyanuOluwa Atijosan",
  publisher: "IyanuOluwa Atijosan",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  icons: {
    icon: "/favicon.png",
    shortcut: "/favicon.png",
    apple: "/favicon.png",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://iyanu.codes/",
    siteName: "IyanuOluwa Atijosan Portfolio",
    title: "IyanuOluwa Atijosan | Product Engineer",
    description:
      "Product Engineer who is passionate with crafting beautiful and functional digital experiences. With a keen eye for design and a knack for code, I specialize in bringing ideas to life through engaging user interfaces and seamless interactions. By using the newest and and most powerful tools, I design and build web applications that are not only functional but also look great.",
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: "IyanuOluwa Atijosan - Product Engineer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "IyanuOluwa Atijosan | Product Engineer",
    description:
      "Product Engineer building scalable products with great user experiences.",
    creator: "@iyanu_codes",
    images: ["/og.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-theme="light">
      <body className={`${geistSans.variable} antialiased`}>
        <ThemeProvider>
          {children}
          <AppToaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
