import React from "react";
import { Link } from 'react-router-dom';
import "./home.scss";
import logo from "./logo.png";

const Home = () => {
  const properties = [
    { id: 1, image: "https://media.istockphoto.com/id/511061090/photo/business-office-building-in-london-england.jpg?s=612x612&w=0&k=20&c=nYAn4JKoCqO1hMTjZiND1PAIWoABuy1BwH1MhaEoG6w=", title: "Luxury Villa", location: "Dubai, UAE", price: "$2,500,000" },
    { id: 2, image: "https://gardeniahomes.ae/wp-content/uploads/2024/01/danube-Bayz-101-studio-floorplan.jpg", title: "Modern Apartment", location: "Abu Dhabi, UAE", price: "$850,000" },
    { id: 3, image: "https://www.arabianbusiness.com/cloud/2024/04/30/NICOLE-AB-Image-Size-1200-x-800-11.png", title: "Beachfront Condo", location: "Sharjah, UAE", price: "$1,200,000" },
    { id: 4, image: "https://media.istockphoto.com/id/511061090/photo/business-office-building-in-london-england.jpg?s=612x612&w=0&k=20&c=nYAn4JKoCqO1hMTjZiND1PAIWoABuy1BwH1MhaEoG6w=", title: "Luxury Villa", location: "Dubai, UAE", price: "$2,500,000" },
    { id: 5, image: "https://gardeniahomes.ae/wp-content/uploads/2024/01/danube-Bayz-101-studio-floorplan.jpg", title: "Modern Apartment", location: "Abu Dhabi, UAE", price: "$850,000" },
    { id: 6, image: "https://www.arabianbusiness.com/cloud/2024/04/30/NICOLE-AB-Image-Size-1200-x-800-11.png", title: "Beachfront Condo", location: "Sharjah, UAE", price: "$1,200,000" },
    { id: 7, image: "https://media.istockphoto.com/id/511061090/photo/business-office-building-in-london-england.jpg?s=612x612&w=0&k=20&c=nYAn4JKoCqO1hMTjZiND1PAIWoABuy1BwH1MhaEoG6w=", title: "Luxury Villa", location: "Dubai, UAE", price: "$2,500,000" },
    { id: 8, image: "https://gardeniahomes.ae/wp-content/uploads/2024/01/danube-Bayz-101-studio-floorplan.jpg", title: "Modern Apartment", location: "Abu Dhabi, UAE", price: "$850,000" },
    { id: 9, image: "https://www.arabianbusiness.com/cloud/2024/04/30/NICOLE-AB-Image-Size-1200-x-800-11.png", title: "Beachfront Condo", location: "Sharjah, UAE", price: "$1,200,000" },
    { id: 8, image: "https://gardeniahomes.ae/wp-content/uploads/2024/01/danube-Bayz-101-studio-floorplan.jpg", title: "Modern Apartment", location: "Abu Dhabi, UAE", price: "$850,000" },
    { id: 9, image: "https://www.arabianbusiness.com/cloud/2024/04/30/NICOLE-AB-Image-Size-1200-x-800-11.png", title: "Beachfront Condo", location: "Sharjah, UAE", price: "$1,200,000" },
    // Add more properties as needed...
  ];

  return (
    <div>
      {/* Navbar */}
      <nav className="navbar">
        <div className="logo">
          <a href="#home">
            <img src={logo} alt="Logo" />
          </a>
        </div>
        <ul>
          <li><a href="#home">Home</a></li>
          <li><a href="#properties">Properties</a></li>
          <li><a href="#about">About Us</a></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
        <div className="search-bar">
          <input type="text" placeholder="Search..." />
        </div>
      </nav>

      {/* Header */}
      <header className="header">
        <video autoPlay muted loop className="bg-video">
          <source src="https://videos.pexels.com/video-files/3410663/3410663-uhd_2562_1440_30fps.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="header-content">
          <h1>Find Your Dream Home</h1>
          <p>Explore top properties across the UAE.</p>
        </div>
      </header>

      {/* Main Content */}
      <main className="main-content">
        <section id="properties" className="properties">
          <h2>Featured Properties</h2>
          <div className="properties-container">
            {properties.map((property) => (
              <Link to={`/property/${property.id}`} key={property.id} className="property-card">
                <img src={property.image} alt={property.title} />
                <h3>{property.title}</h3>
                <p>{property.location}</p>
                <p className="price">{property.price}</p>
              </Link>
            ))}
          </div>
        </section>

        {/* About Us Section */}
        <section id="about" className="about">
          <h2>About Us</h2>
          <p>
            We are a leading real estate platform in the UAE, connecting buyers with the most luxurious, affordable, and desirable properties. Whether you are looking for a villa, an apartment, or a condo, we've got you covered.
          </p>
        </section>

        {/* Contact Section */}
        <section id="contact" className="contact">
          <h2>Contact Us</h2>
          <p>Phone: +971-555-123456</p>
          <p>Email: contact@realestatehub.com</p>
          <p>Visit us at our Abu Dhabi office.</p>
        </section>
      </main>

      {/* Footer */}
      <footer className="footer">
        <p>© 2025 Real Estate Hub. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Home;
