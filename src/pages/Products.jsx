
import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight, Package, Search } from "lucide-react";
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

const money = (value) =>
  new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(value);

export default function Products() {
  const [category, setCategory] = useState("All products");
  const [query, setQuery] = useState("");
  const [sort, setSort] = useState("featured");

  const filtered = useMemo(() => {
    let list = products.filter((product) => {
      const matchesCategory =
        category === "All products" || product.category === category;

      const text =
        `${product.name} ${product.category} ${product.id}`.toLowerCase();

      return matchesCategory && text.includes(query.trim().toLowerCase());
    });

    if (sort === "low") {
      list = [...list].sort((a, b) => a.wholesale - b.wholesale);
    } else if (sort === "high") {
      list = [...list].sort((a, b) => b.wholesale - a.wholesale);
    } else if (sort === "name") {
      list = [...list].sort((a, b) => a.name.localeCompare(b.name));
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
      {/* Full-width page hero */}
      <section className="products-hero">
        <div className="products-hero-inner">
          <div className="eyebrow">PRODUCT CATALOGUE</div>

          <h1>
            Discover products.
            <br />
            <span>Explore possibilities.</span>
          </h1>

          <p>
            Search the catalogue, compare illustrative wholesale prices
            and review sample minimum order quantities.
          </p>

          <div className="products-hero-stats">
            <div>
              <strong>{products.length.toString().padStart(2, "0")}</strong>
              <span>Sample products</span>
            </div>

            <div className="products-stat-divider" />

            <div>
              <strong>{Math.max(categories.length - 1, 0)
                .toString()
                .padStart(2, "0")}</strong>
              <span>Categories</span>
            </div>

            <div className="products-stat-divider" />

            <div>
              <strong>Global</strong>
              <span>Sourcing focus</span>
            </div>
          </div>
        </div>
      </section>

      {/* Full-width catalogue section */}
      <section className="product-section">
        <div className="products-container">
          {/* Section heading */}
          <div className="catalog-heading">
            <div>
              <span className="catalog-kicker">EXPLORE OUR RANGE</span>
              <h2>
                Find your next <span>product.</span>
              </h2>
              <p>
                Browse the catalogue and explore products for your business
                or personal requirements.
              </p>
            </div>

            <div className="catalog-result-count">
              <strong>{filtered.length}</strong>
              <span>
                {filtered.length === 1 ? "product found" : "products found"}
              </span>
            </div>
          </div>

          {/* Search and sort */}
          <div className="catalog-toolbar">
            <label className="search-field">
              <Search size={18} aria-hidden="true" />

              <input
                type="search"
                value={query}
                onChange={(event) => setQuery(event.target.value)}
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
                onChange={(event) => setSort(event.target.value)}
                aria-label="Sort products"
              >
                <option value="featured">Featured</option>
                <option value="low">Price: low to high</option>
                <option value="high">Price: high to low</option>
                <option value="name">Name</option>
              </select>
            </label>
          </div>

          {/* Category filters */}
          <div className="category-filter-section">
            <span className="filter-label">CATEGORIES</span>

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

          {/* Product grid */}
          {filtered.length > 0 ? (
            <div className="product-grid">
              {filtered.map((product) => (
                <article className="product-card" key={product.id}>
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
                      <Package size={58} strokeWidth={1.15} />

                      {product.badge && (
                        <span className="product-badge">
                          {product.badge}
                        </span>
                      )}

                      <span className="product-art-sku">{product.id}</span>
                    </div>
                  </Link>

                  <div className="product-info">
                    <div className="product-meta">
                      <span className="product-category-label">
                        {product.category}
                      </span>
                      <span className="product-sku">{product.id}</span>
                    </div>

                    <h3>
                      <Link to={`/products/${product.id}`}>
                        {product.name}
                      </Link>
                    </h3>

                    <p className="product-description">
                      {product.description}
                    </p>

                    <div className="product-price-row">
                      <div className="product-price">
                        <small>Sample wholesale price</small>
                        <strong>{money(product.wholesale)}</strong>
                      </div>

                      <div className="product-moq">
                        <small>Minimum order</small>
                        <strong>{product.moq} units</strong>
                      </div>
                    </div>

                    <Link
                      className="button button-card"
                      to={`/products/${product.id}`}
                    >
                      View product
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
                Try another keyword or select a different category.
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

          {/* Catalogue disclaimer */}
          <div className="catalog-note">
            <Package size={18} />

            <p>
              <strong>Catalogue information:</strong> This is a sample
              catalogue. Confirm supplier availability, prices, shipping
              costs and minimum order quantities before purchasing.
            </p>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="products-cta">
        <div className="products-cta-inner">
          <div>
            <span className="catalog-kicker">NEED SOMETHING SPECIFIC?</span>
            <h2>
              Let's find the right <span>products.</span>
            </h2>
            <p>
              Share your product requirements and discuss sourcing options
              with Global Kart Supply.
            </p>
          </div>

          <Link className="products-cta-button" to="/contact">
            Discuss your requirements
            <ArrowUpRight size={17} />
          </Link>
        </div>
      </section>
    </main>
  );
}
