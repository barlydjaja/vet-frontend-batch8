import React from "react";
import Header from "../layout/Header";
import Footer from "../layout/Footer";
import "./Home.css";
import dogImage from "./dog.svg";
import elipseImage from "./elipse.svg";

const Home = () => {
  return (
    <>
      <Header />
      <div className="home-rectangle">
        <img src={dogImage} alt="dog" className="home-dog" />
        <h2>this is will be the homepage</h2>
      </div>
      <div className="home-elipse">
        <img classnamge="home-elipse" src={elipseImage} alt="elipse" />
      </div>
      <div className="body">view here</div>

      {/* <Footer /> */}
    </>
  );
};

export default Home;
