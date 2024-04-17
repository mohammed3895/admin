import "~/styles/globals.css";

import { Figtree } from "next/font/google";

import { TRPCReactProvider } from "~/trpc/react";

const figtree = Figtree({
  subsets: ["latin"],
  weight: ["400", "600", "700", "900"],
  variable: "--font-fig",
});

export const metadata = {
  title: "Admin",
  description: "An admin dashboard",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${figtree.className} bg-gray-1 text-black-1 overflow-hidden`}
      >
        <TRPCReactProvider>
          <main className="flex min-h-screen w-screen flex-1 antialiased">
            {children}
          </main>
        </TRPCReactProvider>
      </body>
    </html>
  );
}
