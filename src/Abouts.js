import React from "react";
import img1 from "./img/image2.jpg";
import img2 from "./img/image3.jpg";
import vishal from "./img/vishal.jpeg";

const Abouts = () => {
  return (
    <>
      <section className="overflow-hidden pt-20 pb-12 lg:pt-[120px] lg:pb-[90px] bg-white ">
        <div className="container mx-auto">
          <div className="flex flex-wrap items-center justify-between -mx-4">
            <div className="w-full px-4 lg:w-6/12">
              <div className="flex items-center -mx-3 sm:-mx-4">
                <div className="w-full px-3 sm:px-4 xl:w-1/2">
                  <div className="py-3 sm:py-4">
                    <img src={img1} alt="" className="w-full rounded-2xl" />
                  </div>
                  <div className="py-3 sm:py-4">
                    <img src={img2} alt="" className="w-full rounded-2xl" />
                  </div>
                </div>
                <div className="w-full px-3 sm:px-4 xl:w-1/2">
                  <div className="relative z-10 my-4">
                    <img src={vishal} alt="" className="w-full rounded-2xl" />
                    <span className="absolute -right-7 -bottom-7 z-[-1]">
                      <svg
                        width={134}
                        height={106}
                        viewBox="0 0 134 106"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        {/* SVG Circle Code Here */}
                      </svg>
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="w-full px-4 lg:w-1/2 xl:w-5/12">
              <div className="mt-10 lg:mt-0">
                <span className="block mb-4 text-lg font-semibold text-primary">
                  Why Choose Us
                </span>
                <h2 className="mb-5 text-3xl font-bold text-dark sm:text-[40px]/[48px]">
                  Empowering Businesses Through Comprehensive Financial
                  Solutions
                </h2>
                <p className="mb-5 text-base text-body-color ">
                  At Finactaxpro Services Bharam LLP, we offer expertise,
                  customized solutions, technology integration,
                  cost-effectiveness, and reliability to meet your financial
                  needs. Our approach is focused on providing personalized
                  service, compliance excellence, and proactive guidance.
                </p>
                <a
                  href="javascript:void(0)"
                  className="inline-flex items-center justify-center py-3 text-base font-medium text-center text-white border border-transparent rounded-md px-7 bg-primary hover:bg-opacity-90"
                >
                  Get Started
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="container mx-auto mt-12">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {/* Your content here */}
        </div>
      </div>
    </>
  );
};

export default Abouts;
