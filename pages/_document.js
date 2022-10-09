import { Html, Head, Main, NextScript } from "next/document";
import Header from "../components/Header";
// import Footer from "../components/Footer";

export default function Document() {
  return (
    <Html className="scroll-smooth">
      <Head>
        <title>October &apos;22 Hackathon</title>
        <meta name="description" content="CodeBattle October '22 Hackathon" />
        <link rel="icon" href="//gavn.in/fav" />
      </Head>
      <body className="overflow-x-hidden bg-neutral-900 text-white min-h-screen">
        <Header />
        <Main className="flex-1" />
        {/* <Footer /> */}
        <NextScript />
      </body>
    </Html>
  );
}
