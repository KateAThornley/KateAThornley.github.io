import React from "react";
import { Link } from "gatsby";
import { Card, Row, Col } from "antd";
import Layout from "../components/layout";
import SEO from "../components/seo";

const { Meta } = Card;

const styles = {
  cardStyle: {
    marginTop: "20px",
    marginBottom: "20px",
    width: "300px",
  },
};

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
            <Card
              hoverable
              style={styles.cardStyle}
              cover={<img alt="example" src={""} />}
            >
              <Meta
                title={post.node.frontmatter.title}
                description="Description:"
              />
            </Card>
          </Col>
        </Row>
        {/* <h3>{post.node.frontmatter.title}</h3>
        <small>
          Posted by {post.node.frontmatter.author} on{" "}
          {post.node.frontmatter.date}
        </small>
        <br />
        <br />
        <Link to={post.node.frontmatter.path}>Read More</Link>
        <br />
        <br />
        <hr /> */}
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
          }
        }
      }
    }
  }
`;

export default BlogPage;
