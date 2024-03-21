import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { getServerSession } from "next-auth";
import Footer from "@/components/common/Footer";

import Navbar from "@/components/common/Navbar";
import Providers from "@/components/common/Providers";
import SessionProvider from "@/components/common/SessionProvider";

import "./(styles)/globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Innovator Club LDCE",
  description: "Innovator club LDCE",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = await getServerSession();
  return (
    <html lang="en" data-theme="dark">
      <body className={inter.className}>
        <SessionProvider session={session}>
          <Providers>
            <Navbar />
            {children}
            <Footer />
          </Providers>
        </SessionProvider>
      </body>
    </html>
  );
}
