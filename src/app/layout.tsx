"use client";
import { Lato } from "next/font/google";
import { TRPCReactProvider } from "~/trpc/react";
import { Toaster } from "~/components/ui/toaster";
import "~/styles/globals.css";

const lato = Lato({
  subsets: ["latin"],
  weight: ["400", "700", "900"],
  variable: "--font-fig",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <TRPCReactProvider>
        <body className={`${lato.className} bg-gray-1 text-black-1`}>
          <main className="flex min-h-screen  w-full flex-1 antialiased">
            {children}
          </main>
          <Toaster />
        </body>
      </TRPCReactProvider>
    </html>
  );
}
