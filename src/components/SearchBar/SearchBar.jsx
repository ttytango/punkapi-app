import React from "react";
import styles from "./SearchBar.module.scss";


const SearchBar = (props) => {
    const { placeholder, getSearchedBeers } = props;

    const input =  <input type="text" placeholder={placeholder} onChange={event => getSearchedBeers(event.target.value)} /> ;

  return (
    <>
        <div className={styles.searchBar}>
            <label>Search Beers:    </label>{input}
        </div>
    </>
  );
};

export default SearchBar;
