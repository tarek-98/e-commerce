import React from "react";
import ReactCardSlider from "react-card-slider-component";
import item1 from "../images/camera.jpg";
import item2 from "../images/acc.jpg";
import item3 from "../images/laptop.jpg";
import item4 from "../images/tv.jpg";
import item5 from "../images/headphone.jpg";
import item6 from "../images/homeapp.jpg";
import item7 from "../images/speaker.jpg";

function CollectionCard() {
  const slides = [
    {
      image: item1,
      title: "This is a Product",
      description: "This is a description",
    },
    {
      image: item2,
      title: "This is a second Product",
      description: "This is a second description",
    },
    {
      image: item3,
      title: "This is a third Product",
      description: "This is a third description",
    },
    {
      image: item4,
      title: "This is a fourth Product",
      description: "This is a fourth description",
    },
    {
      image: item5,
      title: "This is a fifth product",
      description: "This is a fifth description",
    },
    {
      image: item6,
      title: "This is a sixth product",
      description: "This is a sixth description",
    },
    {
      image: item7,
      title: "This is a seventh product",
      description: "This is a seventh description",
    },
  ];
  return (
    <div>
      <ReactCardSlider slides={slides} />
    </div>
  );
}

export default CollectionCard;
