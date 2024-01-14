import React from "react";

const HomeFooter = () => {
  return (
    <div>
      <hr className="my-6 border-blueGray-300" />
      <div className="flex flex-wrap items-center md:justify-between justify-center">
        <div className="w-full md:w-4/12 px-4 mx-auto text-center">
          <div className="text-sm text-white font-semibold py-1">
            Copyright © 2023
            <span className="text-blue-600"> Viracore</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeFooter;
