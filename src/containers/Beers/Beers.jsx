import React, { useState, useEffect } from "react";
import styles from "./Beers.module.scss";
import CardList from "../../components/CardList";
import Filters from "../../components/Filters";
// import SearchBar from "../../SearchBar";

const Beers = () => {
    const [beers, setBeers] = useState([]);
    const [abv, setAbv] = useState(false);
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

    const getBeers = () => {
        fetch(`https://api.punkapi.com/v2/beers?per_page=80`)
            .then((response) => response.json())
            .then((newBeers) => {
                setBeers(newBeers)
            })
            .catch((err) => {
                console.log(err);
            });
    }

    useEffect(() => {
        getBeers()
    }, []);

    const getSearchedBeers = (searchTerm) => {
        if (searchTerm && searchTerm.match(/^[0-9a-zA-Z]+$/)) {
            searchBeers(searchTerm)
        }
    };



    const searchBeers = (searchTerm) => {
        fetch(`https://api.punkapi.com/v2/beers?beer_name=${searchTerm}`)
            .then((response) => response.json())
            .then((beersSearchRes) => {
                setBeers(beersSearchRes)
            })
            .catch((err) => {
                console.log(err);
            });
    }

    const getHighStrength = (abv_string) => {
            abv_string = "6";
            filterAbv(abv_string);
    }
    const filterAbv = (abv_string) => {
        fetch(`https://api.punkapi.com/v2/beers?abv_gt=${abv_string}`)
            .then((response) => response.json())
            .then((strongBeers) => {
                setBeers(strongBeers)
            })
            .catch((err) => {
                console.log(err);
            });
    }

    const filterClassicRange = () => {
        fetch(`https://api.punkapi.com/v2/beers?brewed_before=11-2008`)
            .then((response) => response.json())
            .then((classicBeers) => {
                setBeers(classicBeers)
            })
            .catch((err) => {
                console.log(err);
            });
    }



    return (
    <div className={styles.beerContainer}>
        <Filters beers={beers} getHighStrength={getHighStrength} filterClassicRange={filterClassicRange} getSearchedBeers={getSearchedBeers}/>
        <CardList beers={beers}/>
    </div>
  );
};

export default Beers;
