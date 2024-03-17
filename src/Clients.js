import React from "react";

function Clients() {
  return (
    <section className="pb-10 pt-20 lg:pb-20 lg:pt-[120px]">
      <div className="container mx-auto">
        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4">
            <div className="mx-auto mb-[60px] max-w-[510px] text-center">
              <span className="mb-2 block text-lg font-semibold text-primary">
                OUR VALUABLE CLIENTS
              </span>
              <p className="text-base text-body-color ">
                We are proud to have a diverse range of clients, including
                Co-Operative Societies and Company & Business Organizations, who
                trust us to help them achieve their financial goals.
              </p>
            </div>
            <section>
              <div className="relative items-center w-full px-5 py-12 mx-auto md:px-12 lg:px-24 max-w-7xl">
                <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
                  <Client
                    name="Gangotree Homes & Holidays"
                    location="Kothrud, Pune"
                  />
                  <Client name="Setoo Solutions Pvt Ltd" location="Aundh" />
                  <Client
                    name="Casurina Tourism Co-Op Society"
                    location="Bhor"
                  />
                  <Client name="Saudamini Handloom" location="Deccan" />
                  <Client
                    name="Bougainvilla Tourism Co-Op Society Cluster I & II"
                    location="Bhor"
                  />
                  <Client
                    name="Minimoon Homes & Hospitality Pvt Ltd"
                    location="Dattawadi"
                  />
                  <Client
                    name="Marvel Fugo Co-Op Society"
                    location="Hadapsar, Pune"
                  />
                  <Client name="Tasmia" location="Dahanukar Colony, Pune" />
                  <Client
                    name="Marvel Diva Co-Op Hsg Society"
                    location="Hadapsar, Pune"
                  />
                  <Client name="Shivmudra Security" location="Pune" />
                  <Client
                    name="Springvally Co Op Hsg Society"
                    location="Hadapsar, Pune"
                  />
                  <Client name="M/s Transcore Electricals" location="Mulshi" />
                  <Client
                    name="Atharv Classic Hsg Soc."
                    location="Paud Road, Pune"
                  />
                  <Client name="Ace Automation" location="Sinhgad Road, Pune" />
                  <Client
                    name="Tulip Residency Co.Op Soc"
                    location="Sinhgad Rd"
                  />
                  <Client name="Bhadait Foods" location="Nalstop" />
                  <Client
                    name="Edencourt Co-Op Hsg Society"
                    location="Dhayari"
                  />
                  <Client
                    name="Reglink India Private Limited"
                    location="Bavdhan"
                  />
                  <Client
                    name="Vivanta Primera Co-Op Hsg. Soc."
                    location="Undri Pune"
                  />
                  <Client name="Sprout House" location="Satara" />
                  <Client
                    name="Parth Nilay Housing Society Ltd"
                    location="Sus"
                  />
                  <Client name="Sanket Brush" location="Kasarwadi, Pimpri" />
                  <Client
                    name="Atharva Heights (Mahatma Soc)"
                    location="Kothrud"
                  />
                  <Client
                    name="M B Nagarkar & Co."
                    location="Dahanukar Colony, Pune"
                  />
                  <Client
                    name="Athashree Co-Op Hsg Soc"
                    location="Bhugaon, Mulshi"
                  />
                  <Client name="PropExpert LLP" location="Katraj" />
                  <Client name="Grand I Con Co-Op Soc" location="Ambegaon" />
                  <Client
                    name="Bhushan Lohar Edu. Services"
                    location="Nashik"
                  />
                  <Client
                    name="Daffodils Co-Op Hsg Society"
                    location="Kodhwa"
                  />
                  <Client name="Harshad Enterprises" location="Welhe" />
                  <Client
                    name="Popular Colony Hsg. Soc."
                    location="Warje, Pune"
                  />
                  <Client name="Active Security" location="" />
                  <Client
                    name="Shriram Apartment"
                    location="Shivaji Nagar, Pune"
                  />
                  <Client name="Kerfworks LLP" location="Satara" />
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </section>
  );
}

function Client({ name, location }) {
  return (
    <div className="flex flex-col w-full max-w-lg p-5 text-left shadow-xl lg:mx-auto rounded-xl text-center">
      <div className="mb-3">
        <h2 className="text-lg font-semibold text-primary">{name}</h2>
      </div>
      <div>
        <p className="text-base text-gray-500">{location}</p>
      </div>
    </div>
  );
}

export default Clients;
