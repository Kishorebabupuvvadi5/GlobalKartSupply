
import { Link, useParams } from "react-router-dom";
import {
  ArrowLeft,
  ArrowRight,
  PackageCheck,
  ShieldCheck,
  Truck,
} from "lucide-react";
import { products } from "../data/products";
import "../CSS/Products.css";

const money = (value) =>
  new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(value);

const tones = {
  headphones: "sage",
  lamp: "sand",
  bottle: "mint",
  bag: "peach",
  mouse: "blue",
  package: "cream",
  notebook: "sage",
  backpack: "blue",
};

export default function ProductDetails() {
  const { id } = useParams();
  const product = products.find((item) => item.id === id);

  if (!product) {
    return (
      <main className="product-not-found-page">
        <div className="product-not-found">
          <div className="product-not-found-icon">
            <PackageCheck size={34} />
          </div>

          <span className="catalog-kicker">PRODUCT CATALOGUE</span>

          <h1>Product not found</h1>

          <p>
            This product isn't available in the current demonstration
            catalogue. Return to the catalogue to explore other products.
          </p>

          <Link className="button button-primary" to="/products">
            <ArrowLeft size={16} />
            Back to products
          </Link>
        </div>
      </main>
    );
  }

  const tone =
    tones[product.icon] ||
    product.tone ||
    "sage";

  return (
    <main className="product-details-page">
      {/* Breadcrumb navigation */}
      <div className="product-details-container">
        <nav className="product-breadcrumb" aria-label="Breadcrumb">
          <Link to="/">Home</Link>
          <span>/</span>
          <Link to="/products">Products</Link>
          <span>/</span>
          <span className="breadcrumb-current">{product.name}</span>
        </nav>

        <Link className="back-link" to="/products">
          <ArrowLeft size={15} />
          Back to catalogue
        </Link>

        <div className="product-detail-grid">
          {/* Product visual */}
          <div className={`product-detail-art ${tone}`}>
            <div className="product-detail-art-orbit" />

            <PackageCheck size={110} strokeWidth={1.1} />

            {product.badge && (
              <span className="product-detail-badge">
                {product.badge}
              </span>
            )}

            <span className="product-detail-art-label">
              GLOBAL Kart SUPPLY
            </span>
          </div>

          {/* Product information */}
          <div className="product-detail-copy">
            <div className="product-detail-category">
              <span className="product-detail-category-dot" />
              {product.category}
            </div>

            <span className="product-detail-sku">
              PRODUCT SKU: {product.id}
            </span>

            <h1>{product.name}</h1>

            <p className="product-detail-description">
              {product.description}
            </p>

            <div className="detail-price">
              <span>Indicative wholesale price</span>
              <strong>{money(product.wholesale)}</strong>
              <small>Illustrative price per unit</small>
            </div>

            <div className="detail-info-list">
              <div className="detail-info-row">
                <span>Product SKU</span>
                <strong>{product.id}</strong>
              </div>

              <div className="detail-info-row">
                <span>Minimum order quantity</span>
                <strong>{product.moq} units</strong>
              </div>

              <div className="detail-info-row">
                <span>Suggested retail price</span>
                <strong>{money(product.retail)}</strong>
              </div>
            </div>

            <div className="product-detail-features">
              <div>
                <ShieldCheck size={19} />
                <span>
                  <strong>Supplier verification</strong>
                  <small>Discuss supplier details</small>
                </span>
              </div>

              <div>
                <Truck size={19} />
                <span>
                  <strong>Shipping enquiries</strong>
                  <small>Confirm delivery options</small>
                </span>
              </div>
            </div>

            <p className="detail-disclaimer">
              These values are demonstration data, not a supplier
              quotation. Confirm final prices, stock, shipping, delivery
              and product specifications before ordering.
            </p>

            <Link
              className="product-enquiry-button"
              to="/contact"
              state={{
                product: product.name,
                model: "B2B Wholesale",
              }}
            >
              Enquire about this product
              <ArrowRight size={17} />
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}