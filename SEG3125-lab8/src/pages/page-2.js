import React from "react";
import { Link } from "gatsby";
import { LeftOutlined } from "@ant-design/icons";

import Layout from "../components/layout";
import SEO from "../components/seo";

const SecondPage = () => (
  <Layout>
    <SEO title="Page two" />
    <h1>Hi from the second page</h1>
    <p>Welcome to page 2</p>
    <Link style={{ color: "#1d3557" }} to="/">
      <LeftOutlined />
      Back to Search
    </Link>
  </Layout>
);

export default SecondPage;
