import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Navbar />
      <Head />
      <body>
        <Main />
        <NextScript />
      </body>
      <Footer />
    </Html>
  );
}
