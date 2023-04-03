import React from "react";
import { useSelector } from "react-redux";

function Sidebar() {
  const { theme } = useSelector((state) => state.themeReducer);

  return (
    <div className="sidebar">
      <section className="content form">
        <h4 className="form-title">OUR NEWSLETTER</h4>
        <p>Get awesome content delivered straight to your inbox.</p>
        <div>
          <form>
            <input
              type="text"
              placeholder="Enter your email address "
              className="emailAddress"
            />
            <button type="submit">GET APDATES</button>
          </form>
        </div>
      </section>
      <section
        className={`${
          theme == "light"
            ? "content post-title"
            : "content post-title darkPost"
        }`}
      >
        <div className="title-post">
          <h4 className="header-title">THE BEST OF WPKUBE</h4>
          <p className="personal-title">
            Some of the best content we have published so far.
          </p>
          <h4 className="text-title">BEGINNER GUIDES & REVIEWS</h4>
        </div>
        <div className="menu-post">
          <p>
            <a>
              <span className="item-count">1</span>8 Best Cheap WordPress
              Hosting Providers in 2023 (From $1.99)
            </a>
          </p>
          <hr />
          <p>
            <a>
              <span className="item-count">2</span>10 Best WordPress Hosting
              Options for 2023 (Pros & Cons)
            </a>
          </p>
          <hr />
          <p>
            <a>
              <span className="item-count">3</span>8 Best Managed WordPress
              Hosting Providers for 2023 Compared
            </a>
          </p>
          <hr />
          <p>
            <a>
              <span className="item-count">4</span>5 Best WooCommerce Hosting
              Providers Compared in 2023 (All Budgets)
            </a>
          </p>
          <hr />
          <p>
            <a>
              <span className="item-count">5</span>Top 9 Landing Page Plugins
              for WordPress (2023)
            </a>
          </p>
        </div>
      </section>
    </div>
  );
}

export default Sidebar;
