import React from "react";
import Link from "gatsby-link";

const Footer = () => (
  <div
    style={{
      background: "#78fecf",
      paddingBottom: "1.45rem"
    }}
  >
    <div
      style={{
        margin: "0 auto",
        maxWidth: 960,
        padding: "1.45rem 1.0875rem"
      }}
    >
      <h4 style={{ margin: 0, float: "left" }}>
        <a
          href="https://conradj.co.uk"
          style={{
            color: "#3c3a40",
            textDecoration: "none"
          }}
        >
          Site by conradj.co.uk
        </a>
      </h4>
    </div>
  </div>
);

export default Footer;
