import React, { useState } from "react";

function Clients() {
  const [visibleRows, setVisibleRows] = useState(1);
  const clientsPerPage = 9;

  const handleSeeMore = () => {
    setVisibleRows(visibleRows + 1);
  };

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
                  {clients
                    .slice(0, visibleRows * clientsPerPage)
                    .map((client, index) => (
                      <Client
                        key={index}
                        name={client.name}
                        location={client.location}
                      />
                    ))}
                </div>
              </div>
            </section>
            {visibleRows < Math.ceil(clients.length / clientsPerPage) && (
              <div className="flex justify-center mt-4">
                <button
                  onClick={handleSeeMore}
                  className="bg-blue-700 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded"
                >
                  See More
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Clients;

function Client({ name, location }) {
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-lg w-full max-w-md mx-auto p-6 ">
      <div className="text-center">
        <h2 className="text-2xl font-bold text-gray-800 mb-2">{name}</h2>
        <p className="text-sm">
          <span className="border-b border-blue-500 pb-2">{location}</span>
        </p>
      </div>
    </div>
  );
}

const clients = [
  { name: "Gangotree Homes & Holidays", location: "Kothrud, Pune" },
  { name: "Setoo Solutions Pvt Ltd", location: "Aundh" },
  { name: "Casurina Tourism Co-Op Society", location: "Bhor" },
  { name: "Saudamini Handloom", location: "Deccan" },
  {
    name: "Bougainvilla Tourism Co-Op Society Cluster I & II",
    location: "Bhor",
  },
  { name: "Minimoon Homes & Hospitality Pvt Ltd", location: "Dattawadi" },
  { name: "Marvel Fugo Co-Op Society", location: "Hadapsar, Pune" },
  { name: "Tasmia", location: "Dahanukar Colony, Pune" },
  { name: "Marvel Diva Co-Op Hsg Society", location: "Hadapsar, Pune" },
  { name: "Shivmudra Security", location: "Pune" },
  { name: "Springvally Co Op Hsg Society", location: "Hadapsar, Pune" },
  { name: "M/s Transcore Electricals", location: "Mulshi" },
  { name: "Atharv Classic Hsg Soc.", location: "Paud Road, Pune" },

  { name: "Ace Automation", location: "Sinhgad Road, Pune" },
  { name: "Tulip Residency Co.Op Soc", location: "Sinhgad Rd" },
  { name: "Bhadait Foods", location: "Nalstop" },
  { name: "Edencourt Co-Op Hsg Society", location: "Dhayari" },
  { name: "Reglink India Private Limited", location: "Bavdhan" },

  { name: "Vivanta Primera Co-Op Hsg. Soc.", location: "Undri Pune" },
  { name: "Sprout House", location: "Satara" },
  { name: "Parth Nilay Housing Society Ltd", location: "Sus" },
  { name: "Sanket Brush", location: "Kasarwadi, Pimpri" },
  { name: "Atharva Heights (Mahatma Soc)", location: "Kothrud" },
  { name: "M B Nagarkar & Co.", location: "Dahanukar Colony, Pune" },
  { name: "Athashree Co-Op Hsg Soc", location: "Bhugaon, Mulshi" },
  { name: "PropExpert LLP", location: "Katraj" },
  { name: "Grand I Con Co-Op Soc", location: "Ambegaon" },
  { name: "Bhushan Lohar Edu. Services", location: "Nashik" },
  { name: "Daffodils Co-Op Hsg Society", location: "Kodhwa" },
  { name: "Harshad Enterprises", location: "Welhe" },
  { name: "Popular Colony Hsg. Soc.", location: "Warje, Pune" },
  { name: "Active Security", location: "" },
  { name: "Shriram Apartment", location: "Shivaji Nagar, Pune" },
  { name: "Kerfworks LLP", location: "Satara" },
];
