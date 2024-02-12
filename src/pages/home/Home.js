import React from "react";
import Services from "./services/Services";
import Awards from "./awards/Awards";
import Projects from "./projects/Projects";
import Footer from "../../layout/footer/Footer";
import Header from "./header/Header";
import Agency from "./agency/Agency";

function Home() {
  return (
    <main className="mt-14 center w-full flex-col">
      <Header />
      <Services />
      <Awards />
      <Agency />
      <Projects />
      <Footer />
    </main>
  );
}

export default Home;
