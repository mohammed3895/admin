"use client";
import { Lato } from "next/font/google";
import { TRPCReactProvider } from "~/trpc/react";
import { Toaster } from "~/components/ui/toaster";
import "~/styles/globals.css";
import ThemeProvider from "~/components/theme-provider";

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
    <html lang="en" suppressHydrationWarning>
      <TRPCReactProvider>
        <ThemeProvider attribute="class" defaultTheme="dark">
          <body className={`${lato.className} bg-accent text-black-1`}>
            <main className="flex min-h-screen  w-full flex-1 antialiased">
              {children}
            </main>
            <Toaster />
          </body>
        </ThemeProvider>
      </TRPCReactProvider>
      {/* <PrelineScript /> */}
    </html>
  );
}
