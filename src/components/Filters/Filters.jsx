import React, {useState} from "react";
import styles from "./Filters.module.scss";
import SearchBar from "../SearchBar";

const Filters = (props) => {
    const { getSearchedBeers, getHighStrength, filterClassicRange } = props;



  return (
    <div className={styles.filters}>
        <SearchBar placeholder="Enter search term here..." getSearchedBeers={getSearchedBeers}/>
      <ul className={styles.filtersList}>
          <li>
              <label htmlFor="over6" >AbV > 6: </label><input type="checkbox" id="over6" value="high" onInput={getHighStrength} />
          </li>
          <li>
              <label htmlFor="classicbeers" >Classic Beers: </label><input type="checkbox" id="classicbeers" value="medium" onInput={filterClassicRange} />
          </li>
          {/*<li>*/}
          {/*    <label htmlFor="lowabv" >AbV under 3.5%: </label><input type="checkbox" id="lowabv" value="low" onInput={handleChange} />*/}
          {/*</li>*/}
      </ul>

    </div>
  );
};

export default Filters;
