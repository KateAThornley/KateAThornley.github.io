import React from "react";
import { Link } from "gatsby";
import { Card, Typography, Select, Row, Col, Button } from "antd";
import { RightOutlined } from "@ant-design/icons";
import Layout from "../components/layout";
import Image from "../components/image";
import SEO from "../components/seo";
import AB from "../images/agaricus-bisporus.jpg";
const { Title, Text } = Typography;
const { Option } = Select;
const { Meta } = Card;

let genus = "";

const styles = {
  textStyle: {
    fontSize: "20px",
  },
};

function onChange(value) {
  console.log(`selected ${value}`);
  genus = value;
}

function onBlur() {
  console.log("blur");
}

function onFocus() {
  console.log("focus");
}

function onSearch(val) {
  console.log("search: " + val);
}

const IndexPage = ({ data }) => (
  <Layout>
    <SEO title="Home" />
    <h1>Welcome To Fungus Finds!</h1>
    <Text style={styles.textStyle}>
      Search for a mushroom in our dictionary by selecting its genus in the
      search bar below.
    </Text>
    <Select
      showSearch
      style={{ width: "90%", alignContent: "center", marginTop: "20px" }}
      placeholder="Select a mushroom genus"
      optionFilterProp="children"
      onChange={onChange}
      onFocus={onFocus}
      onBlur={onBlur}
      onSearch={onSearch}
      filterOption={(input, option) =>
        option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
      }
    >
      <Option value="Agaricus">Agaricus</Option>
      <Option value="Boletus">Boletus</Option>
      <Option value="Cantharellus">Cantharellus</Option>
      <Option value="Chalciporus">Chalciporus</Option>
      <Option value="Hortiboletus">Hortiboletus</Option>
      <Option value="Leccinum">Leccinum</Option>
      <Option value="Macrolepiota">Macrolepiota</Option>
      <Option value="Suillus">Suillus</Option>
      <Option value="Tylopilus">Tylopilus</Option>
    </Select>
    {data.allMarkdownRemark.edges.map((post) => (
      <div key={post.node.id}>
        <Row gutter={16}>
          <Col span={8}>
            <Card cover={<img src={AB} />} style={styles.cardStyle}>
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
    ;
  </Layout>
);

export const pageQuery = graphql`
  query SearchIndexQuery {
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

export default IndexPage;
