
import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import {
  ArrowUpRight,
  Package,
  Search,
  ArrowRight,
} from "lucide-react";
import { categories, products } from "../data/products";
import "../CSS/Products.css";

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

export default function Products() {
  const [category, setCategory] = useState("All products");
  const [query, setQuery] = useState("");
  const [sort, setSort] = useState("featured");

  const filtered = useMemo(() => {
    let list = products.filter((product) => {
      const matchesCategory =
        category === "All products" ||
        product.category === category;

      const text =
        `${product.name} ${product.category} ${product.id}`.toLowerCase();

      return (
        matchesCategory &&
        text.includes(query.trim().toLowerCase())
      );
    });

    if (sort === "name") {
      list = [...list].sort((a, b) =>
        a.name.localeCompare(b.name)
      );
    }

    return list;
  }, [category, query, sort]);

  const clearFilters = () => {
    setQuery("");
    setCategory("All products");
    setSort("featured");
  };

  return (
    <main className="products-page">
      {/* Catalogue hero */}
      <section className="products-hero">
        <div className="products-hero-inner">
          <div className="eyebrow">
            DISCOVER GLOBAL KART SUPPLY
          </div>

          <h1>
            Discover products.
            <br />
            <span>Explore possibilities.</span>
          </h1>

          <p>
            Explore a diverse product range for businesses
            and individuals. Discover new possibilities
            through global sourcing.
          </p>

          <div className="products-hero-stats">
            <div>
              <strong>
                {products.length.toString().padStart(2, "0")}
              </strong>
              <span>Products</span>
            </div>

            <div className="products-stat-divider" />

            <div>
              <strong>
                {Math.max(categories.length - 1, 0)
                  .toString()
                  .padStart(2, "0")}
              </strong>
              <span>Categories</span>
            </div>

            <div className="products-stat-divider" />

            <div>
              <strong>Global</strong>
              <span>Sourcing network</span>
            </div>
          </div>
        </div>
      </section>

      {/* Product catalogue */}
      <section className="product-section">
        <div className="products-container">
          {/* Catalogue heading */}
          <div className="catalog-heading">
            <div>
              <span className="catalog-kicker">
                OUR PRODUCT COLLECTION
              </span>

              <h2>
                Find what you <span>need.</span>
              </h2>

              <p>
                Browse our collection and discover products
                suited to your business or everyday needs.
              </p>
            </div>

            <div className="catalog-result-count">
              <strong>{filtered.length}</strong>
              <span>
                {filtered.length === 1
                  ? "product available"
                  : "products available"}
              </span>
            </div>
          </div>

          {/* Search and sorting */}
          <div className="catalog-toolbar">
            <label className="search-field">
              <Search size={18} aria-hidden="true" />

              <input
                type="search"
                value={query}
                onChange={(event) =>
                  setQuery(event.target.value)
                }
                placeholder="Search products or SKU..."
                aria-label="Search products or SKU"
              />

              {query && (
                <button
                  type="button"
                  className="clear-search"
                  onClick={() => setQuery("")}
                  aria-label="Clear search"
                >
                  ×
                </button>
              )}
            </label>

            <label className="sort-control">
              <span>Sort by</span>

              <select
                value={sort}
                onChange={(event) =>
                  setSort(event.target.value)
                }
                aria-label="Sort products"
              >
                <option value="featured">Featured</option>
                <option value="name">Name</option>
              </select>
            </label>
          </div>

          {/* Category filters */}
          <div className="category-filter-section">
            <span className="filter-label">
              EXPLORE CATEGORIES
            </span>

            <div className="category-row">
              {categories.map((item) => (
                <button
                  type="button"
                  key={item}
                  className={`category-chip ${
                    category === item ? "active" : ""
                  }`}
                  onClick={() => setCategory(item)}
                  aria-pressed={category === item}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>

          {/* Products */}
          {filtered.length > 0 ? (
            <div className="product-grid">
              {filtered.map((product) => (
                <article
                  className="product-card"
                  key={product.id}
                >
                  <Link
                    className="product-art-link"
                    to={`/products/${product.id}`}
                    aria-label={`View ${product.name}`}
                  >
                    <div
                      className={`product-art ${
                        tones[product.icon] || "sage"
                      }`}
                    >
                      <div className="product-art-orbit" />

                      <Package
                        size={58}
                        strokeWidth={1.15}
                      />

                      {product.badge && (
                        <span className="product-badge">
                          {product.badge}
                        </span>
                      )}

                      <span className="product-art-sku">
                        {product.id}
                      </span>
                    </div>
                  </Link>

                  <div className="product-info">
                    <div className="product-meta">
                      <span className="product-category-label">
                        {product.category}
                      </span>

                      <span className="product-sku">
                        {product.id}
                      </span>
                    </div>

                    <h3>
                      <Link to={`/products/${product.id}`}>
                        {product.name}
                      </Link>
                    </h3>

                    <p className="product-description">
                      {product.description}
                    </p>

                    <Link
                      className="button button-card"
                      to={`/products/${product.id}`}
                    >
                      Explore product
                      <ArrowUpRight size={16} />
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          ) : (
            <div className="empty-results">
              <div className="empty-results-icon">
                <Search size={28} />
              </div>

              <h3>No matching products</h3>

              <p>
                We couldn't find a product matching your search.
                Try another keyword or explore a different category.
              </p>

              <button
                type="button"
                className="button button-primary"
                onClick={clearFilters}
              >
                Clear all filters
              </button>
            </div>
          )}

          {/* Catalogue note */}
          <div className="catalog-note">
            <Package size={18} />

            <p>
              <strong>Explore with confidence:</strong> Contact
              our team to learn more about product availability,
              specifications, supplier details, and shipping
              options.
            </p>
          </div>
        </div>
      </section>

      {/* Enquiry call to action */}
      <section className="products-cta">
        <div className="products-cta-inner">
          <div>
            <span className="catalog-kicker">
              LET'S WORK TOGETHER
            </span>

            <h2>
              Looking for something <span>specific?</span>
            </h2>

            <p>
              Tell us what you need. Our team can help you
              explore products and global sourcing opportunities.
            </p>
          </div>

          <Link
            className="products-cta-button"
            to="/contact"
          >
            Discuss your requirements
            <ArrowRight size={17} />
          </Link>
        </div>
      </section>
    </main>
  );
}