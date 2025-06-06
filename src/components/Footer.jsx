import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-gray-300 py-12 px-6">
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
            {["Home", "Shop", "Cart", "Wishlist", "FAQ"].map((link) => (
              <li key={link}>
                <a href="#" className="hover:underline">
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-white mb-2">Support</h3>
          <ul className="space-y-1">
            {[
              "Contact Us",
              "Returns",
              "Privacy Policy",
              "Terms of Service",
            ].map((link) => (
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
            {/* Replace with icons */}
            <a href="#">
              <span>FB</span>
            </a>
            <a href="#">
              <span>IG</span>
            </a>
            <a href="#">
              <span>TW</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
