
import './App.css'

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import background1 from '/src/assets/bac.png'
import background from '/src/assets/background.png'
import aboutUs from '/src/assets/aboutUs.png'
import logoFooter from '/src/assets/hexa.svg'

function App() {

    return (
        <>
            <body className='main_body'>
                {/* header */}
                <nav className="navbar navbar-expand-lg">
                    <div className="container">
                        <a className="navbar-rand" href="#">
                            <img
                                src="/hexa.png"
                                alt="Hexagon logo"
                                height={60}
                            />            </a>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarNav">
                            <ul className="navbar-nav ms-auto">
                                <li className="nav-item">
                                    <a className="nav-link" href="#home">Home</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#portfolio">Portfolio</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#about">About us</a>
                                </li>
                                <li className="nav-item">
                                    <a className="btn btn-contact" href="#contact">Contact us</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>


                {/* slider */}
                <div className="slider w-100">
                    <Swiper
                        modules={[Navigation, Pagination, Autoplay]}
                        navigation
                        pagination={{ clickable: true }}
                        spaceBetween={0}
                        autoplay={{ delay: 2000, disableOnInteraction: false }}
                        slidesPerView={1}
                        className="w-100"
                    >
                        <SwiperSlide>
                            <div className="d-flex justify-content-center align-items-center w-100">
                                <img src={background1} alt="Slide 1" className="img-fluid w-100" />
                            </div>
                        </SwiperSlide>

                        <SwiperSlide>
                            <div className="d-flex justify-content-center align-items-center w-100">
                                <img src={background} alt="Slide 2" className="img-fluid w-100" />
                            </div>
                        </SwiperSlide>
                    </Swiper>
                </div>






                {/* <section id="home" className="hero-section">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-lg-6">
                                <div className="hero-content">
                                    <h1>Digital Marketing<br />Agency</h1>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="hero-image">
                                    <img src="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 500 400'><defs><linearGradient id='grad1' x1='0%' y1='0%' x2='100%' y2='100%'><stop offset='0%' style='stop-color:%23f8f9fa;stop-opacity:1' /><stop offset='100%' style='stop-color:%23e9ecef;stop-opacity:1' /></linearGradient></defs><rect width='500' height='400' fill='url(%23grad1)'/><g transform='translate(50,50)' opacity='0.6'><rect width='60' height='40' fill='%23ddd' rx='4'/><rect x='5' y='5' width='50' height='30' fill='%23f8f9fa' rx='2'/><rect x='80' y='20' width='60' height='40' fill='%23ddd' rx='4'/><rect x='85' y='25' width='50' height='30' fill='%23f8f9fa' rx='2'/><rect x='160' y='10' width='60' height='40' fill='%23ddd' rx='4'/><rect x='165' y='15' width='50' height='30' fill='%23f8f9fa' rx='2'/><rect x='250' y='30' width='60' height='40' fill='%23ddd' rx='4'/><rect x='255' y='35' width='50' height='30' fill='%23f8f9fa' rx='2'/><rect x='330' y='15' width='60' height='40' fill='%23ddd' rx='4'/><rect x='335' y='20' width='50' height='30' fill='%23f8f9fa' rx='2'/></g><g transform='translate(100,120)' opacity='0.4'><circle cx='50' cy='50' r='20' fill='%23FF8C00'/><circle cx='150' cy='60' r='15' fill='%23ccc'/><circle cx='250' cy='45' r='18' fill='%23aaa'/><circle cx='350' cy='55' r='12' fill='%23ddd'/></g><g transform='translate(80,200)' opacity='0.5'><rect width='80' height='50' fill='%23e0e0e0' rx='5'/><rect x='100' y='10' width='80' height='50' fill='%23d0d0d0' rx='5'/><rect x='200' y='-5' width='80' height='50' fill='%23c0c0c0' rx='5'/><rect x='300' y='15' width='80' height='50' fill='%23b0b0b0' rx='5'/></g><g transform='translate(150,280)' opacity='0.3'><path d='M0 20 Q50 0 100 20 T200 20' stroke='%23bbb' stroke-width='3' fill='none'/><path d='M50 40 Q100 20 150 40 T250 40' stroke='%23ccc' stroke-width='2' fill='none'/></g></svg>" alt="Digital Marketing Illustration" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="slide-indicator">
                        <div className="slide-dot active"></div>
                        <div className="slide-dot"></div>
                        <div className="slide-dot"></div>
                    </div>
                    <div className="hero-decorative"></div>
                </section> */}

                <section id="about" className="about-section">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-lg-6 mb-4 mb-lg-0 ">
                                <div className="about-image">
                                    <img src={aboutUs} alt="About Us" className="img-fluid mx-4 mx-lg-5  object-fit-cover" />
                                </div>

                            </div>
                            {/* <div className="col-lg-6">
                                <div className="about-content  ">
                                    <h2>About us</h2>
                                    <p className="about-description">About us description</p>
                                    <p className="about-text">
                                        Welcome to Hexa Digital, where creativity meets strategy in the dynamic world of digital marketing. We were founded on a passion for innovation and a commitment to results. Our team of digital enthusiasts is dedicated to helping brands like yours thrive online.
                                    </p>
                                    <a href="#" className="btn-read-more">Read More</a>
                                </div>
                            </div> */}
                            <div className="col-lg-6  m-lg-0">
                                <div className="about-content text-justify">
                                    <h2>About us</h2>
                                    <p className="about-description">About us description</p>
                                    <p className="about-text me-lg-5 ">
                                        Welcome to Hexa Digital, where creativity meets strategy in the dynamic world of digital marketing.
                                        We were founded on a passion for innovation and a commitment to results. Our team of digital enthusiasts
                                        is dedicated to helping brands like yours thrive online.
                                    </p>
                                    <a href="#" className="btn-read-more">Read More</a>
                                </div>
                            </div>

                        </div>
                    </div>
                </section>

                <section className="clients-section">
                    <div className="container">
                        <h2>Our Clients</h2>
                        <div className="row justify-content-center">
                            <div className="col-6 col-md-4 col-lg-2 mb-4">
                                <div className="client-logo">SC</div>
                            </div>
                            <div className="col-6 col-md-4 col-lg-2 mb-4">
                                <div className="client-logo">LC</div>
                            </div>
                            <div className="col-6 col-md-4 col-lg-2 mb-4">
                                <div className="client-logo">GS</div>
                            </div>
                            <div className="col-6 col-md-4 col-lg-2 mb-4">
                                <div className="client-logo">BD</div>
                            </div>
                            <div className="col-6 col-md-4 col-lg-2 mb-4">
                                <div className="client-logo">LB</div>
                            </div>
                        </div>
                    </div>
                </section>

                <section id="contact" className="contact-section py-5" style={{ backgroundColor: '#454545ff', color: '#fff' }}>
                    <div className="container">
                        <div className="row align-items-center">
                            {/* Left: Contact Form */}
                            <div className="col-lg-6 mb-4 mb-lg-0">
                                <h2 className="fw-bold mb-0" style={{ fontSize: '59px' }}>Contact us</h2>
                                <p className=" mb-4" style={{ fontSize: '29px', fontWeight: 400 }}>Send us a message</p>

                                <form className="contact-form">
                                    <div className="mb-3">
                                        <input type="text" style={{ width: '70%' }} className="form-control bg-secondary-subtle border-0" placeholder="Full Name" required />
                                    </div>
                                    <div className="mb-3">
                                        <input type="email " style={{ width: '70%' }} className="form-control bg-secondary-subtle border-0" placeholder="Email" required />
                                    </div>
                                    <div className="mb-3">
                                        <textarea className="form-control bg-secondary-subtle border-0" placeholder="Your Message" rows={6} required></textarea>
                                    </div>
                                    <button type="submit" className="btn btn-dark px-4 py-2">Submit</button>
                                </form>
                            </div>

                            {/* Right: Logo and Contact Info */}
                            <div className="col-lg-6 d-flex flex-column align-items-center text-center">
                                <div >
                                    < img src={logoFooter} className="rounded-circle bg-light d-flex align-items-center justify-content-center mb-4" style={{ width: '200px', height: '200px' }}></img>
                                </div>
                                {/*   <div >
                                            <img src="/hexa.png"></img>
                                        </div> */}
                                <div className="text-start">
                                    <div className='ms-5 mt-2'>
                                        <p style={{ fontSize: '20px' }} className="ms-4 d-flex ">
                                            <i className="fas fa-phone-alt me-2 fa-rotate-90" style={{ fontSize: '29px' }}></i>


                                            <p>+977 9860811940</p>
                                        </p>
                                        <p style={{ fontSize: '20px' }} className="mb-2 d-flex ms-4">
                                            <i className="fas fa-envelope me-2 " style={{ fontSize: '29px' }}></i><p>gospelknight55@gmail.com</p>
                                        </p>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </section>


                <footer className="footer">
                    <div className="container">
                        <p>Copyright 2024 All Rights Reserved Company Name</p>
                    </div>
                </footer>


            </body>
        </>
    )
}

export default App
