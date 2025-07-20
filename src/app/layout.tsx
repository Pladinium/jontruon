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
    <html lang="EN">
      <head>
        {/* preload dark mode to avoid flash */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function () {
              const saved = localStorage.getItem("darkMode");
              const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
              const root = document.documentElement;
              if (saved === "true" || (saved === null && prefersDark)) {
                root.classList.add("dark");
                root.style.setProperty("--background", "#1f1f1f");
                root.style.setProperty("--foreground", "#ebebeb");
              } else {
                root.classList.remove("dark");
                root.style.setProperty("--background", "#ebebeb");
                root.style.setProperty("--foreground", "#1f1f1f");
              }
              root.style.setProperty("--color-primary", "#16007A");
              root.style.setProperty("--color-primary-hover", "#3a2ecc");
            })();`,
          }}
        />
      </head>
      <body className={`${roboto.variable} antialiased`}>
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}
