import type { NextPage } from "next";
import Nav from "../components/1.nav/nav";
import Header from "../components/2.header/header";
import About from "../components/3.about/about";
import Services from "../components/4.services/services";
import Contact from "../components/5.contact/contact";
import { ToastContainer } from "react-toastify";
import Footer from "../components/6.footer/footer";

import { useLocale } from "../common/hooks/hooks";

const Home: NextPage = () => {
  const { dir } = useLocale();

  return (
    <div dir={dir}>
      <ToastContainer />
      <Nav />
      <Header />
      <About />
      <Services />
      <Contact />
      <Footer />
    </div>
  );
};

export default Home;
