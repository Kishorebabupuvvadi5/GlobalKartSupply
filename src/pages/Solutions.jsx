
import { Link } from "react-router-dom";
import {
  ArrowRight,
  Boxes,
  Globe2,
  ShoppingBag,
  Truck,
} from "lucide-react";

import "../CSS/Solutions.css";

const solutions = [
  {
    title: "B2B Wholesale",
    icon: Boxes,
    description:
      "Explore product sourcing for retailers, resellers and organisations that need larger quantities.",
    benefits: [
      "Volume-based purchasing enquiries",
      "Minimum order quantity discussions",
      "Supplier pricing and availability confirmation",
    ],
  },
  {
    title: "B2C Shopping",
    icon: ShoppingBag,
    description:
      "Create a straightforward product discovery experience for individual shoppers.",
    benefits: [
      "Browse products by category",
      "Explore product information",
      "Prepare a product enquiry",
    ],
  },
  {
    title: "Dropshipping",
    icon: Truck,
    description:
      "Explore potential supplier arrangements for businesses that sell products online.",
    benefits: [
      "Discuss supplier fulfilment capabilities",
      "Clarify dispatch and delivery times",
      "Confirm returns and stock arrangements",
    ],
  },
  {
    title: "Global Sourcing",
    icon: Globe2,
    description:
      "Share your product specifications and target quantities to begin a sourcing discussion.",
    benefits: [
      "Product specification enquiries",
      "Destination and quantity requirements",
      "Supplier and commercial term discussions",
    ],
  },
];

export default function Solutions() {
  return (
    <main className="solutions-page">
      {/* Full-width hero */}
      <section className="page-hero">
        <div className="eyebrow">OUR BUSINESS SOLUTIONS</div>

        <h1>
          Commerce built around
          <br />
          <span>your business.</span>
        </h1>

        <p>
          Explore flexible ways to discover products, source inventory
          and discuss fulfilment arrangements.
        </p>
      </section>

      {/* Solutions cards */}
      <section className="page-section">
        <div className="solution-list">
          {solutions.map(
            ({ title, icon: Icon, description, benefits }, i) => (
              <article className="solution-detail" key={title}>
                <div className="solution-icon">
                  <Icon size={27} strokeWidth={2} />
                </div>

                <div className="solution-copy">
                  <span className="eyebrow">
                    SOLUTION {String(i + 1).padStart(2, "0")}
                  </span>

                  <h2>{title}</h2>

                  <p>{description}</p>

                  <ul>
                    {benefits.map((benefit) => (
                      <li key={benefit}>{benefit}</li>
                    ))}
                  </ul>

                  <Link
                    className="model-link"
                    to="/contact"
                    state={{ model: title }}
                  >
                    Discuss your requirements
                    <ArrowRight size={15} />
                  </Link>
                </div>
              </article>
            )
          )}
        </div>
      </section>
    </main>
  );
}