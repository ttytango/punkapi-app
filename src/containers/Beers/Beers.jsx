import React, { useState, useEffect } from "react";
import styles from "./Beers.module.scss";
import CardList from "../../components/CardList";

const Beers = () => {
    // const [beers, setBeers] = useState([])
    //
    // const getBeers = () =>
    //     fetch("https://api.punkapi.com/v2/beers")
    //         .then(request => request.json())
    //         .then((request) => {
    //         console.log("REQUEST", request);
    //         const cleanedRequest = request.beers.forEach((beerObj) => beerObj.map(beers));
    //         console.log("ARRAY -->", cleanedRequest);
    //         setBeers(...beers, cleanedRequest);
    //         })
    //         .catch((error) => error);
    //
    // useEffect(() => {
    //     getBeers();
    // },[]);


  return (
    <div className={styles.beerContainer}>
      <p>Beers works</p>
        {/*<CardList beers={beers}/>*/}
    </div>
  );
};

export default Beers;
