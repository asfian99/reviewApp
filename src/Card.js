import React from "react";
import { profiles } from "./profiles";

const Card = () => {
  const [index, setIndex] = React.useState(0);
  const { img, name, role, article } = profiles[index];

  const checkNumber = (number) => {
    if (number < 0) {
      number = profiles.length - 1;
    }
    if (number === profiles.length) {
      number = 0;
    }
    return number;
  };

  const previous = () => {
    return setIndex(checkNumber(index - 1));
  };
  const next = () => {
    return setIndex(checkNumber(index + 1));
  };
  const random = () => {
    let randomNum = Math.floor(Math.random() * profiles.length);
    if (randomNum === index) {
      randomNum = index + 1;
    }
    return setIndex(checkNumber(randomNum));
  };

  console.log(index);
  return (
    <div className="card">
      <img src={img} alt={name} className="pic" />
      <h2 className="name">{name}</h2>
      <h2 className="role">{role}</h2>
      <p className="article">{article}</p>
      <div className="nav">
        <button className="btn" onClick={previous}>
          &lt;
        </button>
        <button className="btn" onClick={next}>
          &gt;
        </button>
      </div>
      <button className="surprise-btn" onClick={random}>
        Surprise Me
      </button>
    </div>
  );
};

export default Card;
