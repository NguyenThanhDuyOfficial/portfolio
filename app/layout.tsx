import "./globals.css";
import type { Metadata } from "next";
import { geistMono, geistSans } from "../fonts/fonts";
import { cn } from "@/lib/utils";
import { Toaster } from "sonner";
import { Analytics } from "@vercel/analytics/next";

export const metadata: Metadata = {
  title: "Thành Duy",
  description: "Nguyễn Thành Duy's portfolio",
  authors: {
    url: "https://github.com/NguyenThanhDuyOfficial",
    name: "Nguyễn Thành Duy",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={cn(
        "h-full",
        "antialiased",
        geistSans.variable,
        geistMono.variable,
        "font-sans",
      )}
    >
      <body className="min-h-full flex flex-col m-0 p-0">
        {children}
        <Toaster />
        <Analytics />
      </body>
    </html>
  );
}
