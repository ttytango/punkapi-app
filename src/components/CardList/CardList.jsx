import React from "react";
import styles from "./CardList.module.scss";
import Card from "../Card";


const CardList = ({beers}) => {

// const {
//     id,
//     name,
//     image_url,
//     description
// } = beers;

    const getBeersJsx = (beers) => {
        return (
            <div className={styles.beerContent} >
                <Card key={beers.id} beers={beers.beers}/>
            </div>
        )
    };

  return (
<>
        <div className={styles.cardList}>{beers.map(getBeersJsx)}</div>
</>
  );
};

export default CardList;
