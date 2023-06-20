import React from 'react'
import NewHeader from './Components/NewHeader'
import ReactDOM from "react-dom/client";
import Home from './Home';
import Footer from './Components/Footer';
import "bootstrap/dist/css/bootstrap.css";
import { BrowserRouter, Routes, Route} from "react-router-dom";
import Aboutp from './Components/Aboutp';
import OurVentures from './Components/OurVentures';
import OurPatners from './Components/OurPatners';
import Solution1 from './Components/Solution1';
import Solution2 from './Components/Solution2';
import Solution3 from './Components/Solution3';
import Solution4 from './Components/Solution4';
import Solution5 from './Components/Solution5';
import Solution6 from './Components/Solution6';
import Producteng from './Components/ProductEng';
import Quality from './Components/QualityEng';
import Devops from './Components/Devops';
import Erpserv from './Components/ErpService';
import Ecommerce from './Components/EcommerceService';
import Alml from './Components/ArtificalIntelligence';
import Cloudsol from './Components/Cloudsol';




export const App = () => {
  return (
    <>

<BrowserRouter>
<NewHeader/>
      <Routes>
       <Route path='/' element={<Home/>}/>
       <Route path='/aboutp' element={<Aboutp/>}/>
       <Route path='/ouventure' element={<OurVentures/>} />
        <Route path="/patner" element={<OurPatners/>} />
        <Route path="/sol1" element={<Solution1/>} />
        <Route path="/sol2" element={<Solution2/>} />
        <Route path="/sol3" element={<Solution3/>} />
        <Route path="/sol4" element={<Solution4/>} />
        <Route path="/sol5" element={<Solution5/>} />
        <Route path="/sol6" element={<Solution6/>} />
        <Route path="/proeng" element={<Producteng/>} />
        <Route path="/Quality" element={<Quality/>} />
        <Route path="/devops" element={<Devops/>} />
        <Route path="/Erpserv" element={<Erpserv/>} />
        <Route path="/Ecommerce" element={<Ecommerce/>} />
        <Route path="/Alml" element={<Alml/>} />
        <Route path="/Cloudsol" element={<Cloudsol/>} />
      </Routes>
      <Footer/>
      </BrowserRouter>
     
    

 
    </>
  )
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
