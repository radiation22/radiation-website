import React from "react";

const Milestone = () => {
  return (
    <div className="px-4 lg:px-28 py-8 lg:py-12">
      <h1 className="text-center text-2xl lg:text-3xl font-bold text-white uppercase">
        Viracore.one Milestones
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-6 lg:mt-10">
        <div className="border border-blue-600 p-6 lg:px-10 lg:py-28">
          <h1 className="text-amber-500 text-3xl lg:text-5xl font-bold text-center">
            75%
          </h1>
          <p className="text-center text-white mt-5">
            Percentage of implementation of the new system
          </p>
        </div>
        <div className="border border-blue-600 p-6 lg:px-10 lg:py-28">
          <h1 className="text-amber-500 text-3xl lg:text-5xl font-bold text-center">
            85%
          </h1>
          <p className="text-center text-white mt-5">
            Increase in renewals and new projects with existing clients
          </p>
        </div>
        <div className="border border-blue-600 p-6 lg:px-10 lg:py-28">
          <h1 className="text-amber-500 text-3xl lg:text-5xl font-bold text-center">
            6M
          </h1>
          <p className="text-center text-white mt-5">Revenue increasing</p>
        </div>
      </div>
    </div>
  );
};

export default Milestone;
