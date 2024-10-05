import Footer from "@/components/Footer";
import Main from "@/components/Main";
import PageTransition from "@/components/PageTransition";
import { ThemeProvider } from "@/components/ThemeProvider";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

export const metadata: Metadata = {
  title: "FilmHunter - Get Movie Info Easily",
  description: "An Engineering Project",
};

const font = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${font.className} antialiased h-full`}>
        <PageTransition>
          <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem
            disableTransitionOnChange
          >
            <Main>{children}</Main>

            <Footer />
          </ThemeProvider>
        </PageTransition>
      </body>
    </html>
  );
}
