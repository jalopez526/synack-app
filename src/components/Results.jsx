import React from "react";
import { SearchEngines } from "../enum/SearchEngines";
import BingResults from "./BingResults";
import GoogleResults from "./GoogleResults";

const Results = ({ searchEngine }) => {
  return (
    <>
      {[SearchEngines.BOTH, SearchEngines.GOOGLE].includes(searchEngine) && (
        <GoogleResults />
      )}
      {[SearchEngines.BOTH, SearchEngines.BING].includes(searchEngine) && (
        <BingResults />
      )}
    </>
  );
};

export default Results;
