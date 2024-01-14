import React from "react";

const Next = () => {
  return (
    <div className="px-4 sm:px-8 lg:px-16">
      <h2 className="text-center text-2xl sm:text-3xl lg:text-4xl font-bold text-white">
        What's Next
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 py-6 sm:py-8 lg:py-12">
        <div className="text-center border border-blue-500 p-4 sm:p-5 lg:p-6">
          <p className="font-bold text-amber-500">Strategy #01</p>
          <p className="text-white text-2xl sm:text-3xl lg:text-4xl font-bold my-4 sm:my-8">
            ASSESSMENT OF <br /> NEW SYSTEM
          </p>
          <p className="text-white py-4 sm:py-8 text-center">
            Identify positive results as well as areas that still need
            improvement
          </p>
          <button className="text-white bg-[#1377B3] px-3 sm:px-5 py-2">
            Read More
          </button>
        </div>
        <div className="text-center border border-blue-500 p-4 sm:p-5 lg:p-6">
          <p className="font-bold text-amber-500">Strategy #02</p>
          <p className="text-white text-2xl sm:text-3xl lg:text-4xl font-bold my-4 sm:my-8">
            STRATEGIC PLANNING <br /> FOR GROWTH
          </p>
          <p className="text-white py-4 sm:py-8 text-center">
            Develop a roadmap for scaling your business and achieving long-term
            success
          </p>
          <button className="text-white bg-[#1377B3] px-3 sm:px-5 py-2">
            Read More
          </button>
        </div>
        <div className="text-center border border-blue-500 p-4 sm:p-5 lg:p-6">
          <p className="font-bold text-amber-500">Strategy #03</p>
          <p className="text-white text-2xl sm:text-3xl lg:text-4xl font-bold my-4 sm:my-8">
            USER EXPERIENCE <br /> OPTIMIZATION
          </p>
          <p className="text-white py-4 sm:py-8 text-center">
            Enhance user satisfaction and engagement through design and
            usability improvements
          </p>
          <button className="text-white bg-[#1377B3] px-3 sm:px-5 py-2">
            Read More
          </button>
        </div>
      </div>
    </div>
  );
};

export default Next;
