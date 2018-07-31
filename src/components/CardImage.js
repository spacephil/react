import React from "react";

const CardImage = props => (
     <div className="cardimage">
      <p className="cardimage-name">{props.name}</p>
      <img src={props.cardimageURL} alt="person" className="cardimage-big" />
    </div>
);

export default CardImage;
