import React from "react";
import Navbar from "../Navbar/Navbar";
import Home from "./Home";
import Choose from "./../Choose/Choose";
import Audience from "./../Audience/Audience";
import Milestone from "./../Milestone/Milestone";
import Next from "./../Next/Next";
import ContactUs from "../Contact/Contact";

const All = () => {
  return (
    <div>
      <Home></Home>
      {/* <Services></Services> */}
      <Choose></Choose>
      <Milestone></Milestone>
      <Audience></Audience>

      <Next></Next>
      <ContactUs></ContactUs>
    </div>
  );
};

export default All;
