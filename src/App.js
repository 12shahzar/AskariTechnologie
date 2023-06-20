import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./Components/Header";
import ArtificalIntelligence from "./Components/ArtificalIntelligence";
import Cloudsol from "./Components/Cloudsol";
import Devops from "./Components/Devops";
import ErpService from "./Components/ErpService";
import EcommerceService from "./Components/EcommerceService";
import QualiftyEngering from "./Components/QualityEng";
import ProductEngering from "./Components/ProductEng";
import About from "./Components/About";
import Venture from "./Components/OurVentures";
import Partner from "./Components/OurPatners";
import Solution1 from "./Components/Solution1";
import Solution2 from "./Components/Solution2";
import Solution3 from "./Components/Solution3";
import Solution4 from "./Components/Solution4";
import Solution5 from "./Components/Solution5";
import Solution6 from "./Components/Solution6";
import Contactsub from "./Components/Contactsub";
import Faq from "./Components/Faq";
import Endtwo from "./Components/Endtwo";
function App() {
  return (
    <Router>
      <Header />
      <Routes>
       
        <Route
          path="/ArtificalIntelligence"
          element={<ArtificalIntelligence />}
        />
        {/* <Route path="/Partner" element={<Partner />} /> */}
        <Route path="/solution1" element={<Solution1 />} />
        <Route path="/solution2" element={<Solution2 />} />
        <Route path="/solution3" element={<Solution3 />} />
        <Route path="/solution4" element={<Solution4 />} />
        <Route path="/solution5" element={<Solution5 />} />
        <Route path="/solution6" element={<Solution6 />} />
        <Route path="/about" element={<About />} />
        <Route path="/partner" element={<Partner />} />
        <Route path="/Cloudsol" element={<Cloudsol />} />
        <Route path="/Devops" element={<Devops />} />
        <Route path="/ErpService" element={<ErpService />} />
        <Route path="/EcommerceService" element={<EcommerceService />} />
        <Route path="/QualiftyEngering" element={<QualiftyEngering />} />
        <Route path="/ProductEngering" element={<ProductEngering />} />
       
      </Routes>

  
    </Router>
    
 
  );
}

export default App;
