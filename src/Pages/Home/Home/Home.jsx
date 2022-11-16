import React from "react";
import Bannar from "../Bannar/Bannar";
import Cards from "../CardInfo/Cards";
import Contact from "../Contact/Contact";
import MakeAppointmet from "../MakeAppointment/MakeAppointmet";
import Service from "../Service/Service";
import Testimonial from "../Testimonial/Testimonial";

const Home = () => {
  return (
    <div className="mx-5">
      <Bannar />
      <Cards />
      <Service />
      <MakeAppointmet />
      <Testimonial />
      <Contact />
    </div>
  );
};

export default Home;
