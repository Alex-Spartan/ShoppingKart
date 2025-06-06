import React from "react";
import { Link } from "react-router-dom";
import XIcon from "@mui/icons-material/X";
import InstagramIcon from "@mui/icons-material/Instagram";
import PinterestIcon from "@mui/icons-material/Pinterest";

const Footer = () => {
  const support = [
    "Contact Us",
    "Returns",
    "Privacy Policy",
    "Terms of Service",
  ];
  const links = { Home: "/", Shop: "/products", Cart: "/cart", FAQ: "/faq" };
  return (
    <footer className="bg-gray-900 text-gray-300 py-12 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <h3 className="text-xl font-semibold text-white mb-2">
            Vá às Compras
          </h3>
          <p className="text-sm leading-relaxed">
            We bring you the best in style. Explore premium clothing and latest
            trends.
          </p>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-white mb-2">
            Useful Links
          </h3>
          <ul className="space-y-1">
            {Object.entries(links).map(([key, value]) => (
              <li key={key}>
                <Link to={value} className="hover:underline">
                  {key}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-white mb-2">Support</h3>
          <ul className="space-y-1">
            {support.map((link) => (
              <li key={link}>
                <a href="#" className="hover:underline">
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-white mb-2">Contact</h3>
          <p>Email: support@example.com</p>
          <p>Phone: +91-9876543210</p>
          <div className="flex gap-4 mt-3">
            <Link to="#" className="hover:scale-110">
              <XIcon />
            </Link>
            <Link to="#" className="hover:scale-110">
              <InstagramIcon />
            </Link>
            <Link to="#" className="hover:scale-110">
              <PinterestIcon />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
