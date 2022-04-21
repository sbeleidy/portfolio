import * as React from "react";

const Footer = class extends React.Component {
  render() {
    return (
      <footer className="bg-black text-white text-center p-2">
        Built with ❤️ by{" "}
        <a className="text-white hover:text-gray-300" href="/">
          Saad Elbeleidy
        </a>
      </footer>
    );
  }
};

export default Footer;
