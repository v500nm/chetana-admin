import type { Metadata } from "next";
import "./globals.css";
import Link from "next/link";
import { Toaster } from "@/components/ui/sonner";
import { Sidebar } from "@/components/Sidebar";
import { Header } from "@/components/Header";

export const metadata: Metadata = {
  title: "Chetana CMS - Admin Dashboard",
  description: "Administrative dashboard for Chetana College",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="light">
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap" rel="stylesheet" />
      </head>
      <body className="bg-background text-on-surface font-body-md overflow-hidden">
        
        {/* SIDEBAR NAVIGATION */}
        <Sidebar />

        {/* TOP NAVIGATION */}
        <Header />

        {/* MAIN CONTENT AREA */}
        <main className="ml-sidebar-width h-[calc(100vh-64px)] overflow-y-auto bg-background custom-scrollbar">
          <div className="p-container-padding flex-1">
            {children}
          </div>
          
          <footer className="mt-stack-lg flex justify-between items-center text-on-surface-variant text-[11px] pb-10 px-container-padding">
            <p>© 2024 Chetana College Administrative Services. All rights reserved.</p>
            <div className="flex gap-4">
              <Link className="hover:text-primary" href="#">System Manual</Link>
              <Link className="hover:text-primary" href="#">Privacy Policy</Link>
              <Link className="hover:text-primary" href="#">Support Desk</Link>
            </div>
          </footer>
        </main>
        
        <Toaster />
      </body>
    </html>
  );
}
