import React from "react";
import { Card, Col, Row } from "antd";
import { LeftOutlined } from "@ant-design/icons";
import { Link } from "gatsby";
import Layout from "../components/layout";
import SEO from "../components/seo";

import AB from "../images/agaricus-bisporus.jpg";
import AC from "../images/agaricus-campestris.jpg";
import BC from "../images/boletus-campestris.jpg";

const { Meta } = Card;

const styles = {
  cardStyle: {
    marginTop: "20px",
    marginBottom: "20px",
    width: "300px",
  },
};

const ExperiencePage = () => (
  <Layout>
    <SEO title="Dictionary" />
    <h1>Mushroom Identification Dictionary</h1>
    <p>
      Scroll below to browse our dictionary of funguses organized by genus, or
      go{" "}
      <Link style={{ color: "#1d3557" }} to="/">
        back to the search page
      </Link>{" "}
      to search by genus directly
    </p>
    <Row gutter={16}>
      <Col span={8}>
        <Card
          hoverable
          style={styles.cardStyle}
          cover={<img alt="example" src={AB} />}
        >
          <Meta title="Agaricus Bisporus" description="Native to" />
        </Card>
      </Col>
      <Col span={8}>
        <Card
          hoverable
          style={styles.cardStyle}
          cover={<img alt="example" src={AC} />}
        >
          <Meta title="Europe Street beat" description="www.instagram.com" />
        </Card>
        <Card hoverable style={styles.cardStyle} cover={<img alt="example" />}>
          <Meta title="Europe Street beat" description="www.instagram.com" />
        </Card>
      </Col>
      <Col span={8}>
        <Card
          hoverable
          style={styles.cardStyle}
          cover={<img alt="example" src={BC} />}
        >
          <Meta title="Europe Street beat" description="www.instagram.com" />
        </Card>
      </Col>
    </Row>
    <Link style={{ color: "#1d3557" }} to="/">
      <LeftOutlined />
      Back to Search
    </Link>
  </Layout>
);

export default ExperiencePage;
