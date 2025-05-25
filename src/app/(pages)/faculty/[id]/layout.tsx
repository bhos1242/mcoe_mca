import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { Toaster } from 'react-hot-toast';


export const metadata: Metadata = {
  title: "Dr. Pradnya Muley",
  description: "HOD - MCA Department",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
   <div>
        <Toaster position="top-right" toastOptions={{ duration: 5000 }} />
        <Header/>
        <div className=" min-h-screen">
        {children}</div>
       
        </div>
  );
}
