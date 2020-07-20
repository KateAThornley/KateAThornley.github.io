import React from "react";
import { Link } from "gatsby";
import { Card, Row, Col } from "antd";
import { RightOutlined } from "@ant-design/icons";
import Layout from "../components/layout";
import { graphql } from "gatsby";
import AB from "../images/agaricus-bisporus.jpg";
import AC from "../images/agaricus-campestris.jpg";
import BC from "../images/boletus-campestris.jpg";
import CC from "../images/cantharellus-cibarius.jpg";
import CA from "../images/chalciporus-amarellus.jpg";
import CP from "../images/chalciporus-piperatoides.jpg";
import CPS from "../images/chalciporus-pseudorubinellus.jpg";
import HB from "../images/hortiboletus-bubalinus.jpeg";
import HE from "../images/hortiboletus-engelii.jpg";

const { Meta } = Card;

const styles = {
  cardStyle: {
    marginTop: "20px",
    marginBottom: "20px",
    width: "300px",
  },
};

let imageArray = [AB, AC, BC, CC, CA, CP, CPS, HB, HE];

const BlogPage = ({ data }) => (
  <Layout>
    <h1>Mushroom Identification Dictionary</h1>
    <p>
      Scroll below to browse our dictionary of funguses organized by genus, or
      go{" "}
      <Link style={{ color: "#1d3557" }} to="/">
        back to the search page
      </Link>{" "}
      to search by genus directly
    </p>

    {data.allMarkdownRemark.edges.map((post) => (
      <div key={post.node.id}>
        <Row gutter={16}>
          <Col span={8}>
            <Card cover={<img src={imageArray[0]} />} style={styles.cardStyle}>
              <Meta
                title={post.node.frontmatter.title}
                description={
                  "Mushroom post author: " + post.node.frontmatter.author
                }
              />
              <div style={{ paddingTop: "20px" }}>
                <Link
                  to={post.node.frontmatter.path}
                  style={{ color: "#1d3557" }}
                >
                  Read More
                  <RightOutlined
                    style={{ paddingLeft: "8px", height: "8px" }}
                  />
                </Link>
              </div>
            </Card>
          </Col>
        </Row>
      </div>
    ))}
  </Layout>
);

export const pageQuery = graphql`
  query BlogIndexQuery {
    allMarkdownRemark {
      edges {
        node {
          id
          frontmatter {
            path
            title
            date
            author
            genus
          }
        }
      }
    }
  }
`;

export default BlogPage;
