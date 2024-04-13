import React from "react";
import vishal from "./img/vishal.jpeg";
import ketan from "./img/ketan.jpeg";
import kavita from "./img/kavita.jpeg";
const Team = () => {
  return (
    <section className="pb-10 pt-20 lg:pb-20 lg:pt-[120px]" id="Team">
      <div className="container mx-auto">
        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4">
            <div className="mx-auto mb-[60px] max-w-[510px] text-center">
              <span className="mb-2 block text-lg font-semibold text-primary">
                Our Team
              </span>
              <h2 className="mb-3 text-3xl font-bold leading-[1.2] text-dark sm:text-4xl md:text-[40px]">
                Our Awesome Team
              </h2>
              <p className="text-base text-body-color ">
                Our team of highly skilled professionals is fully committed to
                assisting you in achieving your financial goals.
              </p>
            </div>
          </div>
        </div>

        {/* Apply flexbox properties to ensure consistent height */}
        <div className="-mx-4 flex flex-wrap justify-center">
          <TeamCard
            name="Vishal Bharam"
            profession="Partner & CEO"
            imageSrc={vishal}
            degree="(M. Com, CWA (Inter), GDC & A)"
            style={{ height: "100%" }}
          />
          {/* <TeamCard
            name="Kirti Bharam"
            profession="Partner & Member Advisory Board "
            imageSrc={vishal}
            degree="(M. Com, ICWA/CMA)"
            style={{ height: "100%" }} 
          /> */}
          <TeamCard
            name="Kavita Joshi"
            profession="Associates"
            imageSrc={kavita}
            degree="(M. Com, GDC & (Govt Auditor From 2000))"
            style={{ height: "100%" }}
          />
          <TeamCard
            name="Adv. Ketan Tanpure"
            profession="Associates"
            imageSrc={ketan}
            degree="(B.com, DTL, LLB)"
            style={{ height: "100%" }}
          />
        </div>
      </div>
    </section>
  );
};

export default Team;

const TeamCard = ({ imageSrc, name, profession, degree }) => {
  return (
    <div className="w-full px-4 sm:w-1/2 md:w-1/2 lg:w-1/4 flex justify-center mb-8 ">
      <div className="w-full max-w-[370px] h-full">
        <div className="relative overflow-hidden rounded-lg h-full">
          <img src={imageSrc} alt="" className="w-full h-full object-cover" />
          <div className="absolute inset-x-0 bottom-0 w-full text-center bg-white bg-opacity-90">
            <div className="relative overflow-hidden rounded-lg px-3 py-5">
              <h3 className="text-base font-semibold text-dark mb-1">{name}</h3>
              <p className="text-xs text-body-color mb-1">{profession}</p>
              <p className="text-xs text-body-color mb-0">{degree}</p>
            </div>
            <div>
              <span className="absolute bottom-0 left-0">
                <svg
                  width={61}
                  height={30}
                  viewBox="0 0 61 30"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle
                    cx={16}
                    cy={45}
                    r={45}
                    fill="#13C296"
                    fillOpacity="0.11"
                  />
                </svg>
              </span>
              <span className="absolute right-0 top-0">
                <svg
                  width={20}
                  height={25}
                  viewBox="0 0 20 25"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle
                    cx="0.706257"
                    cy="24.3533"
                    r="0.646687"
                    transform="rotate(-90 0.706257 24.3533)"
                    fill="#3056D3"
                  />
                  <circle
                    cx="6.39669"
                    cy="24.3533"
                    r="0.646687"
                    transform="rotate(-90 6.39669 24.3533)"
                    fill="#3056D3"
                  />
                  <circle
                    cx="12.0881"
                    cy="24.3533"
                    r="0.646687"
                    transform="rotate(-90 12.0881 24.3533)"
                    fill="#3056D3"
                  />
                  <circle
                    cx="17.7785"
                    cy="24.3533"
                    r="0.646687"
                    transform="rotate(-90 17.7785 24.3533)"
                    fill="#3056D3"
                  />
                  <circle
                    cx="0.706257"
                    cy="18.6624"
                    r="0.646687"
                    transform="rotate(-90 0.706257 18.6624)"
                    fill="#3056D3"
                  />
                  <circle
                    cx="6.39669"
                    cy="18.6624"
                    r="0.646687"
                    transform="rotate(-90 6.39669 18.6624)"
                    fill="#3056D3"
                  />
                  <circle
                    cx="12.0881"
                    cy="18.6624"
                    r="0.646687"
                    transform="rotate(-90 12.0881 18.6624)"
                    fill="#3056D3"
                  />
                  <circle
                    cx="17.7785"
                    cy="18.6624"
                    r="0.646687"
                    transform="rotate(-90 17.7785 18.6624)"
                    fill="#3056D3"
                  />
                  <circle
                    cx="0.706257"
                    cy="12.9717"
                    r="0.646687"
                    transform="rotate(-90 0.706257 12.9717)"
                    fill="#3056D3"
                  />
                  <circle
                    cx="6.39669"
                    cy="12.9717"
                    r="0.646687"
                    transform="rotate(-90 6.39669 12.9717)"
                    fill="#3056D3"
                  />
                  <circle
                    cx="12.0881"
                    cy="12.9717"
                    r="0.646687"
                    transform="rotate(-90 12.0881 12.9717)"
                    fill="#3056D3"
                  />
                  <circle
                    cx="17.7785"
                    cy="12.9717"
                    r="0.646687"
                    transform="rotate(-90 17.7785 12.9717)"
                    fill="#3056D3"
                  />
                  <circle
                    cx="0.706257"
                    cy="7.28077"
                    r="0.646687"
                    transform="rotate(-90 0.706257 7.28077)"
                    fill="#3056D3"
                  />
                  <circle
                    cx="6.39669"
                    cy="7.28077"
                    r="0.646687"
                    transform="rotate(-90 6.39669 7.28077)"
                    fill="#3056D3"
                  />
                  <circle
                    cx="12.0881"
                    cy="7.28077"
                    r="0.646687"
                    transform="rotate(-90 12.0881 7.28077)"
                    fill="#3056D3"
                  />
                  <circle
                    cx="17.7785"
                    cy="7.28077"
                    r="0.646687"
                    transform="rotate(-90 17.7785 7.28077)"
                    fill="#3056D3"
                  />
                  <circle
                    cx="0.706257"
                    cy="1.58989"
                    r="0.646687"
                    transform="rotate(-90 0.706257 1.58989)"
                    fill="#3056D3"
                  />
                  <circle
                    cx="6.39669"
                    cy="1.58989"
                    r="0.646687"
                    transform="rotate(-90 6.39669 1.58989)"
                    fill="#3056D3"
                  />
                  <circle
                    cx="12.0881"
                    cy="1.58989"
                    r="0.646687"
                    transform="rotate(-90 12.0881 1.58989)"
                    fill="#3056D3"
                  />
                  <circle
                    cx="17.7785"
                    cy="1.58989"
                    r="0.646687"
                    transform="rotate(-90 17.7785 1.58989)"
                    fill="#3056D3"
                  />
                </svg>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
