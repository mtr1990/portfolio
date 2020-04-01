import React from "react";
import { motion } from "framer-motion";
import axios from "axios";

export default class TestPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      postlist: [],
      isDone: undefined
    };
  }

  // Get Project
  async getProject() {
    await axios
      .get("https://mtr-backend.herokuapp.com/api")
      .then(res => {
        const postlist = res.data;
        this.setState({
          postlist,
          isDone: true
        });
      })
      .catch(err => {
        console.log(err);
      });
  }

  componentDidMount() {
    setTimeout(() => {
      this.getProject();
    }, 800);
  }

  render() {
    let { postlist } = this.state;
    const ProjectItemList = postlist.map((item, index) => (
      <div
        key={index}
        style={{
          backgroundColor: "red",
          marginBottom: "12px"
        }}
      >
        <div>
          <strong>ID:</strong> {item._id}
        </div>
        <div>
          <strong>Date:</strong> {item.date}
        </div>
        <div>
          <strong>Title:</strong> {item.title}
        </div>
        <div>
          <strong>Body:</strong> {item.body}
        </div>
      </div>
    ));

    return (
      <>
        <motion.div initial="initial" animate="enter" exit="exit">
          <h1>Test Page</h1>
          {ProjectItemList}
        </motion.div>
      </>
    );
  }
}
