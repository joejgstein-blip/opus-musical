import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Opus — A Musical",
  description: "A musical in two acts.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
