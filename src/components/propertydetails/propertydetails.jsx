import React from "react";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import "./propertydetails.scss";

const PropertyDetail = () => {
  const { id } = useParams();
  const [property, setProperty] = useState(null);

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
    // Add more properties as needed...
  ];

  useEffect(() => {
    const selectedProperty = properties.find((property) => property.id === parseInt(id));
    setProperty(selectedProperty);
  }, [id]);

  if (!property) return <div>Loading...</div>;

  return (
    <div className="property-detail">
      <img src={property.image} alt={property.title} />
      <h1>{property.title}</h1>
      <p>{property.location}</p>
      <p className="price">{property.price}</p>
      <p className="description">{property.description}</p>
      {/* Add animations and 3D effects here */}
    </div>
  );
};

export default PropertyDetail;
