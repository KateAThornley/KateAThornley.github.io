import React from "react";
import { Link } from "gatsby";

import {
  QuestionCircleOutlined,
  SearchOutlined,
  ReadOutlined,
} from "@ant-design/icons";

const styles = {
  ulStyle: {
    color: "#fff",
    listStyle: "none",
    display: "flex",
    justifyContent: "space-evenly",
  },
  iconStyle: {
    padding: "5px",
  },
};

const Menu = () => (
  <div style={{ background: "#1d3557", paddingTop: "10px", color: "#fff" }}>
    <ul style={styles.ulStyle}>
      <li>
        <SearchOutlined style={styles.iconStyle} />
        <Link to="/">Search</Link>
      </li>

      <li>
        <ReadOutlined style={styles.iconStyle} />
        <Link to="/blog">ID Dictionary</Link>
      </li>
      <li>
        <QuestionCircleOutlined style={styles.iconStyle} />
        <Link to="/about">About</Link>
      </li>
    </ul>
  </div>
);

export default Menu;
