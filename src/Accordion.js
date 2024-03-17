import React, { useState } from "react";

const Accordion = () => {
  return (
    <section className="relative z-20 overflow-hidden bg-white pb-12 pt-20  lg:pb-[90px] lg:pt-[120px]">
      <div className="container mx-auto">
        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4">
            <div className="mx-auto mb-[60px] max-w-[520px] text-center lg:mb-20">
              <span className="mb-2 block text-lg font-semibold text-primary">
                FAQ
              </span>
              <h2 className="mb-4 text-3xl font-bold text-dark  sm:text-[40px]/[48px]">
                Any Questions? Look Here
              </h2>
              <p className="text-base text-body-color ">
                Get answers to common questions about our services and platform.
              </p>
            </div>
          </div>
        </div>

        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4 lg:w-1/2">
            <AccordionItem
              header="What services do you offer?"
              text="We offer a comprehensive range of services to meet the diverse needs of our clients. These services include accounts and outsourcing, co-op society compliance and accounting, business management consulting/CFO services, registration services, HR and related services, and company formation work and legal advice. Our team's expertise and experience enable us to provide tailored solutions that align with our clients' specific needs and objectives. We are committed to delivering high-quality services that are reliable, accurate, and timely. Our focus is on building long-term relationships with our clients and supporting them in achieving their goals. Trust us to provide expert guidance and support for all your business needs."
            />
            <AccordionItem
              header="What is included in your Accounts & outsourcing services?"
              text="Our Accounts and outsourcing services offer a wide range of financial management tasks to support your business operations. These include bookkeeping, direct and indirect taxes consulting, preparation of Management Information Systems (MIS), accounts receivable and payable management, filing of GST returns, Income Tax returns, TDS/TCS returns, Profession Tax returns, PF returns, and ESIC returns. Our dedicated team is committed to delivering exceptional financial management solutions with a focus on compliance, accuracy, and efficiency. We understand the importance of freeing up your time to focus on business growth, which is why we provide reliable and comprehensive financial management services. Rely on us to provide tailored solutions that align with your business goals and objectives."
            />
            <AccordionItem
              header="Can you explain your Co-op society compliance & accounting services?"
              text="Our Co-op society compliance and accounting services offer comprehensive support to cooperative housing societies. Our range of services includes accounting and audit specific to cooperative societies, assistance with the writing of registers and compliance with meeting regulations, support with registration and election processes, consultancy services aligned with society bye-laws, management of receipts and communication, development and execution of recovery plans, facilitation of handover activities between builders/developers and society members, assistance with conveyance deed work, and provision of legal support. Our expertise in cooperative society management ensures smooth operations and compliance with regulatory requirements, enabling societies to function efficiently and effectively. Trust us to provide expert guidance and support for all your cooperative society needs. Our tailored services are designed to meet the specific requirements of cooperative societies, and we are committed to delivering high-quality solutions that are reliable, accurate, and timely. Our focus is on building long-term relationships with our clients and supporting them in achieving their goals."
            />
          </div>
          <div className="w-full px-4 lg:w-1/2">
            <AccordionItem
              header="What does your Business Management Consulting/CFO services entail?"
              text="Our Business Management Consulting/CFO services offer a comprehensive suite of solutions to help businesses achieve their financial objectives. Our Virtual CFO services provide expert financial guidance and oversight, including cost accounting, cost management, cost audit, and compliance services. Our services also extend to support for business setup, tax planning, and budgeting to optimize financial performance and ensure regulatory compliance. Additionally, we provide services encompassing the preparation of project reports, conducting internal audits, fixed asset audits, and inventory audits. By leveraging our expertise in financial management and strategic planning, we help businesses streamline operations, enhance profitability, and achieve sustainable growth. Our tailored services are designed to meet the specific requirements of your business, and we are committed to delivering high-quality solutions that align with your goals and objectives. Trust us to provide expert guidance and support for all your financial management needs. With our services, you can focus on growing your business while we take care of the financial aspects."
            />
            <AccordionItem
              header="What services are covered under Registration services?"
              text="Our Registration services offer a comprehensive range of registrations essential for businesses to operate legally and efficiently. We provide services to facilitate GST registration, PAN/TAN registration, and obtaining import and export licenses. Our team also assists in registering for PF/ESIC, MSME, PTRC/PTEC, and Shop Act licenses, ensuring compliance with regulatory requirements and enabling businesses to commence operations smoothly. We understand the importance of adhering to legal and regulatory standards while ensuring efficient and timely registration processes. Our expert guidance and support simplify the registration process, saving time and effort for our clients. Trust us to provide tailored solutions that meet the specific needs of your business and enable you to focus on growth and development. Our services are designed to offer reliable and efficient solutions that align with your business goals and objectives."
            />
            <AccordionItem
              header="What HR & related services do you offer?"
              text="Our HR & related services provide a comprehensive suite of solutions tailored to meet the diverse needs of businesses. Our services encompass HR and admin services, including payroll management and compliance, ensuring timely and accurate disbursement of salaries while adhering to regulatory requirements. Our team also provides expertise in employee tax planning and company salary structure work, optimizing tax efficiency for both employers and employees. We prioritize the streamlining of HR processes and promoting compliance to enable businesses to efficiently manage their workforce and foster a conducive work environment. Our specialized team ensures that businesses can focus on their core operations while we take care of the HR-related work. Our tailored solutions meet the specific needs of businesses and enable them to achieve their growth and development goals. Rely on us to provide reliable and efficient solutions that align with your business goals and objectives."
            />
          </div>
          <div className="w-full px-4 lg:w-1/2">
            <AccordionItem
              header="What does your Company Formation work & legal advice entail?"
              text="Our Company Formation work & legal advice services offer comprehensive assistance to facilitate the establishment of businesses and ensure legal compliance. Our team specializes in Company / LLP / firms formation and provides comprehensive support throughout the process, including assistance with registration and compliance with Registrar of Companies (ROC) regulations. We understand the importance of legal compliance in business operations and work towards ensuring our clients adhere to all legal requirements. Our team also provides expert legal advice on various matters pertinent to business operations, helping clients navigate complex legal landscapes and make informed decisions. By leveraging our expertise, clients can establish their enterprises with confidence, knowing that they have met all legal requirements and have access to expert guidance. Trust us to provide tailored solutions that meet the specific needs of your business and enable you to focus on growth and development. Our services are designed to offer reliable and efficient solutions that align with your business goals and objectives. Use our services to streamline your business operations, ensure legal compliance, and achieve your business objectives.
              "
            />
          </div>
          <div className="w-full px-4 lg:w-1/2">
            <AccordionItem
              header="How can I contact your support team?"
              text="Our support team is available to assist you with all your inquiries and assistance needs. You can reach out to us by emailing us at accounts@finactaxprobharam.com or by calling us at +91-9850524322 or +91-9730649059. Additionally, you can visit our website and fill out the Contact Us form. Our team is dedicated to providing prompt and courteous assistance to all our clients, and we are committed to delivering high-quality services that meet your needs. Trust us to be there whenever you need us. Our team is always available to help, and we prioritize resolving your inquiries and assisting you with any issues you may encounter. We understand the importance of timely and effective support, and we are committed to providing the best possible service to our clients. Contact us today for any inquiries or assistance you may need.
              "
            />
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 right-0 z-[-1]">
        <svg
          width="1440"
          height="886"
          viewBox="0 0 1440 886"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            opacity="0.5"
            d="M193.307 -273.321L1480.87 1014.24L1121.85 1373.26C1121.85 1373.26 731.745 983.231 478.513 729.927C225.976 477.317 -165.714 85.6993 -165.714 85.6993L193.307 -273.321Z"
            fill="url(#paint0_linear)"
          />
          <defs>
            <linearGradient
              id="paint0_linear"
              x1="1308.65"
              y1="1142.58"
              x2="602.827"
              y2="-418.681"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#3056D3" stop-opacity="0.36" />
              <stop offset="1" stop-color="#F5F2FD" stop-opacity="0" />
              <stop offset="1" stop-color="#F5F2FD" stop-opacity="0.096144" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </section>
  );
};

export default Accordion;

const AccordionItem = ({ header, text }) => {
  const [active, setActive] = useState(false);

  const handleToggle = () => {
    // event.preventDefault();
    setActive(!active);
  };
  return (
    <div className="mb-8 w-full rounded-lg bg-white p-4 shadow-[0px_20px_95px_0px_rgba(201,203,204,0.30)]  dark:shadow-[0px_20px_95px_0px_rgba(0,0,0,0.30)] sm:p-8 lg:px-6 xl:px-8">
      <button
        className={`faq-btn flex w-full text-left`}
        onClick={() => handleToggle()}
      >
        <div className="mr-5 flex h-10 w-full max-w-[40px] items-center justify-center rounded-lg bg-primary/5 text-primary ">
          <svg
            className={`fill-primary stroke-primary duration-200 ease-in-out ${
              active ? "rotate-180" : ""
            }`}
            width="17"
            height="10"
            viewBox="0 0 17 10"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M7.28687 8.43257L7.28679 8.43265L7.29496 8.43985C7.62576 8.73124 8.02464 8.86001 8.41472 8.86001C8.83092 8.86001 9.22376 8.69083 9.53447 8.41713L9.53454 8.41721L9.54184 8.41052L15.7631 2.70784L15.7691 2.70231L15.7749 2.69659C16.0981 2.38028 16.1985 1.80579 15.7981 1.41393C15.4803 1.1028 14.9167 1.00854 14.5249 1.38489L8.41472 7.00806L2.29995 1.38063L2.29151 1.37286L2.28271 1.36548C1.93092 1.07036 1.38469 1.06804 1.03129 1.41393L1.01755 1.42738L1.00488 1.44184C0.69687 1.79355 0.695778 2.34549 1.0545 2.69659L1.05999 2.70196L1.06565 2.70717L7.28687 8.43257Z"
              fill=""
              stroke=""
            />
          </svg>
        </div>

        <div className="w-full">
          <h4 className="mt-1 text-lg font-semibold text-dark ">{header}</h4>
        </div>
      </button>

      <div
        className={`pl-[62px] duration-200 ease-in-out ${
          active ? "block" : "hidden"
        }`}
      >
        <p className="py-3 text-base leading-relaxed text-body-color ">
          {text}
        </p>
      </div>
    </div>
  );
};
