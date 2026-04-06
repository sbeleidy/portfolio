import * as React from "react";
import { Link } from "gatsby";

const Footer = class extends React.Component {
  render() {
    return (
      <footer className="bg-gray-900 text-white mt-auto">
        <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
          <div className="md:flex md:items-center md:justify-between text-center md:text-left">
            <div className="flex justify-center md:justify-start space-x-6 md:order-2">
              <Link to="/about" className="text-gray-400 hover:text-white">
                About
              </Link>
              <Link to="/research" className="text-gray-400 hover:text-white">
                Research
              </Link>
              <Link to="/blog" className="text-gray-400 hover:text-white">
                Blog
              </Link>
            </div>
            <div className="mt-8 md:mt-0 md:order-1">
              <p className="text-base text-gray-400">
                &copy; {new Date().getFullYear()} Saad Elbeleidy. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </footer>
    );
  }
};

export default Footer;
