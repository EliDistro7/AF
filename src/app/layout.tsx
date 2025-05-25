// app/layout.tsx - Version with Framer Motion
"use client";

import type { Metadata } from "next";
import { Libre_Baskerville } from "next/font/google";
import "./globals.css";
import { motion } from 'framer-motion';

// Import your LanguageProvider
import { LanguageProvider } from "@/contexts/language";

const baskerville = Libre_Baskerville({
  variable: "--font-baskerville",
  subsets: ["latin"],
  weight: ["400", "700"],
  style: ["normal", "italic"],
});

// Enhanced background with Framer Motion
const EnhancedBackground = () => {
  return (
    <div className="fixed inset-0 -z-10">
      {/* Base gradient using your corporate colors */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-50 via-accent-50/80 to-secondary-100/90" />
      
      {/* Animated gradient orbs */}
      <motion.div
        className="absolute top-0 -left-4 w-72 h-72 bg-gradient-to-r from-primary-400/30 to-accent-600/30 rounded-full mix-blend-multiply filter blur-xl"
        animate={{
          x: [0, 50, -50, 0],
          y: [0, -30, 30, 0],
          scale: [1, 1.1, 0.9, 1]
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      
      <motion.div
        className="absolute top-40 -right-4 w-72 h-72 bg-gradient-to-r from-accent-400/30 to-primary-600/30 rounded-full mix-blend-multiply filter blur-xl"
        animate={{
          x: [0, -30, 30, 0],
          y: [0, 50, -30, 0],
          scale: [1, 0.8, 1.2, 1]
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      
      <motion.div
        className="absolute -bottom-8 left-20 w-72 h-72 bg-gradient-to-r from-secondary-400/20 to-primary-600/20 rounded-full mix-blend-multiply filter blur-xl"
        animate={{
          x: [0, 40, -20, 0],
          y: [0, -20, 20, 0],
          scale: [1, 1.3, 0.7, 1]
        }}
        transition={{
          duration: 30,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
    </div>
  );
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${baskerville.variable} font-baskerville antialiased`}>
        <EnhancedBackground />
        <LanguageProvider>
          {children}
        </LanguageProvider>
      </body>
    </html>
  );
}