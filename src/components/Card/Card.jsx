import React from "react";
import styles from "./Card.module.scss";

const Card = ({beers}) => {

  const [
      id,
    image_url,
    name,
    description
  ] = beers;



  return (
    <>
      <div key={id} className={styles.card}>
        <img src={image_url} alt="Someting" />
        <p>{name}</p>
        <p>{description}</p>
      </div>
    </>
  );
};

export default Card;
