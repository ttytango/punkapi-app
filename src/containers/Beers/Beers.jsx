import React, { useState, useEffect } from "react";
import styles from "./Beers.module.scss";
import CardList from "../../components/CardList";
import Filters from "../../components/Filters";
// import SearchBar from "../../SearchBar";

const Beers = () => {
    const [beers, setBeers] = useState([]);
    const [searchTerm, setSearchTerm] = useState();
    const [abv, setAbv] = useState(false);
    const [classic, setClassic] = useState(false);


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
            setSearchTerm(searchTerm);
        }
    };
    const filterBeerList = () => {
        getSearchedBeers();
        const searchedStr = searchTerm ? `&beer_name=${searchTerm}` : "";
        const abvStr = abv ? "&abv_gt=6" : "";
        const classicStr = classic ? "&brewed_before=11-2008" : "";
        fetch(`https://api.punkapi.com/v2/beers?per_page=80${searchedStr}${abvStr}${classicStr}`)
            .then((response) => response.json())
            .then((beersFiltRes) => {
                setBeers(beersFiltRes)
            })
            .catch((err) => {
                console.log(err);
            });
    }

    useEffect(() => {
        filterBeerList();
    }, [searchTerm, abv, classic]);

    return (
        <div className={styles.beerContainer}>
            <Filters beers={beers}
                     getSearchedBeers={getSearchedBeers}
                     abv={abv} setAbv={setAbv}
                     classic={classic} setClassic={setClassic}
                     filterBeerList={filterBeerList} />
            <CardList beers={beers} />
        </div>
    );
}

export default Beers;
