import React, { useState } from "react";
import { connect } from "react-redux";
import Results from "../Components/Results";
import Loading from "../Components/Loading";
import SearchEngineSelect from "../Components/SearchEngine/SearchEngineSelect";
import SearchActions from "../Redux/Modules/Search/Actions";
import InputSearch from "../Components/SearchEngine/InputSearch";
import ButtonSearch from "../Components/SearchEngine/ButtonSearch";
import "../App.css";
import { SearchEngines } from "../Utils/Enums/SearchEngines";

const App = (props) => {
  const [searchEngine, setSearchEngine] = useState("");
  const [query, setQuery] = useState("");
  const { loading, error, data } = props;

  const doSearch = () => {
    const { searchGoogle, searchBing, searchAllEngines } = props;
    if (searchEngine === SearchEngines.GOOGLE) {
      searchGoogle(query);
    } else if (searchEngine === SearchEngines.BING) {
      searchBing(query);
    } else if (searchEngine === SearchEngines.BOTH) {
      searchAllEngines(query);
    }
  };

  if (error) return <p>An error has ocurred</p>;
  return (
    <div className="App">
      <h2>Synack app</h2>
      <section className="App-section">
        <SearchEngineSelect
          value={searchEngine}
          onChange={(e) => setSearchEngine(e.target.value)}
        />
        <InputSearch value={query} onChange={(e) => setQuery(e.target.value)} />
      </section>
      <ButtonSearch onClick={doSearch}>Search</ButtonSearch>
      <section className="container">
        {loading ? <Loading /> : <Results data={data} />}
      </section>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    loading: state.search.isLoading,
    error: state.search.error,
    data: state.search.data,
  };
};

const mapDispatchToProps = (dispatch) => ({
  searchGoogle: (request) => {
    dispatch(SearchActions.searchGoogle(request));
  },
  searchBing: (request) => {
    dispatch(SearchActions.searchBing(request));
  },
  searchAllEngines: (request) => {
    dispatch(SearchActions.searchAllEngines(request));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
