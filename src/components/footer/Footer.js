import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <div className="main-footer">
      <div className="container">
        <div className="row">
          <div className="col">
            <h4>ABOUT WPKUBE</h4>
            <p className="content">
              WPKube is an online WordPress resource which focuses on WordPress
              tutorials, How-to’s, guides, plugins, news, and more. We aim to
              provide the most comprehensive beginner’s guides to anything about
              WordPress — from installing plugins, themes
              <br />
              <br />, automated installs and setups, to creating and setting up
              pages for your website. We have over 500+ tutorials, guides,
              product reviews, tips, and tricks about WordPress. Founded by
              Devesh Sharma, the main goal of this site is to provide useful
              information on anything and everything WordPress.
            </p>
            <button className="twitter">
              <i className="fa-brands fa-twitter "></i>
              Twitter
            </button>
            <button className="facebook">
              <i className="fa-brands fa-facebook-f "></i>
              Facebook
            </button>
          </div>
          <div className="col">
            <h4>USEFUL LINKS</h4>
            <ul>
              <li>Behind the Scenes</li>
              <li>Beginner Guides</li>
              <li>WordPress Hosting</li>
              <li>WooCommerce Themes</li>
              <li>MeridianThemes</li>
              <li>Exclusive WordPress Deals</li>
            </ul>
            <a href="#">View All Guides »</a>
          </div>
          <div className="col">
            <h4>REVIEWS</h4>
            <ul>
              <li>WPEngine </li>
              <li>Thrive Leads</li>
              <li>Flywheel </li>
              <li>Divi Theme</li>
              <li>Thrive Architect</li>
              <li>Elegant Themes</li>
            </ul>
            <a href="#">Reviews »</a>
          </div>
          <div className="col">
            <h4>DEALS</h4>
            <ul>
              <li>InMotion Hosting</li>
              <li>LifterLMS Coupon</li>
              <li>LiquidWeb Coupon</li>
              <li>WPEngine Coupon</li>
              <li>A2 Hosting</li>
              <li>FloThemes</li>
            </ul>
            <a href="#">More Deals »</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
