import React from "react";
import Login from "../Login/Login";
import HomeFooter from "../Footer/HomeFooter";
import Accrodion from "../Accrodion/Accrodion";

const StartPage = () => {
  return (
    <div>
      <div className="flex flex-col-reverse md:flex lg:flex-row  py-5 px-2 w-full">
        {/* Content section */}
        <div className="w-[100%] p-2 lg:p-8 lg:w-[60%] flex items-center">
          <Accrodion></Accrodion>
        </div>

        {/* Login section */}
        <div className="w-[100%] lg:w-[40%] p-2 lg:p-10">
          <Login></Login>
        </div>
      </div>

      <div className="px-3 lg:px-8"></div>
      <div className="px-2 mx-1 bg-gray-400 lg:mx-12 mt-6 rounded-md  lg:px-5 py-5 flex flex-wrap gap-2 lg:gap-4 justify-center">
        <a href="https://viracore.org/">
          <button className="bg-gradient-to-r from-blue-600 to-blue-800 text-white text-[8px] lg:text-lg p-1 lg:px-10 lg:py-2 rounded-md uppercase">
            Viracore.org
          </button>
        </a>
        <a href="https://viracore.work/guest">
          <button className="bg-gradient-to-r from-blue-600 to-blue-800 text-white text-[8px] lg:text-lg p-1 lg:px-10 lg:py-2 rounded-md uppercase">
            Viracore.work
          </button>
        </a>
        <a href="https://viracore.biz/">
          <button className="bg-gradient-to-r from-blue-600 to-blue-800 text-white text-[8px] lg:text-lg p-1 lg:px-10 lg:py-2 rounded-md uppercase">
            Viracore.biz
          </button>
        </a>
        <a href="https://viracore.vip/login">
          <button className="bg-gradient-to-r from-blue-600 to-blue-800 text-white p-1 text-[8px] lg:text-lg lg:px-10 lg:py-2 rounded-md uppercase">
            Viracore.vip
          </button>
        </a>
        <a href="https://viracore.casa/">
          <button className="bg-gradient-to-r from-blue-600 to-blue-800 text-white text-[8px] lg:text-lg p-1 lg:px-10 lg:py-2 rounded-md uppercase">
            Viracore.casa
          </button>
        </a>
        <a href="https://viracore.net/">
          <button className="bg-gradient-to-r from-blue-600 to-blue-800 text-white text-[8px] lg:text-lg p-1 lg:px-10 lg:py-2 rounded-md uppercase">
            Viracore.net
          </button>
        </a>
        <a href="https://viracore.club/">
          <button className="bg-gradient-to-r from-blue-600 to-blue-800 text-white text-[8px] lg:text-lg p-1 lg:px-10 lg:py-2 rounded-md uppercase">
            Viracore.Club
          </button>
        </a>
      </div>
      <HomeFooter></HomeFooter>
    </div>
  );
};

export default StartPage;
