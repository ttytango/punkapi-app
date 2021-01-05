import React from "react";
import styles from "./CardList.module.scss";
import Card from "../Card";


const CardList = ({beers}) => {
//
// const {
//     id,
//     name,
//     image_url,
//     description
// } = beers;

    const getBeersJsx = (beer) => (
            <div className={styles.beerContent} >
                <Card beer={beer}/>
            </div>
        );


  return (
<>
        <div className={styles.cardList}>
            {beers.map(getBeersJsx)}
        </div>
</>
  );
};

export default CardList;
