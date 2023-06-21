import AskariLogo from "./Assets/images/logo.png";
import AboutUsLiIcon from "./Assets/images/about_us_li_icon.png";
import PartnerLiIcon from "./Assets/images/partners_us_li_icon.png";
import HowItWorkLiIcon from "./Assets/images/how_it_works_li.png";
import ContactUsLiIcon from "./Assets/images/contact_us_li_icon.png";




const Navbar = () => {
    return (<nav className="navbar navbar-expand-lg fixed-top navbar-light bg-light">
        <div className="container">
            <a href="/" className="navbar-brand">
                <img src={AskariLogo} width={235} height={40} alt="Askari Technology" />
            </a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav text-center mx-auto justify-content-center">
                    <div class="dropdown custom_drop_down">
                        <button class="btn dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                            About Us
                        </button>
                        <ul class="dropdown-menu custom_drop_down_menu mt-3">
                            <h4>About</h4>
                            <p className="mt-3">About At Askari , we infuse innovation with technology to build futuristic solutions. Our expertise lies in building sustainable software solutions.</p>

                            <div className="row p-3">
                                <div className="col-md-6">
                                    <h5><img src={AboutUsLiIcon} alt="about us" className="img-fluid" />About Us</h5>
                                    <p>Building intuitive digital experiences</p>
                                </div>
                                <div className="col-md-6">
                                    <h5><img src={PartnerLiIcon} alt="about us" className="img-fluid" />Partners</h5>
                                    <p>Connect with dedicated software partners</p>
                                </div>
                                <div className="col-md-6">
                                    <h5><img src={HowItWorkLiIcon} alt="about us" className="img-fluid" />How it Works</h5>
                                    <p>Consult, design, & develop scalable solutions</p>
                                </div>
                                <div className="col-md-6">
                                    <h5><img src={ContactUsLiIcon} alt="about us" className="img-fluid" />Contact Us</h5>
                                    <p>Qualified professionals are a click away</p>
                                </div>
                            </div>

                        </ul>
                    </div>
                    <div class="dropdown">
                        <button class="btn dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Capabilities
                        </button>
                        <ul class="dropdown-menu custom_drop_down_menu mt-3">
                            <h4>End-to-End Solutions</h4>
                            <p className="mt-3">Overcome the struggles of developing scalable software solutions. Leverage our end-to-end digital solutions to build impressive products.</p>

                            <div className="row p-3">
                                <div className="col-md-4">
                                    <h6>Software  Engineering</h6>
                                    <p>Turn unique ideas into powerful software products</p>
                                </div>
                                <div className="col-md-4">
                                    <h6>Ecommerce Development</h6>
                                    <p>Transform consumer experience with eCommerce solutions</p>
                                </div>
                                <div className="col-md-4">
                                    <h6>Devops</h6>
                                    <p>Shorten SDLC to build quality products quickly</p>
                                </div>
                                <div className="col-md-4">
                                    <h6>Qualitiy Engineering</h6>
                                    <p>Operate and maintain quality standards for your product</p>
                                </div>
                                <div className="col-md-4">
                                    <h6>Cloud Applications</h6>
                                    <p>Build & deploy next-gen applications on cloud infrastructure</p>
                                </div>
                                <div className="col-md-4">
                                    <h6>AI/ML Development</h6>
                                    <p>Create digital products with cutting-edge technology solutions</p>
                                </div>
                                <div className="col-md-4">
                                    <h6>ERP Services</h6>
                                    <p>Streamline your business apps to maximize productivity</p>
                                </div>
                                <div className="col-md-4">
                                    <h6>CRM Services</h6>
                                    <p>Streamline customer interactions to improve business relationships</p>
                                </div>
                            </div>

                        </ul>
                    </div>
                    <div class="dropdown">
                        <button class="btn dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Development
                        </button>
                        <ul class="dropdown-menu custom_drop_down_menu">
                            <div className="row">
                                <div className="col-lg-4 development_lg_4">
                                    <ul class="nav flex-column">
                                        <li class="nav-item">
                                            <a class="nav-link active" aria-current="page" href="#">Active</a>
                                        </li>
                                        <li class="nav-item">
                                            <a class="nav-link" href="#">Link</a>
                                        </li>
                                        <li class="nav-item">
                                            <a class="nav-link" href="#">Link</a>
                                        </li>
                                        <li class="nav-item">
                                            <a class="nav-link disabled">Disabled</a>
                                        </li>
                                    </ul>
                                </div>
                                <div className="col-lg-8"></div>
                            </div>
                        </ul>
                    </div>
                    <div class="dropdown">
                        <button class="btn dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Hire Developer
                        </button>
                        <ul class="dropdown-menu">
                            <li><a class="dropdown-item" href="#">Action</a></li>
                            <li><a class="dropdown-item" href="#">Another action</a></li>
                            <li><a class="dropdown-item" href="#">Something else here</a></li>
                        </ul>
                    </div>
                    <div class="dropdown">
                        <button class="btn dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Insights
                        </button>
                        <ul class="dropdown-menu">
                            <li><a class="dropdown-item" href="#">Action</a></li>
                            <li><a class="dropdown-item" href="#">Another action</a></li>
                            <li><a class="dropdown-item" href="#">Something else here</a></li>
                        </ul>
                    </div>
                    <div class="dropdown">
                        <button class="btn dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Solutions
                        </button>
                        <ul class="dropdown-menu">
                            <li><a class="dropdown-item" href="#">Action</a></li>
                            <li><a class="dropdown-item" href="#">Another action</a></li>
                            <li><a class="dropdown-item" href="#">Something else here</a></li>
                        </ul>
                    </div>
                </ul>

                <ul className="navbar-nav me-auto">
                    <li className="nav-item">
                        <a href="/" className="btn btn-askari-primary text-white">Lets Connect</a>
                    </li>
                </ul>


            </div>
        </div>
    </nav>);
}

export default Navbar;