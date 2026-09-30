import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Kartik Kale — Cloud & DevOps Engineer",
  description: "Portfolio of Kartik Kale — Cloud & DevOps Engineer focused on AWS, automation, DevSecOps, and cybersecurity."
};

export const viewport = {
  themeColor: "#F97316"
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
