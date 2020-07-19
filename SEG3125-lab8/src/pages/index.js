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

const styles = {
  textStyle: {
    fontSize: "20px",
  },
};

function onChange(value) {
  console.log(`selected ${value}`);
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

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Title level={2}>Welcome To Fungus Finds!</Title>
    <Text style={styles.textStyle}>
      Search for a mushroom in our dictionary by selecting its genus in the
      search bar below.
    </Text>
    <Select
      showSearch
      style={{ width: "90%", alignContent: "center", marginTop: "20px" }}
      placeholder="Select a person"
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
    <Button>Search</Button>
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
          }
        }
      }
    }
  }
`;

export default IndexPage;
