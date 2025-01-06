// app/layout.tsx
import React from 'react';
import './globals.css'; // Si vous utilisez Tailwind CSS
import NavBar from '../components/NavBar';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <NavBar />
        <main className="container mx-auto mt-8">{children}</main>
      </body>
    </html>
  );
}
