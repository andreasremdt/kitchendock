// These styles apply to every route in the application
import "@/styles/globals.css";
import { Inter } from "next/font/google";
import Toaster from "@/components/toaster";
import AuthStatus from "@/components/auth-status";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  const AuthStatusDiv = await AuthStatus();
  return (
    <html lang="en">
      <body className={inter.variable}>
        <Toaster />
        {AuthStatusDiv}
        <main className="bg-[radial-gradient(ellipse_at_bottom_right,_var(--tw-gradient-stops))] from-indigo-200 via-red-200 to-yellow-100 min-h-screen flex flex-col justify-center items-center">
          {children}
        </main>
      </body>
    </html>
  );
}
