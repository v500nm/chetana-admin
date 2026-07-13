import type { Metadata } from "next";
import { Ubuntu, Poppins } from "next/font/google";
import "./globals.css";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/app-sidebar";
import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";

const ubuntu = Ubuntu({
  variable: "--font-ubuntu",
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Chetana Admin",
  description: "CMS for Chetana College",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${ubuntu.variable} ${poppins.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-background font-sans text-foreground">
        <TooltipProvider>
          <SidebarProvider>
            <AppSidebar />
            <main className="flex-1 w-full flex flex-col min-h-screen bg-background">
              <header className="sticky top-0 z-50 flex h-14 items-center gap-4 border-b border-[#ddd] bg-white px-4 lg:h-[60px] lg:px-6">
                <SidebarTrigger className="text-[#111] hover:text-[#003399]" />
                <div className="flex items-center gap-2">
                  <h1 className="font-heading font-semibold text-lg text-[#111]">Chetana Admin</h1>
                </div>
              </header>
              <div className="flex-1 p-4 md:p-6 md:px-8">
                {children}
              </div>
            </main>
          </SidebarProvider>
          <Toaster />
        </TooltipProvider>
      </body>
    </html>
  );
}
