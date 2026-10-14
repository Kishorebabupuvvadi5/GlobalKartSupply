
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  ArrowUpRight,
  Globe2,
  Handshake,
  ShieldCheck,
  X,
  CheckCircle2,
  PackageCheck,
  Truck,
  Building2,
} from "lucide-react";

import "../CSS/About.css";

const aboutItems = [
  {
    id: "sourcing",
    icon: Globe2,
    title: "Connected sourcing",
    description:
      "Bring product specifications, quantities and destination requirements into one clear enquiry.",
    eyebrow: "SMARTER PRODUCT DISCOVERY",
    heading: "Find the right products. Simplify sourcing.",
    details:
      "Global Kart Supply aims to make product sourcing easier by bringing your requirements into one organized conversation. Share what you need, your target quantity and your delivery destination to help clarify your sourcing requirements.",
    benefits: [
      "Describe your required product and specifications.",
      "Share estimated order quantities and target pricing.",
      "Communicate delivery destinations and fulfilment needs.",
      "Discuss sourcing options based on your requirements.",
    ],
    example:
      "A retailer looking for 500 electronic accessories can share the product specifications, expected quantity and delivery location to begin a sourcing enquiry.",
  },
  {
    id: "commerce",
    icon: Handshake,
    title: "Flexible commerce",
    description:
      "Explore different purchasing and selling models according to your business requirements.",
    eyebrow: "COMMERCE FOR DIFFERENT NEEDS",
    heading: "A flexible approach to buying and selling.",
    details:
      "Different customers have different purchasing needs. Our platform concept supports conversations around wholesale requirements, individual shopping, dropshipping opportunities and supplier partnerships.",
    benefits: [
      "Explore B2B wholesale purchasing enquiries.",
      "Discover products for individual buying needs.",
      "Discuss potential dropshipping arrangements.",
      "Connect with suppliers about partnership opportunities.",
    ],
    example:
      "A growing online retailer can enquire about bulk product pricing, while a potential supplier can contact the team to discuss a possible partnership.",
  },
  {
    id: "clarity",
    icon: ShieldCheck,
    title: "Clear expectations",
    description:
      "Understand pricing, minimum quantities and fulfilment terms before committing to a transaction.",
    eyebrow: "INFORMED BUSINESS DECISIONS",
    heading: "Know the details before you commit.",
    details:
      "Clear communication helps businesses evaluate whether a product or sourcing opportunity meets their needs. Important details can be discussed before proceeding with a transaction.",
    benefits: [
      "Discuss product specifications and quality requirements.",
      "Clarify pricing and potential additional costs.",
      "Confirm minimum order quantities where applicable.",
      "Review delivery timelines and fulfilment arrangements.",
    ],
    example:
      "Before placing a wholesale order, a buyer can ask about minimum quantities, shipping charges, expected delivery timelines and applicable terms.",
  },
];

export default function About() {
  const [activeItem, setActiveItem] = useState(null);

  useEffect(() => {
    if (!activeItem) return;

    function handleKeyDown(event) {
      if (event.key === "Escape") {
        setActiveItem(null);
      }
    }

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [activeItem]);

  return (
    <main className="about-page">
      {/* Hero */}
      <section className="page-hero">
        <div className="eyebrow">ABOUT GLOBAL Kart SUPPLY</div>

        <h1>
          Connecting commerce
          <br />
          <span>with clarity.</span>
        </h1>

        <p>
          Our platform concept brings product discovery, sourcing
          conversations, and flexible buying models into one experience.
        </p>
      </section>

      {/* About introduction and interactive cards */}
      <section className="page-section about-layout">
        <div className="about-intro">
          <div className="about-emblem">
            <Globe2 size={52} />
          </div>

          <div className="eyebrow">OUR APPROACH</div>

          <h2>
            Built to make business
            <br />
            <span>easier to navigate.</span>
          </h2>

          <p>
            Global Kart Supply is designed to serve different commerce
            needs, from individual product discovery to business sourcing
            and wholesale enquiries.
          </p>

          <div className="about-intro-points">
            <span>
              <CheckCircle2 size={17} />
              Product discovery
            </span>

            <span>
              <CheckCircle2 size={17} />
              Business enquiries
            </span>

            <span>
              <CheckCircle2 size={17} />
              Sourcing conversations
            </span>
          </div>
        </div>

        <div className="about-values">
          {aboutItems.map((item) => {
            const Icon = item.icon;

            return (
              <button
                type="button"
                className="value-card"
                key={item.id}
                onClick={() => setActiveItem(item)}
                aria-haspopup="dialog"
              >
                <span className="model-icon">
                  <Icon size={23} />
                </span>

                <h3>{item.title}</h3>

                <p>{item.description}</p>

                <span className="about-card-link">
                  Explore details
                  <ArrowUpRight size={17} />
                </span>
              </button>
            );
          })}
        </div>
      </section>

      {/* How we approach business */}
      <section className="about-principles">
        <div className="about-principles-inner">
          <div className="eyebrow">OUR COMMITMENT</div>

          <h2>
            Better conversations.
            <br />
            <span>More informed decisions.</span>
          </h2>

          <p>
            We aim to make it easier for buyers and businesses to explain
            their requirements, explore suitable options and understand
            important details before moving forward.
          </p>

          <div className="about-principles-grid">
            <article>
              <PackageCheck size={25} />
              <h3>Product focused</h3>
              <p>
                Start with the products, specifications and quantities
                that match your needs.
              </p>
            </article>

            <article>
              <Building2 size={25} />
              <h3>Business minded</h3>
              <p>
                Discuss purchasing requirements and potential
                supplier relationships.
              </p>
            </article>

            <article>
              <Truck size={25} />
              <h3>Fulfilment aware</h3>
              <p>
                Include delivery destinations, timelines and
                relevant fulfilment requirements in your discussions.
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="cta-section">
        <div className="cta-box">
          <div className="eyebrow">LET'S CONNECT</div>

          <h2>
            Tell us what your
            <br />
            business needs.
          </h2>

          <p>
            Share your product or sourcing requirements to start a
            conversation.
          </p>

          <Link className="button button-light" to="/contact">
            Contact our team <ArrowRight size={16} />
          </Link>
        </div>
      </section>

      {/* Details popup */}
      {activeItem && (
        <div
          className="about-modal-overlay"
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) {
              setActiveItem(null);
            }
          }}
        >
          <section
            className="about-detail-modal"
            role="dialog"
            aria-modal="true"
            aria-labelledby="about-modal-title"
          >
            <button
              type="button"
              className="about-modal-close"
              onClick={() => setActiveItem(null)}
              aria-label="Close details"
            >
              <X size={21} />
            </button>

            <div className="about-modal-icon">
              <activeItem.icon size={29} />
            </div>

            <span className="about-modal-eyebrow">
              {activeItem.eyebrow}
            </span>

            <h2 id="about-modal-title">
              {activeItem.heading}
            </h2>

            <p className="about-modal-description">
              {activeItem.details}
            </p>

            <div className="about-modal-benefits">
              <h3>What this means for you</h3>

              {activeItem.benefits.map((benefit) => (
                <div className="about-modal-benefit" key={benefit}>
                  <CheckCircle2 size={18} />
                  <span>{benefit}</span>
                </div>
              ))}
            </div>

            <div className="about-modal-example">
              <strong>Practical example</strong>
              <p>{activeItem.example}</p>
            </div>

            <div className="about-modal-actions">
              <Link
                to="/contact"
                className="about-modal-cta"
                onClick={() => setActiveItem(null)}
              >
                Discuss your requirements
                <ArrowRight size={17} />
              </Link>

              <button
                type="button"
                className="about-modal-secondary"
                onClick={() => setActiveItem(null)}
              >
                Close
              </button>
            </div>
          </section>
        </div>
      )}
    </main>
  );
}
