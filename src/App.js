import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./Components/Header";
import HireShopfy from "./Components/hireShopfy";
import Magento from "./Components/Magento";
import HireSkill from "./Components/HireSkill";
import OpenCarts from "./Components/OpenCart";
import Flutter from "./Components/Flutter";
import Kotlin from "./Components/Kotlin";
import Swift from "./Components/Swift";
import IOS from "./Components/Ios";
import Andriod from "./Components/Andriod";
import Augmented from "./Components/Augmented";
import Vuejs from "./Components/Vue";
import Reactjs from "./Components/Reactjs";
import Angular from "./Components/Angular";
import Fabrics from "./Components/Fabrics";
import Mean from "./Components/Mean";
import Laravel from "./Components/Laravel";
import Asp from "./Components/Asp";
import Net from "./Components/Net";
import Node from "./Components/Node";
import Django from "./Components/Django";
import Pythone from "./Components/Pythone";
import SalesForces from "./Components/salesForce";
import Odoo from "./Components/odoo";
import Wordpress from "./Components/Wordpress";
import Footer from "./Components/Footer";
import ShopfifyDeployment from "./Components/ShopifyDeployment";
import Woocommerce from "./Components/Woocommerce";
import Ecommerce from "./Components/Ecommerce";
import ShopfiyApp from "./Components/ShopfiyApp";
import EnterPrices from "./Components/EnterPrices";
import MicrosoftDynamic from "./Components/MicrosoftDynamic";
import Lerverage from "./Components/Lerverage";
import SalesforceDevelopment from "./Components/SalesforceDevelopment";
import SalesforceConsultingServices from "./Components/SalesforceConsultingServices.js";
import SalesImplemation from "./Components/SalesImplemation";
import SalesFroceApllication from "./Components/SalesFroceApllication";
import Outsoucres from "./Components/Outsoucres";
import SalesMigration from "./Components/SalesMigration";
import SalesIntergation from "./Components/SalesIntergation";
import SalesSuppport from "./Components/SalesSuppport";
import CustomLMS from "./Components/CustomLMS";
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
import Contact from "./Components/Contact";
import Solution1 from "./Components/Solution1";
import Solution2 from "./Components/Solution2";
import Solution3 from "./Components/Solution3";
import Solution4 from "./Components/Solution4";
import Solution5 from "./Components/Solution5";
import Solution6 from "./Components/Solution6";
function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/hireShopfy" element={<HireShopfy />} />
        <Route path="/magento" element={<Magento />} />
        <Route path="/hireskills" element={<HireSkill />} />
        <Route path="/opencart" element={<OpenCarts />} />
        <Route path="/flutter" element={<Flutter />} />
        <Route path="/kotlin" element={<Kotlin />} />
        <Route path="/swift" element={<Swift />} />
        <Route path="/ios" element={<IOS />} />
        <Route path="/Andriod" element={<Andriod />} />
        <Route path="/augmented" element={<Augmented />} />
        <Route path="/vuejs" element={<Vuejs />} />
        <Route path="/reactjs" element={<Reactjs />} />
        <Route path="/angular" element={<Angular />} />
        <Route path="/fabricjs" element={<Fabrics />} />
        <Route path="/mean" element={<Mean />} />
        <Route path="/laravel" element={<Laravel />} />
        <Route path="/asp" element={<Asp />} />
        <Route path="/.net" element={<Net />} />
        <Route path="/node" element={<Node />} />
        <Route path="/django" element={<Django />} />
        <Route path="/pyhtone" element={<Pythone />} />
        <Route path="/salesforce" element={<SalesForces />} />
        <Route path="/odoo" element={<Odoo />} />
        <Route path="/wordpress" element={<Wordpress />} />
        <Route path="/Shopfifydevelopment" element={<ShopfifyDeployment />} />
        <Route path="/woocommerce" element={<Woocommerce />} />
        <Route path="/ecommerce" element={<Ecommerce />} />
        <Route path="/ShopfiyApp" element={<ShopfiyApp />} />
        <Route path="/enterpricesapp" element={<EnterPrices />} />
        <Route path="/micorsoftdynamic" element={<MicrosoftDynamic />} />
        <Route path="/leverageodoodevelopment" element={<Lerverage />} />
        <Route
          path="/salesforcedevelopment"
          element={<SalesforceDevelopment />}
        />
        <Route
          path="/SalesforceConsultingServices"
          element={<SalesforceConsultingServices />}
        />
        <Route path="/SalesImplemation" element={<SalesImplemation />} />
        <Route
          path="Salesfroceapplication"
          element={<SalesFroceApllication />}
        />
        <Route path="/Outsoucressalesforce" element={<Outsoucres />} />
        <Route path="/salesmigration" element={<SalesMigration />} />
        <Route path="/salesintergation" element={<SalesIntergation />} />
        <Route path="/salessuppport" element={<SalesSuppport />} />
        <Route path="/customlms" element={<CustomLMS />} />
        <Route path="/Venture" element={<Venture />} />
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
        <Route path="/contact" element={<Contact />} />
      </Routes>

      <Footer />
    </Router>
  );
}

export default App;
