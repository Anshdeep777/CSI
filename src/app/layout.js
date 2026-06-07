import { Play } from "next/font/google";
import Navbar from "./navbar"; 
import "./globals.css";

const play = Play({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-play",
});

export const metadata = {
  title: "CSI-SUMMER2026",
  description: "Club Of Sustainability and Innovation",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${play.variable} h-full antialiased`}>
      <body className="min-h-screen flex flex-col font-play bg-black text-white">
        
        <Navbar />
        
        <main className="flex-1 flex flex-col">
          {children}
        </main>

      </body>
    </html>
  );
}