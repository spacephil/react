import React from "react";

const Content = props => (
  <section className="content">
    <h4 className="content-title">
      {props.title}
    </h4>
    <p className="content-body">
      {props.message}
    </p>
  </section>
);

export default Content;
