import React, { useState } from "react";
import { connect } from "react-redux";
import Results from "../Components/Results";
import Loading from "../Components/Loading";
import SearchEngineSelect from "../Components/SearchEngine/SearchEngineSelect";
import SearchActions from "../Redux/Store/Search/Actions";
import Button from "../Components/Button";
import "../App.css";
import InputSearch from "../Components/SearchEngine/InputSearch";
import ButtonSearch from "../Components/SearchEngine/ButtonSearch";

const App = (props) => {
  const [searchEngine, setSearchEngine] = useState("");
  const [query, setQuery] = useState("");
  const { loading, error, data } = props;

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
      <ButtonSearch onClick={() => props.search({ searchEngine, query })}>
        Search
      </ButtonSearch>
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
  search: (request) => {
    dispatch(SearchActions.search(request));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
