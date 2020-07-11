import React from "react";
import { Link } from "gatsby";
import { Button, Typography, Select } from "antd";

import Layout from "../components/layout";
import Image from "../components/image";
import SEO from "../components/seo";

const { Title, Text } = Typography;
const { Option } = Select;

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
  console.log("search:", val);
}

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Title level={2}>Welcome To Fungus Finds!</Title>
    <Text style={styles.textStyle}>
      Search for a mushroom in our dictionary by its genus/species in the search
      bar below.
    </Text>
    <Select
      showSearch
      style={{ width: "90%" }}
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
      <Option value="jack">Jack</Option>
      <Option value="lucy">Lucy</Option>
      <Option value="tom">Tom</Option>
    </Select>
  </Layout>
);

export default IndexPage;
