import logo from './logo.svg';
import OurServicesImg from "./Assets/images/our_services.png";
import DvpCardHead1 from "./Assets/images/dvp-card-head-1.png";
import DvpCardHead2 from "./Assets/images/dvp-card-head-2.png";
import DvpCardHead3 from "./Assets/images/dvp-card-head-3.png";
import DvpCardHead4 from "./Assets/images/dvp-card-head-4.png";
import './Home.css'
import as2 from './Assets/images/as3.svg';
import as3 from './Assets/images/as3.svg';
// import as4 from './Assets/Assets/images/as4.svg';
import as5 from './Assets/images/as5.svg';
import as6 from './Assets/images/as6.svg';
import as7 from './Assets/images/as7.svg';
import as8 from './Assets/images/as8.svg';
import as9 from './Assets/images/as9.svg';
import as10 from './Assets/images/as10.svg';
import as11 from './Assets/images/as11.svg';
import as12 from './Assets/images/as12.svg';
import as13 from './Assets/images/as13.svg';
import webDevVector from "./Assets/images/web_dev_vector.png"
import PcWebIcon from "./Assets/images/pc_web_icon.png";
import MobileAppIcon from "./Assets/images/mobile_app_icon.png"
import EnterpriseServiceIcon from "./Assets/images/enterprise_icon.png"
import SoftwareDevIcon from "./Assets/images/software_dev_icon.png"
import ContentDevIcon from "./Assets/images/content_dev_icon.png";
import CreativeDevIcon from "./Assets/images/creative_dev_icon.png";
import SmDevIcon from "./Assets/images/sm_dev_icon.png";
import AutomationDevIcon from "./Assets/images/automation_dev_icon.png"
import MlDevIcon from "./Assets/images/ml_service_btn.png";
import AppDevVector from "./Assets/images/app_dev_vector.svg";
import EnterpriseDevVector from "./Assets/images/enterprise_dev_vector.svg";
import SoftwareDevVector from "./Assets/images/software_dev_vector.svg";
import ContentDevVector from "./Assets/images/content_dev_vector.svg";
import CreativeDevVector from "./Assets/images/creative_dev_vector.svg";
import SmDevVector from "./Assets/images/sm_dev_vector.png";
import BulbIconDevProcess from "./Assets/images/BulbIconDevProcess.png";
// import MapBgContactSection from "./Assets/images/map_bg.png";
import AskariTechnologyContactSectBg from "./Assets/images/askari_technology_contact_sect.png";
import HeroSectionBackground from "./Assets/images/hero-section-bg.png";
import MlServiceVector from "./Assets/images/ml-service-vector.avif";
import ConsultingServiceDevIcon from "./Assets/images/consulting_service_dev.png";

import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';


import './Home.css';
import { useEffect, useState } from 'react';
import Navbar from './Navbar';
import Whatwedo from './Whatwedo';
import Tabs from './tabs';
import BasicTabs from './tabs';


const Home = () => {

  const [activeIndex, setActiveIndex] = useState(0);

  const handleBeforeChange = (oldIndex, newIndex) => {
    setActiveIndex(newIndex);
  };

  const handleAfterChange = (currentIndex) => {
    setActiveIndex(currentIndex);
  };



  return (
    <>
   
      <div className="hero">
        <div style={{ height: '150px' }}></div>
        <div className="container p-3">
          <div className="row">
            <div className="col-lg-6">
              <h1 style={{ fontWeight: '700', color: 'white' }}>Empowering Brands</h1>
              <h1 style={{ fontWeight: '700', color: 'white' }}>Since 2006</h1>
              <p className="mt-5 text-white">We decode every complex challenge with our technical expertise and provide you with everything you need to drive measurable results. Get custom software development, consultation, marketing plans, and all other tools to scale and simplify the way you connect, market, and sell to your customers!</p>
              <button style={{ padding: '7px 25px 7px' }} className='btn btn-light mt-50'>Talk to Experts</button>
            </div>
            <div className="col-lg-6"></div>
          </div>
        </div>
      </div>

      <div className="our_services mb-5">
        <div style={{ height: '50px' }}></div>
        <div className="container">
          <div className="row">
            <div className="col-lg-6 mt-5">
              <img src={OurServicesImg} alt="Our services" className='img-fluid' />
            </div>
            <div style={{ display: 'inline-block' }} className="col-lg-6 mt-5">
              <h3 className='text-askari-primary fw-bold me-auto'>COMMITTED TO PROVIDING</h3>
              <h3 style={{ marginRight: '35px' }} className='text-askari-primary fw-bold'>SUBSTANTIVE BUSINESS VALUE</h3>

              <p className='mt-5 text-dark'> <strong>Askari Technologies</strong> is committed to providing substantive business value of each and every product developed and client engagement. We achieve this through a combination of expert Industry-Specific business analysis, strong technical skills, sound project management methods and traditional values.
              </p>
            </div>
          </div>
        </div>
      </div>

     <Whatwedo/>

      <div className="mb-5 mt-5 project_delivered">
  <div className="container text-center">
    <div style={{ height: '50px' }}></div>
    <h1 className='fw-bold text-white'>Over 1200+ Projects Delivered</h1>
    <p className='text-white'>Clients trust us for our efforts to improve business agility and reduce costs.</p>
    <div style={{ height: '50px' }}></div>

    <Slider
      slidesToShow={3}
      centerMode={true}
      centerPadding={'10px'}
      infinite={true}
      beforeChange={handleBeforeChange}
      afterChange={handleAfterChange}
      arrows={false}
      autoplay={true}
      useTransform={true}
      speed={150}
      responsive={[
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 1,
            centerMode: true,
            centerPadding: '8%',
          },
        },
      ]}
    >
      <div style={{width: 400}}>
        <div className="card me-2 project_delivered_details_card text-start" style={{ backgroundColor: 'lightblue' }}>
        <h1 class="card-heading fw-bold">01</h1>
        <div style={{height: '30px'}}></div>
          <h4 className='fw-bold'>INTELLECT & EXPERIENCE</h4>
          <hr />
          <p style={{fontSize: 14}}>Highly skilled professionals who possess expertise in diverse Business and Technology areas make up the Askari Technologies team. To provide world class service, we employ the best technicians, adhere to proven methodology, provide superior client service and become a true business partner in every project.</p>
        </div>
      </div>

      <div style={{width: 400}}>
        <div className="card me-2 project_delivered_details_card text-start" style={{ backgroundColor: 'lightgreen' }}>
        <h1 class="card-heading fw-bold">02</h1>
        <div style={{height: '30px'}}></div>

          <h4 className='fw-bold'>COMMITMENT TO QUALITY</h4>
          <hr />
          <p style={{fontSize: 14}}>We believe in Quality service and our approach has been designed to provide the same. We listen carefully to our clients and provide space, time and materials according to agreement for the project. We are proud of our Technical and Creative capability, and this emerges from taking time to get it right. Our Quality Assurance </p>
        </div>
      </div>

      <div style={{width: 400}}>
        <div className="card me-2 project_delivered_details_card text-start" style={{ backgroundColor: 'lightyellow' }}>
        <h1 class="card-heading fw-bold">03</h1>
        <div style={{height: '30px'}}></div>

          <h4 className='fw-bold'>TRACK RECORD</h4>
          <hr />
          <p style={{fontSize: 14}}>We have handled small - large scale projects and have over the years implemented solutions for numerous organizations of all sizes. Our growing list of satisfied customers not only acts as our excellent references but is also a source of our repeat business.</p>
        </div>
      </div>

      <div style={{width: 400}}>
        <div className="card me-2 project_delivered_details_card text-start" style={{ backgroundColor: 'lightyellow' }}>
        <h1 class="card-heading fw-bold">04</h1>
        <div style={{height: '30px'}}></div>

          <h4 className='fw-bold'>OUR EXPERTISE</h4>
          <hr />
          <p style={{fontSize: 14}}>The Askari Technologies team is a cohesive unit of highly skilled professionals who boast extensive expertise across diverse Business and Technology areas. Our commitment to delivering world-class service is exemplified through our meticulous selection of the finest technicians in the field, ensuring that our clients receive nothing short of exceptional support.</p>
        </div>
      </div>
    </Slider>
  </div>
</div>



      <div className="our_development_process_section mt-5 mb-5">
        <div className="container text-center">
          <h1 className='text-askari-primary fw-bold'>Our Development Process</h1>
          <div style={{ height: '20px'}}></div>
          <div className="row">
            <div className="col-6 col-md-3 mt-5">
              <div className="card requirment_analysis_card h-100">
                <div style={{ borderRadius: '50%', border: '10px solid #EC9B00', width: '96.24px', height: '96.24px', padding: '15px', alignSelf: 'center', margin: '-3rem 1rem 0rem', background: '#FFFFFF' }} className="card-header"><img src={DvpCardHead1} alt="Requirement analysis" /></div>
                <div className="card-body" style={{}}>
                  <h6 style={{ color: '#EC9B00' }} className='fw-bold'>Requirement Analysis</h6>
                  <p style={{ fontWeight: 350, fontSize: 16 }}>Once you get in touch with us, we sit down with you to gather and analyze your requirements, and expectations.</p>
                </div>
              </div>
            </div>
            <div className="col-6 col-md-3 mt-5">
              <div className="card building_the_right_team_card h-100">
                <div className="card-body">
                  <div style={{ height: '35px' }}></div>
                  <h6 className='fw-bold' style={{ color: '#6471D7' }}>Building the right team</h6>
                  <p style={{ fontWeight: 350, fontSize: 16 }}>After understanding the project, we focus on vetting and choosing the best-fitted talent from our 300+ team</p>
                </div>
                <div style={{ borderRadius: '50%', border: '10px solid #6471D7', width: '96.24px', height: '96.24px', padding: '15px', alignSelf: 'center', margin: '0rem 1rem -3rem', background: '#FFFFFF' }} className="card-footer"><img src={DvpCardHead2} alt="Building the right team" /></div>
              </div>
            </div>
            <div className="col-6 col-md-3 mt-5">
              <div className="card planning_and_execution_card h-100">
                <div style={{ borderRadius: '50%', border: '10px solid #20AF92', width: '96.24px', height: '96.24px', padding: '15px', alignSelf: 'center', margin: '-3rem 1rem 0rem', background: '#FFFFFF' }} className="card-header"><img src={DvpCardHead3} alt="Planning and execution" /></div>
                <div className="card-body">
                  <h6 className='fw-bold' style={{ color: '#20AF92' }}>Planning and execution</h6>
                  <p style={{ fontWeight: 350, fontSize: 16 }}>Getting the whole team on the same page with weekly meetings, standups, demos, and status reports, avoiding future conflicts.</p>
                </div>
              </div>
            </div>
            <div className="col-6 col-md-3 mt-5">
              <div className="card review_and_delivery_card h-100">
                <div className="card-body">
                  <div style={{ height: '35px' }}></div>
                  <h6 style={{ color: '#F1323C' }} className='fw-bold'>Review and Delivery</h6>
                  <p style={{ fontWeight: 350, fontSize: 16 }}>Quality check and code review before any sprint release to ensure bug-free and secure product delivery.</p>
                </div>
                <div style={{ borderRadius: '50%', border: '10px solid #F1323C', width: '96.24px', height: '96.24px', padding: '15px', alignSelf: 'center', margin: '0rem 1rem -3rem', background: '#FFFFFF' }} className="card-footer"><img src={DvpCardHead4} alt="Review and Delivery" /></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="our_expertise mt-5">
        <div className="container text-center">
          <div style={{ height: '50px' }}></div>
          <h1 style={{ fontWeight: 700, fontSize: 48 }} className='text-askari-primary'>Continue To Grow With Businesses In The World</h1>
          <div className="row mt-5">
            <div className="col-md-4">
              <h1 className='fw-bold'>16+</h1>
              <h3>Years Of Expertise</h3>
              <p>Learning. Unlearning. Relearning. Growing. This is what has kept us going to achive.</p>
            </div>
            <div className="col-md-4">
              <h1 className='fw-bold'>1200+</h1>
              <h3>Projects Completed</h3>
              <p>Yes! Grateful to call all of them our <br /> happy customers!</p>
            </div>
            <div className="col-md-4">
              <h1 className='fw-bold'>350+</h1>
              <h3>Dynamic Individuals</h3>
              <p>They love to innovate everyday and <br /> work for a common goal.</p>
            </div>
          </div>
        </div>
      </div>
      <div className='hidetab' style={{marginTop:'50px'}}>
        <BasicTabs/>
      </div>

    </>
  );
}

export default Home;
