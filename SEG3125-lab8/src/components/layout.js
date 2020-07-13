/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react";
import PropTypes from "prop-types";
import { useStaticQuery, graphql } from "gatsby";
import { Typography } from "antd";
import Header from "./header";
import Menu from "./menu";
import "./layout.css";

const { Text } = Typography;

const styles = {
  bodyStyle: {
    backgroundColor: "#F0F2F5",
    borderRadius: "10px",
    margin: `0 auto`,
    maxWidth: "80%",
    paddingTop: "20px",
    paddingBottom: "20px",
    paddingRight: "40px",
    paddingLeft: "40px",
  },
  footerStyle: {
    textAlign: "center",
    bottom: "0",
    width: "100%",
    paddingBottom: "20px",
    paddingTop: "20px",
  },
};

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  return (
    <>
      <Header
        style={styles.headerStyle}
        siteTitle={data.site.siteMetadata.title}
      />
      <Menu style={styles.headerStyle} />
      <div style={styles.bodyStyle}>
        <main>{children}</main>
      </div>
      <footer style={styles.footerStyle}>
        <Text>Website designed by Kate Thornley for the class SEG3125</Text>
      </footer>
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
