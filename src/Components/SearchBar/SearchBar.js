import React from "react";
import "./SearchBar.css";
import Reset from "../../images/cached-black-18dp.svg";

function SearchBar(props) {
    return (
        <div className="searchBar">
            <div className="searchButton">
                <input
                    onChange={props.onChange}
                    data-provide="typeahead"
                    data-items="4"
                    type="text"
                    value={props.value}
                    class="search-query"
                    placeholder="search post by name" />
                <span>
                    <button onClick={props.onClick}>
                        <img alt="reset" src={Reset} />
                    </button>
                </span>
            </div>
        </div>
    )
}

export default SearchBar;