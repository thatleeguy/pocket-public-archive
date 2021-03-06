import React from "react";
import Link from "gatsby-link";
import FontAwesomeIcon from "@fortawesome/react-fontawesome";
import faTwitter from "@fortawesome/fontawesome-free-brands/faTwitter";
import faGithub from "@fortawesome/fontawesome-free-brands/faGithub";
import faExternalLink from "@fortawesome/fontawesome-free-solid/faExternalLinkSquareAlt";

const Footer = () => (
  <nav
    style={{
      borderTop: "solid 1rem #78fecf",
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
        Site by{" "}
        <a
          href="https://conradj.co.uk/#contact"
          target="_blank"
          className="link-effect"
        >
          <span>Conrad Jackson</span>
          &nbsp;<FontAwesomeIcon icon={faExternalLink} />
        </a>
      </h4>
      <span style={{ float: "right" }}>
        <a
          href="https://twitter.com/conradj"
          target="_blank"
          className="link-effect"
        >
          <span>
            <FontAwesomeIcon icon={faTwitter} />
          </span>
        </a>{" "}
        |{" "}
        <a
          href="https://github.com/conradj"
          target="_blank"
          className="link-effect"
        >
          <span>
            <FontAwesomeIcon icon={faGithub} />
          </span>
        </a>
      </span>
    </div>
  </nav>
);

export default Footer;
