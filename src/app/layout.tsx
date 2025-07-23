"use client";
import { Roboto } from "next/font/google";
import "./globals.css";
import ClientLayout from "./components/ClientLayoutWrapper";

const roboto = Roboto({
  variable: "--font-roboto",
  subsets: ["latin"],
  weight: ["400", "700"],
});

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="EN" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `(function () {
              const saved = localStorage.getItem("darkMode");
              const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
              const root = document.documentElement;
              if (saved === "true" || (saved === null && prefersDark)) {
                root.classList.add("dark");
              } else {
                root.classList.remove("dark");
              }
            })();`,
          }}
        />
      </head>
        <body
          className={`${roboto.variable}
            antialiased
            bg-[var(--background)] text-[var(--foreground)]
            transition-colors duration-500 will-change-[background-color,color]`}
        >
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}
