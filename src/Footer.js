import React from "react";

const Footer = () => {
  return (
    <footer className=" py-12 lg:py-16">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="lg:col-span-2">
          <h2 className="text-2xl font-semibold text-gray-800 mb-2">
            Finactaxpro - Your One-Stop Business Solution
          </h2>
          <p className="text-base text-gray-600 mb-4">
            Count on Finactaxpro for all your business needs. From accounting
            and taxation to setup, compliance, and more, we've got you covered.
            Simplify your journey to success with Finactaxpro.
          </p>
        </div>
        <div className="grid grid-cols-* lg:grid-cols-3 gap-x-8 lg:gap-x-0">
          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">
              Company
            </h3>
            <ul className="space-y-2">
              <NavLink link="/#About" label="About Finactaxpro" />
              <NavLink link="/#Contact" label="Contact & Support" />
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">
              Quick Links
            </h3>
            <ul className="space-y-2">
              <NavLink link="/#Services" label="Our Services" />
              <NavLink link="/#Team" label="Know Our Team" />
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-gray-800 mb-2 ">
              Follow Us On
            </h4>
            <div className="mb-3 flex items-center space-x-2">
              <a
                href="https://www.facebook.com/people/Finactaxpro-Services-Bharam-LLP/61557797605359/"
                target="_blank"
                rel="noopener noreferrer"
                className="mr-3 flex h-8 w-8 items-center justify-center rounded-full border border-stroke text-dark hover:border-primary hover:bg-primary hover:text-white dark:border-dark-3  dark:hover:border-primary sm:mr-4 lg:mr-3 xl:mr-4"
              >
                <svg
                  width="8"
                  height="16"
                  viewBox="0 0 8 16"
                  className="fill-current"
                >
                  <path d="M7.43902 6.4H6.19918H5.75639V5.88387V4.28387V3.76774H6.19918H7.12906C7.3726 3.76774 7.57186 3.56129 7.57186 3.25161V0.516129C7.57186 0.232258 7.39474 0 7.12906 0H5.51285C3.76379 0 2.54609 1.44516 2.54609 3.5871V5.83226V6.34839H2.10329H0.597778C0.287819 6.34839 0 6.63226 0 7.04516V8.90323C0 9.26452 0.243539 9.6 0.597778 9.6H2.05902H2.50181V10.1161V15.3032C2.50181 15.6645 2.74535 16 3.09959 16H5.18075C5.31359 16 5.42429 15.9226 5.51285 15.8194C5.60141 15.7161 5.66783 15.5355 5.66783 15.3806V10.1419V9.62581H6.13276H7.12906C7.41688 9.62581 7.63828 9.41935 7.68256 9.10968V9.08387V9.05806L7.99252 7.27742C8.01466 7.09677 7.99252 6.89032 7.85968 6.68387C7.8154 6.55484 7.61614 6.42581 7.43902 6.4Z" />
                </svg>
              </a>

              <a
                href="https://www.linkedin.com/company/finactaxpro-services-bharam-llp/about/"
                target="_blank"
                rel="noopener noreferrer"
                className="mr-3 flex h-8 w-8 items-center justify-center rounded-full border border-stroke text-dark hover:border-primary hover:bg-primary hover:text-white dark:border-dark-3  dark:hover:border-primary sm:mr-4 lg:mr-3 xl:mr-4"
              >
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 14 14"
                  className="fill-current"
                >
                  <path d="M13.0214 0H1.02084C0.453707 0 0 0.451613 0 1.01613V12.9839C0 13.5258 0.453707 14 1.02084 14H12.976C13.5432 14 13.9969 13.5484 13.9969 12.9839V0.993548C14.0422 0.451613 13.5885 0 13.0214 0ZM4.15142 11.9H2.08705V5.23871H4.15142V11.9ZM3.10789 4.3129C2.42733 4.3129 1.90557 3.77097 1.90557 3.11613C1.90557 2.46129 2.45002 1.91935 3.10789 1.91935C3.76577 1.91935 4.31022 2.46129 4.31022 3.11613C4.31022 3.77097 3.81114 4.3129 3.10789 4.3129ZM11.9779 11.9H9.9135V8.67097C9.9135 7.90323 9.89082 6.8871 8.82461 6.8871C7.73571 6.8871 7.57691 7.74516 7.57691 8.60323V11.9H5.51254V5.23871H7.53154V6.16452H7.55423C7.84914 5.62258 8.50701 5.08065 9.52785 5.08065C11.6376 5.08065 12.0232 6.43548 12.0232 8.2871V11.9H11.9779Z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
        <div className="mt-8 border-t border-gray-200 pt-8 flex flex-col lg:flex-row items-center justify-between">
          <div className="text-center lg:text-left">
            <p className="text-sm text-gray-600">
              &copy; 2024 Finactaxpro Services Bharam LLP
            </p>
            <p className="text-sm text-gray-600">
              +91-9850524322 / +91-9730649059
            </p>
          </div>
          <div className="mt-4 lg:mt-0 space-x-4 flex items-center justify-center lg:justify-end">
            <SocialLink
              href="https://www.facebook.com/people/Finactaxpro-Services-Bharam-LLP/61557797605359/"
              iconClass="fab fa-facebook"
            />
            <SocialLink
              href="https://www.linkedin.com/company/finactaxpro-services-bharam-llp/about/"
              iconClass="fab fa-linkedin"
            />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

const NavLink = ({ link, label }) => {
  return (
    <li>
      <a
        href={link}
        className="text-base text-gray-600 hover:text-primary transition duration-300"
      >
        {label}
      </a>
    </li>
  );
};

const SocialLink = ({ href, iconClass }) => {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="text-gray-600 hover:text-primary transition duration-300"
    >
      <i className={iconClass}></i>
    </a>
  );
};
