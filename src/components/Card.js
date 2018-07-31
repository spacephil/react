import React from "react";
import Avatar from "./Avatar";
import Cardtitle from "./CardTitle";
import CardImage from "./CardImage";
import Content from "./Content";

const Card = props => (
  <div className="card">
    <section className="main">
      <Cardtitle cardtitle={props.cardtitle} />
      <Avatar avatar={props.avatar} />
      <CardImage
        name={props.name}
        cardimageURL={props.cardimageURL}
      />
    </section>
    <Content
    title={props.headline}
    message={props.message}
    url={props.url}
    urlDisplayName={props.urlDisplayName}
    />
  </div>
);

export default Card;
