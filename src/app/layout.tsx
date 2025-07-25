"use client";
import { Roboto } from "next/font/google";
import "./globals.css";
import ClientLayout from "./components/ClientLayoutWrapper";

const roboto = Roboto({
  variable: "--font-roboto",
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "700", "900"],
});

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang={"EN"} suppressHydrationWarning={true}>
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
          className={`${roboto.className}
            antialiased
            bg-[var(--background)] text-[var(--foreground)]
            transition-colors duration-200 ease-out`}
        >
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}
