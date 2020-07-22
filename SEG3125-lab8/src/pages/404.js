import React from "react";
import { Result, Button } from "antd";
import { Link } from "gatsby";
import Layout from "../components/layout";
import SEO from "../components/seo";

const NotFoundPage = () => (
  <Layout>
    <Result
      status="404"
      title="404"
      subTitle="Whoops! Look's like you're not supposed to be here! Try going back to the search page!"
      extra={
        <Link to={"/"} style={{ color: "#1d3557" }}>
          <Button type="primary">Back to Search</Button>
        </Link>
      }
    />
    ,
  </Layout>
);

export default NotFoundPage;
