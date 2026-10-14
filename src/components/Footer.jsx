import { Link } from "react-router-dom";
import { Globe2, Mail } from "lucide-react";
import "./Footer.css";

export default function Footer() {
  return (
    <footer className="gcs-footer">
      <div className="section-wrap">
        <div className="footer-main">
          <div className="footer-brand-col">
            <Link className="brand" to="/">
              <span className="brand-mark">
                <Globe2 size={23} />
              </span>
              <span className="brand-copy">
                <strong>Global Kart Supply</strong>
                <small>COMMERCE, CONNECTED</small>
              </span>
            </Link>

            <p>
              Product discovery, wholesale sourcing and flexible commerce
              solutions for businesses and shoppers.
            </p>
          </div>

          <div className="footer-col">
            <strong>Explore</strong>
            <Link to="/solutions">Solutions</Link>
            <Link to="/products">Products</Link>
            <Link to="/calculator">Profit calculator</Link>
          </div>

          <div className="footer-col">
            <strong>Company</strong>
            <Link to="/about">About us</Link>
            <Link to="/contact">Contact</Link>
            <Link to="/contact">Supplier enquiries</Link>
          </div>

          <div className="footer-col">
            <strong>Get in touch</strong>
            <Link to="/contact">
              <Mail size={15} /> info@globalkartsupply.com
            </Link>
          </div>
        </div>

        <div className="footer-bottom">
          <span>
            © {new Date().getFullYear()} Global Kart Supply. All rights
            reserved.
          </span>
          <span>Product prices and availability subject to confirmation.</span>
        </div>
      </div>
    </footer>
  );
}
