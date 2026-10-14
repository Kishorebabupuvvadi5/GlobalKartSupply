
import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  ArrowUpRight,
  Globe2,
  PackageCheck,
  Truck,
  ShieldCheck,
  Boxes,
  ShoppingBag,
  Headphones,
  CheckCircle2,
} from "lucide-react";

import ContactModal from "../components/ContactModal";
import "../CSS/Home.css";

const categories = [
  {
    title: "Electronics",
    description: "Technology and everyday essentials",
    image:
      "https://images.unsplash.com/photo-1498049794561-7780e7231661?w=900&q=85",
  },
  {
    title: "Home & Living",
    description: "Products for modern lifestyles",
    image:
      "https://images.unsplash.com/photo-1484154218962-a197022b5858?w=900&q=85",
  },
  {
    title: "Fashion & Accessories",
    description: "Style for every occasion",
    image:
      "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=900&q=85",
  },
];

const benefits = [
  {
    icon: <Boxes size={24} />,
    title: "Diverse Product Range",
    description:
      "Explore multiple product categories through one convenient platform.",
  },
  {
    icon: <Globe2 size={24} />,
    title: "Global Supply Focus",
    description:
      "Connecting product discovery with international sourcing opportunities.",
  },
  {
    icon: <ShieldCheck size={24} />,
    title: "Business-Oriented Service",
    description:
      "A professional experience for businesses and individual customers.",
  },
  {
    icon: <Headphones size={24} />,
    title: "Dedicated Inquiries",
    description:
      "Get in touch with our team to discuss products and requirements.",
  },
];

export default function Home() {
  const [contactOpen, setContactOpen] = useState(false);

  const openContact = () => setContactOpen(true);
  const closeContact = () => setContactOpen(false);

  return (
    <>
      <main className="gcs-home">
        {/* Hero section */}
        <section className="gcs-hero">
          <div className="gcs-hero-overlay" />

          <div className="gcs-hero-content">
            <h1>
              <span className="first">Discover More.</span>
              <br />
              <span className="second">Source Smarter.</span>
              <br />
              <span>Grow Globally.</span>
            </h1>

            <p>
              Explore a world of products and sourcing possibilities with
              Global Kart Supply — connecting businesses and everyday buyers
              to new opportunities.
            </p>

            <div className="gcs-hero-actions">
              <Link to="/products" className="gcs-btn-primary">
                Explore Products <ArrowUpRight size={19} />
              </Link>

              <button
                type="button"
                className="gcs-btn-outline"
                onClick={openContact}
              >
                Get in Touch <ArrowRight size={19} />
              </button>
            </div>

            <div className="gcs-hero-highlights">
              <span>
                <CheckCircle2 size={16} />
                Multiple Categories
              </span>

              <span>
                <CheckCircle2 size={16} />
                B2B & B2C Focus
              </span>

              <span>
                <CheckCircle2 size={16} />
                Global Perspective
              </span>
            </div>
          </div>

          <div className="gcs-floating-card">
            <div className="gcs-floating-icon">
              <PackageCheck size={24} />
            </div>

            <div>
              <strong>One Platform</strong>
              <span>More sourcing possibilities</span>
            </div>
          </div>
        </section>

        {/* Value strip */}
        <section className="gcs-value-strip">
          <div>
            <Globe2 size={21} />
            <span>Global Commerce</span>
          </div>

          <div>
            <ShoppingBag size={21} />
            <span>Product Discovery</span>
          </div>

          <div>
            <Truck size={21} />
            <span>Supply Solutions</span>
          </div>

          <div>
            <ShieldCheck size={21} />
            <span>Professional Service</span>
          </div>
        </section>

        {/* Product categories */}
        <section className="gcs-section gcs-categories">
          <div className="gcs-section-heading">
            <div>
              <span className="gcs-kicker">
                EXPLORE OUR COLLECTION
              </span>

              <h2>Products for every possibility.</h2>

              <p>
                Discover categories designed to serve a wide range of personal
                and business needs.
              </p>
            </div>

            <Link to="/products" className="gcs-text-link">
              View All Products <ArrowUpRight size={18} />
            </Link>
          </div>

          <div className="gcs-category-grid">
            {categories.map((category) => (
              <Link
                to="/products"
                className="gcs-category-card"
                key={category.title}
              >
                <img
                  src={category.image}
                  alt={category.title}
                  loading="lazy"
                />

                <div className="gcs-category-shade" />

                <div className="gcs-category-content">
                  <span>{category.description}</span>
                  <h3>{category.title}</h3>
                </div>

                <span className="gcs-category-arrow">
                  <ArrowUpRight size={21} />
                </span>
              </Link>
            ))}
          </div>
        </section>

        {/* Why Global Kart Supply */}
        <section className="gcs-feature-section gcs-feature-full">
          <div className="gcs-feature-content">
            <span className="gcs-kicker">
              WHY GLOBAL Kart SUPPLY?
            </span>

            <h2>
              A better way to
              <span> explore global supply.</span>
            </h2>

            <p>
              We believe discovering the right products should be
              straightforward. Our platform brings multiple categories and
              sourcing conversations into one professional experience.
            </p>

            <div className="gcs-benefits">
              {benefits.map((item) => (
                <div className="gcs-benefit" key={item.title}>
                  <div className="gcs-benefit-icon">
                    {item.icon}
                  </div>

                  <div className="gcs-benefit-copy">
                    <h3>{item.title}</h3>
                    <p>{item.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <Link to="/solutions" className="gcs-btn-primary">
              Explore Our Solutions <ArrowRight size={18} />
            </Link>
          </div>
        </section>

        {/* Contact CTA */}
        <section className="gcs-cta">
          <div className="gcs-cta-inner">
            <span className="gcs-kicker">LET'S CONNECT</span>

            <h2>
              Looking for your next sourcing opportunity?
            </h2>

            <p>
              Tell us what you need, and start a conversation with Global Kart
              Supply.
            </p>

            <Link to="/contact" className="gcs-cta-button">
              Send an Inquiry <ArrowUpRight size={20} />
            </Link>
          </div>
        </section>
      </main>

      {/* Contact popup */}
      <ContactModal
        open={contactOpen}
        onClose={closeContact}
      />
    </>
  );
}
