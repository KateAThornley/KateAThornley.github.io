import React from "react";
import { Link } from "gatsby";
import Layout from "../components/layout";
import SEO from "../components/seo";
import { QuestionCircleOutlined, LeftOutlined } from "@ant-design/icons";

const styles = {
  headerIcon: {
    paddingRight: "20px",
  },
};

const AboutPage = () => (
  <Layout>
    <SEO title="About Kat" />

    <h1>
      <QuestionCircleOutlined style={styles.headerIcon} />
      About Fungus Finds
    </h1>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris pharetra
      tortor sit amet orci tempus imperdiet. Nunc fermentum tellus in commodo
      vehicula. Donec vel erat non tortor ultrices molestie. Phasellus in
      bibendum est, ut auctor sapien. Suspendisse sodales pellentesque lectus,
      quis finibus urna cursus vitae. Etiam sit amet ex quis sapien eleifend
      convallis eget et diam. Curab
    </p>
    <p>
      Quisque metus turpis, hendrerit in aliquam nec, mollis at dui. Quisque vel
      tortor nisl. Nam varius id libero ut luctus. Sed facilisis hendrerit
      aliquam. Integer a laoreet neque. Proin quis risus nec arcu fringilla
      venenatis id ac dolor. Proin condimentum nec nisl sit amet posuere.
    </p>
    <p>
      Suspendisse et mollis ex, molestie congue dui. Integer sit amet arcu sed
      ex viverra tincidunt non vel enim. In et posuere massa. Integer bibendum
      ipsum ac tortor posuere condimentum. Aliquam eu tempus justo. Vestibulum
      scelerisque blandit velit, at viverra justo ultricies vel. Morbi sit amet
      euismod augue. In quis facilisis nisi. In a nunc in lorem facilisis
      bibendum sed at neque. Sed euismod tortor elit, non scelerisque neque
      consectetur et. Suspendisse vel tellus sit amet ante suscipit lobortis.
      Etiam id lacus vitae arcu viverra ultrices porta et magna. Aliquam maximus
      dui quis consequat hendrerit. Nam commodo enim eget erat finibus sodales.
      Sed sed congue metus, a elementum augue.
    </p>
    <Link style={{ color: "#1d3557" }} to="/">
      <LeftOutlined />
      Back to Search
    </Link>
  </Layout>
);

export default AboutPage;
