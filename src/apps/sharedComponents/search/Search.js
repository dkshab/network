import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import {
  GoogleMapsLoader,
  GeoSearch,
  Control,
  Marker,
} from "react-instantsearch-dom-maps";
import {
  InstantSearch,
  SearchBox,
  Configure,
  connectStats,
  connectStateResults,
} from "react-instantsearch-dom";

import algoliasearch from "algoliasearch/lite";

const searchClient = algoliasearch(
  process.env.REACT_APP_ALG0LIA_APP_ID,
  process.env.REACT_APP_ALG0LIA_SEARCH_API_KEY
);
//const index = searchClient.initIndex("companies");

//const URL = "https://ip.nf/me.json";

const Search = () => {
  const { query } = useParams();

  // const [info, setInfo] = useState({ ip: "" });

  // useEffect(() => {
  //   fetch(URL, { method: "get" })
  //     .then((response) => response.json())
  //     .then((data) => {
  //       setInfo({ ...data });
  //     });
  // }, []);

  return (
    <div className="">
      <>
        <InstantSearch searchClient={searchClient} indexName="companies">
          <Configure hitsPerPage={20} />
          <div className="">
            <SearchBox />
          </div>
          <div style={{ height: 500 }}>
            <GoogleMapsLoader apiKey="GOOGLE_MAPS_API_KEY">
              {(google) => (
                <GeoSearch google={google}>
                  {({ hits }) => (
                    <div>
                      <Control />
                      {hits.map((hit) => (
                        <Marker key={hit.objectID} hit={hit} />
                      ))}
                    </div>
                  )}
                </GeoSearch>
              )}
            </GoogleMapsLoader>
          </div>
        </InstantSearch>
      </>
      {/* <div className="">
        <p>Country: {info.ip.country} </p> <p>City: {info.ip.city} </p>
        <p>Latitude: {info.ip.latitude} </p>
        <p>Longitude: {info.ip.longitude} </p>{" "}
        <pre>{JSON.stringify(info, null, 2)}</pre>
      </div> */}
    </div>
  );
};

export default Search;
