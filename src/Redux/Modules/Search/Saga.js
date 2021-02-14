import { put, call } from "redux-saga/effects";
import SearchActions from "../../Modules/Search/Actions";
import { SearchEngines } from "../../../Utils/Enums/SearchEngines";
import { searchOnGoogle } from "../../../Api/GoogleServices";
import { searchOnBing } from "../../../Api/BingServices";

export function* search(request) {
  yield put(SearchActions.searchLoading());
  const { searchEngine, query } = request.payload;

  let response = [];
  if ([SearchEngines.BOTH, SearchEngines.GOOGLE].includes(searchEngine)) {
    const data = yield call(searchOnGoogle, query);
    if (data.problem) {
      yield put(SearchActions.searchError(data.problem));
      return;
    }
    const formatedData = formatResponse(data.items);
    response = [...formatedData];
  }

  if ([SearchEngines.BOTH, SearchEngines.BING].includes(searchEngine)) {
    const data = yield call(searchOnBing, query);
    if (data.problem) {
      yield put(SearchActions.searchError(data.problem));
      return;
    }
    const formatedData = formatResponse(data.webPages.value);

    response = [...response, ...formatedData];
  }

  yield put(SearchActions.searchDone(response));
}

const formatResponse = (data) => {
  return data.map((result) => {
    return {
      title: result.title || result.name,
      link: result.link || result.url,
      snippet: result.snippet,
    };
  });
};
