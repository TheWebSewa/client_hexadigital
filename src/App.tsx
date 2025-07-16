
import './App.css'

function App() {

  return (
    <>
      <body>
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

    <section id="home" className="hero-section">
        <div className="container">
            <div className="row align-items-center">
                <div className="col-lg-6">
                    <div className="hero-content">
                        <h1>Digital Marketing<br/>Agency</h1>
                    </div>
                </div>
                <div className="col-lg-6">
                    <div className="hero-image">
                        <img src="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 500 400'><defs><linearGradient id='grad1' x1='0%' y1='0%' x2='100%' y2='100%'><stop offset='0%' style='stop-color:%23f8f9fa;stop-opacity:1' /><stop offset='100%' style='stop-color:%23e9ecef;stop-opacity:1' /></linearGradient></defs><rect width='500' height='400' fill='url(%23grad1)'/><g transform='translate(50,50)' opacity='0.6'><rect width='60' height='40' fill='%23ddd' rx='4'/><rect x='5' y='5' width='50' height='30' fill='%23f8f9fa' rx='2'/><rect x='80' y='20' width='60' height='40' fill='%23ddd' rx='4'/><rect x='85' y='25' width='50' height='30' fill='%23f8f9fa' rx='2'/><rect x='160' y='10' width='60' height='40' fill='%23ddd' rx='4'/><rect x='165' y='15' width='50' height='30' fill='%23f8f9fa' rx='2'/><rect x='250' y='30' width='60' height='40' fill='%23ddd' rx='4'/><rect x='255' y='35' width='50' height='30' fill='%23f8f9fa' rx='2'/><rect x='330' y='15' width='60' height='40' fill='%23ddd' rx='4'/><rect x='335' y='20' width='50' height='30' fill='%23f8f9fa' rx='2'/></g><g transform='translate(100,120)' opacity='0.4'><circle cx='50' cy='50' r='20' fill='%23FF8C00'/><circle cx='150' cy='60' r='15' fill='%23ccc'/><circle cx='250' cy='45' r='18' fill='%23aaa'/><circle cx='350' cy='55' r='12' fill='%23ddd'/></g><g transform='translate(80,200)' opacity='0.5'><rect width='80' height='50' fill='%23e0e0e0' rx='5'/><rect x='100' y='10' width='80' height='50' fill='%23d0d0d0' rx='5'/><rect x='200' y='-5' width='80' height='50' fill='%23c0c0c0' rx='5'/><rect x='300' y='15' width='80' height='50' fill='%23b0b0b0' rx='5'/></g><g transform='translate(150,280)' opacity='0.3'><path d='M0 20 Q50 0 100 20 T200 20' stroke='%23bbb' stroke-width='3' fill='none'/><path d='M50 40 Q100 20 150 40 T250 40' stroke='%23ccc' stroke-width='2' fill='none'/></g></svg>" alt="Digital Marketing Illustration"/>
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
    </section>

    <section id="about" className="about-section">
        <div className="container">
            <div className="row align-items-center">
                <div className="col-lg-6 mb-4 mb-lg-0">
                    <div className="about-image">
                        <img src="https://images.unsplash.com/photo-1702747192983-95e65797d9cc?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"/>
                    </div>
                </div>
                <div className="col-lg-6">
                    <div className="about-content">
                        <h2>About us</h2>
                        <p className="about-description">About us description</p>
                        <p className="about-text">
                            Welcome to Hexa Digital, where creativity meets strategy in the dynamic world of digital marketing. We were founded on a passion for innovation and a commitment to results. Our team of digital enthusiasts is dedicated to helping brands like yours thrive online.
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

    <section id="contact" className="contact-section">
        <div className="container">
            <div className="row">
                <div className="col-lg-8 mb-4 mb-lg-0">
                    <h2>Contact us</h2>
                    <p className="contact-subtitle">Send us a message</p>
                    <form className="contact-form">
                        <div className="row">
                            <div className="col-md-6">
                                <input type="text" className="form-control" placeholder="Full Name" required/>
                            </div>
                            <div className="col-md-6">
                                <input type="email" className="form-control" placeholder="Email" required/>
                            </div>
                        </div>
                        <textarea className="form-control" placeholder="Your Message" required></textarea>
                        <button type="submit" className="btn-submit">Submit</button>
                    </form>
                </div>
                <div className="col-lg-4">
                    <div className="contact-info">
                        <div className="contact-logo">
                            <span className="text-orange">he</span>Hexa<br/>
                            <span className="text-orange">xa</span>Digital
                        </div>
                        <div className="contact-details">
                            <p><i className="fas fa-phone"></i> +977 9860811940</p>
                            <p><i className="fas fa-envelope"></i> gospelknights5@gmail.com</p>
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
