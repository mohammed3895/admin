"use client";
import { Kanit } from "next/font/google";
import { TRPCReactProvider } from "~/trpc/react";
import { Toaster } from "~/components/ui/toaster";
import ThemeProvider from "~/components/theme-provider";
import "~/styles/globals.css";

const kanit = Kanit({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "900"],
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
        <ThemeProvider attribute="class" defaultTheme="system">
          <body className={`${kanit.className} bg-background text-black-1`}>
            <main className="flex h-full max-h-screen  w-full antialiased">
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
