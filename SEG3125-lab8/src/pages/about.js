import React from "react";
import { Link } from "gatsby";
import Layout from "../components/layout";
import SEO from "../components/seo";
import { QuestionCircleOutlined, LeftOutlined } from "@ant-design/icons";

const AboutPage = () => (
  <Layout>
    <SEO title="About Kat" />

    <h1>
      <QuestionCircleOutlined />
      About Fungus Finds
    </h1>
    <p>
      My name's Kat- I'm is a third year computer science student studying at
      the University of Ottawa in Ottawa, Ontario, Canada. Im passionate about
      front-end, UX/UI design, and camping. This site is a little display of my
      working knowledge of design principles, stylistic choices, and lorem ipsem
      lorem ipsm,...
    </p>
    <Link style={{ color: "#1d3557" }} to="/">
      <LeftOutlined />
      Back to Search
    </Link>
  </Layout>
);

export default AboutPage;
