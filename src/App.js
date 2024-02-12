import "./App.css";
import NavigationBar from "./layout/navigation/desktop/NavigationBar";
import { Routes, Route } from "react-router-dom";
import AllProjects from "./pages/allProjects/AllProjects";
import Home from "./pages/home/Home";
import Agrohub from "./pages/bridProjects/agrohub/Agrohub";
import Askana from "./pages/bridProjects/askana/Askana";
import Benjys from "./pages/bridProjects/benjys/Benjys";
import Champy from "./pages/bridProjects/champy/Champy";
import Dizen from "./pages/bridProjects/dizen/Dizen";
import Fastlane from "./pages/bridProjects/fastlane/Fastlane";
import Horizon from "./pages/bridProjects/horizon/Horizon";
import LogosMarks from "./pages/bridProjects/logos&marks/LogosMarks";
import Orka from "./pages/bridProjects/orka/Orka";
import Prodact from "./pages/bridProjects/prodact/Prodact";
import SelectedLogos from "./pages/bridProjects/selectedLogos/SelectedLogos";
import Owens from "./pages/bridProjects/owens/Owens";
import TbilisiLibraries from "./pages/bridProjects/tbilisilibraries/TbilisiLibraries";
import Thermorum from "./pages/bridProjects/thermorum/Thermorum";
import Touch from "./pages/bridProjects/touch/Touch";
import WinnerPrints from "./pages/bridProjects/winnerprints/WinnerPrints";
import Zentivents from "./pages/bridProjects/zentivents/Zentivents";
import Factory from "./pages/factory/Factory";

function App() {
  return (
    <main className="w-full center flex-col">
      <section className="center flex-col w-full">
        <NavigationBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/allprojects" element={<AllProjects />} />
          <Route path="/agrohub" element={<Agrohub />} />
          <Route path="/askana" element={<Askana />} />
          <Route path="/benjys" element={<Benjys />} />
          <Route path="/champy" element={<Champy />} />
          <Route path="/dizen" element={<Dizen />} />
          <Route path="/fastlane" element={<Fastlane />} />
          <Route path="/horizon" element={<Horizon />} />
          <Route path="/logos&marks" element={<LogosMarks />} />
          <Route path="/orka" element={<Orka />} />
          <Route path="/prodact" element={<Prodact />} />
          <Route path="/selectedlogosandmarks" element={<SelectedLogos />} />
          <Route path="/soowens" element={<Owens />} />
          <Route path="/tbilisilibraries" element={<TbilisiLibraries />} />
          <Route path="/thermorum" element={<Thermorum />} />
          <Route path="/touch" element={<Touch />} />
          <Route path="/winnerprints2019" element={<WinnerPrints />} />
          <Route path="/zentivents" element={<Zentivents />} />
          <Route path="/factory" element={<Factory />} />
        </Routes>
      </section>
    </main>
  );
}

export default App;
