import React from "react";
import styles from "./Card.module.scss";

const Card = (props) => {
    const { beer } = props;

    const {
        id,
        image_url,
        name,
        description,
        abv
    } = beer;

    const shortenDescription = description =>
        description.length < 160
            ? description :
            description.substring(0,140) + "...";


  return (
    <>
      <div key={id} className={styles.card}>
        <img src={image_url} alt={name} />
        <h3>{name}</h3>
        <p>{shortenDescription(description)}</p>
          <p>ABV: {abv}%</p>
      </div>
    </>
  );
};

export default Card;
