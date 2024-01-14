import React from "react";
import img1 from "../../assets/01.png";

const Home = () => {
  return (
    <div className="flex flex-col lg:flex-row p-8 items-center">
      <div className="lg:w-1/2 p-5">
        <h1 className="text-3xl lg:text-5xl font-bold text-white">
          Connect, create, <br /> and captivate. <br /> Your story, your <br />
          platform.
        </h1>
        <p className="text-white mt-3 lg:mt-5">
          Capture and retrieve your lists across devices to help you stay
          organized at work, home, and on the go.
        </p>
      </div>
      <div className="bg-[#0A6CB6] p-5 lg:p-10 w-full lg:w-1/2">
        <img className="h-[250px] lg:h-[450px] w-full" src={img1} alt="" />
      </div>
    </div>
  );
};

export default Home;
