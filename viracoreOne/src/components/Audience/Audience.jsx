import React from "react";
import img1 from "../../assets/img2.png";

const Audience = () => {
  return (
    <div className="py-8 px-4 lg:px-16 flex flex-col lg:flex-row items-center">
      <div className="lg:w-1/2">
        <img className="w-full" src={img1} alt="" />
      </div>
      <div className="lg:w-1/2 p-4 lg:p-10">
        <h1 className="text-white font-bold text-xl lg:text-2xl">
          New Vision of VIracore.one
        </h1>
        <p className="text-white mt-4 lg:mt-8">
          We've integrated our system so that it cuts across all functions,
          enabling us to work faster and more efficiently. It is currently
          rolled out to 100% of staff but is still in the beta stage. We'd love
          your feedback to help us continuously improve the platform.
        </p>
        <button className="text-white bg-[#1377B3] mt-6 lg:mt-10 px-4 py-2">
          Read More
        </button>
      </div>
    </div>
  );
};

export default Audience;
