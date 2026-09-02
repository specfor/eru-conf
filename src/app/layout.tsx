import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "ERU Symposium 2025 | December 11, 2025 - University of Moratuwa",
  description: "ERU Symposium 2025 - December 11, 2025. Engineering Research Unit Symposium organized by Faculty of Engineering, University of Moratuwa.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
