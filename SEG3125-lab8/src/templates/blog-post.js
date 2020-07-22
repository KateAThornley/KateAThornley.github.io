import React, { createElement, useState } from "react";
import Link from "gatsby-link";
import {
  Comment,
  Tooltip,
  Avatar,
  Form,
  Button,
  List,
  Input,
  Divider,
} from "antd";
import moment from "moment";
import Layout from "../components/layout";
import {
  DislikeOutlined,
  LikeOutlined,
  DislikeFilled,
  LikeFilled,
  LeftOutlined,
  InfoCircleOutlined,
} from "@ant-design/icons";

const Template = ({ data }) => {
  const state = {
    comments: [],
    submitting: false,
    value: "",
  };

  const { TextArea } = Input;
  const [comments, setComments] = useState([]);
  const { submitting, setSubmitting } = useState(false);
  const [value, setValue] = useState(null);

  const post = data.markdownRemark;
  const [likes, setLikes] = useState(0);
  const [dislikes, setDislikes] = useState(0);
  const [action, setAction] = useState(null);

  const CommentList = ({ comments }) => (
    <List
      dataSource={comments}
      header={`${comments.length} ${comments.length > 1 ? "replies" : "reply"}`}
      itemLayout="horizontal"
      renderItem={(props) => <Comment {...props} />}
    />
  );

  const Editor = ({ onChange, onSubmit, submitting, value }) => (
    <>
      <Form.Item>
        <TextArea rows={4} onChange={onChange} value={value} />
      </Form.Item>
      <Form.Item>
        <Button
          htmlType="submit"
          loading={submitting}
          onClick={onSubmit}
          type="primary"
        >
          Add a comment to this mushroom entry!
        </Button>
      </Form.Item>
    </>
  );

  const like = () => {
    setLikes(1);
    setDislikes(0);
    setAction("liked");
  };

  const dislike = () => {
    setLikes(0);
    setDislikes(1);
    setAction("disliked");
  };

  const actions = [
    <Tooltip key="comment-basic-like" title="Like">
      <span onClick={like}>
        {createElement(action === "liked" ? LikeFilled : LikeOutlined)}
        <span className="comment-action">{likes}</span>
      </span>
    </Tooltip>,
    <Tooltip key="comment-basic-dislike" title="Dislike">
      <span onClick={dislike}>
        {React.createElement(
          action === "disliked" ? DislikeFilled : DislikeOutlined
        )}
        <span className="comment-action">{dislikes}</span>
      </span>
    </Tooltip>,
    <span key="comment-basic-reply-to">Reply to</span>,
  ];

  const handleSubmit = () => {
    if (!this.state.value) {
      return;
    }

    this.setState({
      submitting: true,
    });

    setTimeout(() => {
      this.setState({
        submitting: false,
        value: "",
        comments: [
          {
            author: "Han Solo",
            avatar:
              "https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png",
            content: <p>{this.state.value}</p>,
            datetime: moment().fromNow(),
          },
          ...this.state.comments,
        ],
      });
    }, 1000);
  };

  const handleChange = (e) => {
    var self = this;
    this.setState({ [e.target.name]: e.target.value }, function() {
      console.log(self.state.name);
      self.props.onChange({
        value: self.target.value,
      });
    });
  };

  return (
    <Layout>
      <div>
        <Link to="/blog" style={{ color: "#1d3557" }}>
          <LeftOutlined style={{ paddingLeft: "8px", height: "8px" }} />
          Go Back
        </Link>
        <hr />
        <h1>{post.frontmatter.title}</h1>
        <h4>
          Posted by {post.frontmatter.author} on {post.frontmatter.date}
        </h4>
        <div dangerouslySetInnerHTML={{ __html: post.html }} />
      </div>
      <Divider orientation="left">
        Comments{" "}
        <Tooltip title="The following section allows you to add comments to this mushroom post about where you've spotted it, in what climate, and other relevant information!">
          <InfoCircleOutlined style={{ marginLeft: "8px" }} />
        </Tooltip>
      </Divider>

      <Comment
        actions={actions}
        author={<a>Ally Sim</a>}
        avatar={
          <Avatar
            src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
            alt="Ally Sim"
          />
        }
        content={
          <p>
            Ah cool! I found this guy in my backyard in Ottawa last year around
            late spring!
          </p>
        }
        datetime={
          <Tooltip title={moment().format("YYYY-MM-DD HH:mm:ss")}>
            <span>{moment().fromNow()}</span>
          </Tooltip>
        }
      />
      <>
        {comments.length > 0 && <CommentList comments={comments} />}
        <Comment
          avatar={
            <Avatar
              src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
              alt="Avatar Picture"
            />
          }
          content={
            <Editor
              // onChange={this.handleChange}
              // onSubmit={this.handleSubmit}
              submitting={submitting}
              value={value}
            />
          }
        />
      </>
    </Layout>
  );
};

export default Template;

export const postQuery = graphql`
  query BlogPostByPath($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        path
        title
        author
        date
      }
    }
  }
`;
