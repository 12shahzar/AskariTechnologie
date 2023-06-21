import React from "react";
import NewHeader from "./Components/NewHeader";
import ReactDOM from "react-dom/client";
import Home from "./Home";
import Footer from "./Components/Footer";
import "bootstrap/dist/css/bootstrap.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Aboutp from "./Components/Aboutp";
import OurVentures from "./Components/OurVentures";
import OurPatners from "./Components/OurPatners";
import Solution1 from "./Components/Solution1";
import Solution2 from "./Components/Solution2";
import Solution3 from "./Components/Solution3";
import Solution4 from "./Components/Solution4";
import Solution5 from "./Components/Solution5";
import Solution6 from "./Components/Solution6";
import Producteng from "./Components/ProductEng";
import Quality from "./Components/QualityEng";
import Devops from "./Components/Devops";
import Erpserv from "./Components/ErpService";
import Ecommerce from "./Components/EcommerceService";
import Alml from "./Components/ArtificalIntelligence";
import Cloudsol from "./Components/Cloudsol";

// Hire Developer Routes//
import ShopifyDevelopment from "./Components/ShopfiyDevelopmetn";
import MagnetoDevelopment from "./Components/MagnetoDevelopment";
import Wocommerece from "./Components/Wocommerce";
import ShopfiyApp from "./Components/ShopfiyApp";
import Enterprices from "./Components/EntrePrices";
import Dynamic365 from "./Components/Dynamic365";
import Odoo from "./Components/odoo";
import SalesForce from "./Components/SalesForce";
import SalesConsulting from "./Components/SalesConsulting";
import SalesImplemation from "./Components/SalesImplemation";
import SalesApplication from "./Components/SalesApplication";
import SalesMigtration from "./Components/SalesMigtration";
import SalesIntregation from "./Components/SalesIntregation";
import SupportMaintence from "./Components/SupportMaintence";
import LMS from "./Components/LMS";
import HireShopify from "./Components/HireShopify";
import HireMagnto from "./Components/HireMagneto";
import OpenCart from "./Components/openCart";
import Drupal from "./Components/Drupal";
import Flutter from "./Components/Flutter";
import Swift from "./Components/Swift";
import Ios from "./Components/Ios";
import Andriod from "./Components/Andriod";
import AR from "./Components/AR";
import Vue from "./Components/Vue";
import Reactjs from "./Components/React";
import Fabric from "./Components/Fabric";
import Mean from "./Components/Mean";
import Laravel from "./Components/Laravel";
import Asp from "./Components/Asp";
import NETT from "./Components/Net";
import Nodejs from "./Components/Nodejs";
import Django from "./Components/Django";
import Pythone from "./Components/Pythone";
import HireSaleForce from "./Components/HireSaleForce";
import HireOdoo from "./Components/HireOdoo";
import Wordpress from "./Components/Wordpress";
import HireKotlin from "./Components/HireKotlin";
import Contact from "./Components/Contact";

import { ChakraBaseProvider } from '@chakra-ui/react';
import WithSubnavigation from "./Components/MobileNav";

import EcommerceApp from "./Components/EcommerceAp";
import Angular from "./Components/Angular";
import Net from "./Components/Net";


export const App = () => {
  return (
    <>
      <BrowserRouter>
        <NewHeader />
        <div className='MobileNavigation'>
    <ChakraBaseProvider>
      <WithSubnavigation/>
    </ChakraBaseProvider>
    </div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<Aboutp />} />
          <Route path="/ouventure" element={<OurVentures />} />
          <Route path="/patner" element={<OurPatners />} />
          <Route path="/sol1" element={<Solution1 />} />
          <Route path="/sol2" element={<Solution2 />} />
          <Route path="/sol3" element={<Solution3 />} />
          <Route path="/sol4" element={<Solution4 />} />
          <Route path="/sol5" element={<Solution5 />} />
          <Route path="/sol6" element={<Solution6 />} />
          <Route path="/proeng" element={<Producteng />} />
          <Route path="/Quality" element={<Quality />} />
          <Route path="/devops" element={<Devops />} />
          <Route path="/Erpserv" element={<Erpserv />} />
          <Route path="/Ecommerce" element={<Ecommerce />} />
          <Route path="/Alml" element={<Alml />} />
          <Route path="/Cloudsol" element={<Cloudsol />} />

          <Route path="/shopifydevelopment" element={<ShopifyDevelopment />} />
          <Route path="/magentodevelopment" element={<MagnetoDevelopment />} />
          <Route path="/woocommerce" element={<Wocommerece />} />

          <Route path="/hiresaflesforce" element={<HireSaleForce />} />
          <Route path="/hireodoo" element={<HireOdoo />} />
          <Route path="/hirewordpress" element={<Wordpress />} />
          <Route path="/hireflutter" element={<Flutter />} />
          <Route path="/swift" element={<Swift />} />
          <Route path="/andriod" element={<Andriod />} />
          <Route path="/ar" element={<AR />} />
          <Route path="/hirekotlin" element={<HireKotlin />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/Ecommerceapp" element={<EcommerceApp />} />
          <Route path="/shopfiyapp" element={<ShopfiyApp />} />
          <Route path="/enterprices" element={<Enterprices />} />
          <Route path="/dynamic365" element={<Dynamic365 />} />
          <Route path="/odoo" element={<Odoo />} />
          <Route path="/salesforcedevelopment" element={<SalesApplication />} />
          <Route path="/salesconsulting" element={<SalesConsulting />} />
          <Route path="/salesimplemation" element={<SalesImplemation />} />
          <Route path="/salesapplication" element={<SalesApplication />} />
          <Route path="/salesmigration" element={<SalesMigtration />} />
          <Route path="/salesintregation" element={<SalesIntregation />} />
          <Route path="/supportmaintainece" element={<SupportMaintence />} />
          <Route path="/lms" element={<LMS />} />
          <Route path="/SalesForce" element={<SalesForce />} />

          <Route path="/hireshopfiy" element={<HireShopify />} />
          <Route path="/hiremagento" element={<HireMagnto />} />
          <Route path="/hiredrupal" element={<Drupal />} />
          <Route path="/opencart" element={<OpenCart />} />
          <Route path="/flutter" element={<Flutter />} />
          <Route path="/kotlin" element={<HireKotlin />} />
          <Route path="/swift" element={<Swift />} />
          <Route path="/ios" element={<Ios />} />
          <Route path="/andriod" element={<Andriod />} />
          <Route path="/ar" element={<AR />} />
          <Route path="/vuejs" element={<Vue />} />
          <Route path="/reactjs" element={<Reactjs />} />
          <Route path="/angular" element={<Angular />} />
          <Route path="/fabricjs" element={<Fabric />} />
          <Route path="/mean" element={<Mean />} />
          <Route path="/laravel" element={<Laravel />} />
          <Route path="/net" element={<Net />} />
          <Route path="/asp" element={<Asp />} />
          <Route path="/nodejs" element={<Nodejs />} />
          <Route path="/django" element={<Django />} />
          <Route path="/pythone" element={<Pythone />} />
          <Route path="/hiresales" element={<HireSaleForce />} />
          <Route path="/hireodoo" element={<HireOdoo />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
};
