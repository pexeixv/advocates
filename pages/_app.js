import "../styles/globals.css";
import Header from "../components/Header";

function MyApp({ Component, pageProps }) {
  return (
    <body className="overflow-x-hidden bg-neutral-900 text-white min-h-screen flex flex-col">
      <Header />
      <Component {...pageProps} />
      {/* <Footer/> */}
    </body>
  );
}

export default MyApp;
