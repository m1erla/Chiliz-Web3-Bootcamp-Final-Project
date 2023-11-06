import Navbar from "@/components/Navbar";
import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html>
      <Navbar />
      <Head />
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
