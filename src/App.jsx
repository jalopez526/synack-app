import React, { useState } from "react";
import { searchOnGoogle, searchOnBing } from "./services";
import { SearchEngines } from "./enum/SearchEngines";
import { connect } from "react-redux";
import Select from "./components/Select";
import Results from "./components/Results";
import Loading from "./components/Loading";
import "./App.css";

const App = (props) => {
  const [searchEngine, setSearchEngine] = useState("");
  const [query, setQuery] = useState("");
  const { dispatch, loading, error } = props;

  const onChange = (e) => {
    setSearchEngine(e.target.value);
  };

  const doSearch = () => {
    dispatch({ type: "LOADING" });
    if ([SearchEngines.BOTH, SearchEngines.GOOGLE].includes(searchEngine)) {
      searchOnGoogle(query).then((res) => {
        dispatch({ type: "GOOGLE_DATA", payload: res.items });
      });
    }

    if ([SearchEngines.BOTH, SearchEngines.BING].includes(searchEngine)) {
      searchOnBing(query).then((res) => {
        dispatch({ type: "BING_DATA", payload: res.webPages.value });
      });
    } else {
      dispatch({ type: "ERROR" });
    }
  };

  if (error) return <p>An error has ocurred</p>;

  return (
    <div className="App">
      <h2>Synack app</h2>
      <section className="App-section">
        <Select onChange={onChange} searchEngine={searchEngine} />
        <input
          data-testid="search-input"
          aria-label="search-input"
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="control"
          placeholder="What would you like to search?"
        />
      </section>
      <button data-testid="submit" onClick={doSearch} className="button">
        Search
      </button>
      <section className="container">
        {loading ? <Loading /> : <Results searchEngine={searchEngine} />}
      </section>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    loading: state.service.loading,
    error: state.service.error,
  };
};

export default connect(mapStateToProps)(App);
