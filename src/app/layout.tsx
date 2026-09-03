import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "ERU Symposium 2026 | December 2, 2026 - University of Moratuwa",
  description: "ERU Symposium 2026 - December 2, 2026. Engineering Research Unit Symposium organized by Faculty of Engineering, University of Moratuwa.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
