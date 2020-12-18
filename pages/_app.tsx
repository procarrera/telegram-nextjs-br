import "tailwindcss/tailwind.css";
import Footer from "../src/components/Footer";
import Header from "../src/components/Header";

function MyApp({ Component, pageProps }) {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <Component {...pageProps} />
      <Footer />
    </div>
  );
}

export default MyApp;
