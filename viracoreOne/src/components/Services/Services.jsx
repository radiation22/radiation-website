import React from "react";
import img1 from "../../assets/img1.png";
import img2 from "../../assets/img2.png";
import img3 from "../../assets/img3.png";

const Services = () => {
  return (
    <div className="px-4 sm:px-8 lg:px-20 py-6 lg:py-12">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 py-6 lg:py-8">
        <div className="text-center border border-blue-500 px-4 sm:px-5 lg:px-20 py-6 lg:py-8">
          <p className="font-bold text-amber-500">Content Diversification</p>

          <p className="text-white py-4 sm:py-8">
            To engage a wider audience by diversifying content types.Create and
            share a variety of content such as articles, images, videos,
            infographics, and live streams.
          </p>
          <button className="text-white bg-[#1377B3] px-4 sm:px-5 py-2">
            Read More
          </button>
        </div>
        <div className="text-center border border-blue-500 px-4 sm:px-5 lg:px-20 py-6 lg:py-8">
          <p className="font-bold text-amber-500">Community Building</p>

          <p className="text-white py-4 sm:py-8">
            To foster a strong sense of community among users.Create forums,
            discussion groups, and community events where users can interact,
            share experiences, and provide support.
          </p>
          <button className="text-white bg-[#1377B3] px-4 sm:px-5 py-2">
            Read More
          </button>
        </div>
        <div className="text-center border border-blue-500 px-4 sm:px-5 lg:px-20 py-6 lg:py-8">
          <p className="font-bold text-amber-500">
            Personalization and Recommendation
          </p>

          <p className="text-white py-4 sm:py-8">
            To enhance user experience and increase user satisfaction.Increases
            user engagement, time spent on the platform, and user satisfaction.
          </p>
          <button className="text-white bg-[#1377B3] px-4 sm:px-5 py-2">
            Read More
          </button>
        </div>
      </div>
    </div>
  );
};

export default Services;
