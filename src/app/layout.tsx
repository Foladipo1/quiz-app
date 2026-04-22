import "./globals.css";

import Header from "@/components/Header";
import Footer from "@/components/Footer";


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
    >
      <Header/>
      <body className="min-h-full flex flex-col">{children}</body>
      <Footer/>
    </html>
  );
}
