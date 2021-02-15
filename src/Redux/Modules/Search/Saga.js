import { put, call } from "redux-saga/effects";
import SearchActions from "../../Modules/Search/Actions";
import { searchOnGoogle } from "../../../Api/GoogleServices";
import { searchOnBing } from "../../../Api/BingServices";

export function* searchGoogle(request) {
  const data = yield search(request, searchOnGoogle);
  const formatedData = formatResponse(data.items);

  yield put(SearchActions.searchDone(formatedData));
}

export function* searchBing(request) {
  const data = yield search(request, searchOnBing);
  const formatedData = formatResponse(data.webPages.value);

  yield put(SearchActions.searchDone(formatedData));
}

export function* searchAllEngines(request) {
  let googleData = yield search(request, searchOnGoogle);
  let bingData = yield search(request, searchOnBing);

  googleData = googleData.items;
  bingData = bingData.webPages.value;

  const formatedData = [...formatResponse(googleData), ...formatResponse(bingData)]
  yield put(SearchActions.searchDone(formatedData));
}

export function* search(request, serviceFn) {
  yield put(SearchActions.searchLoading());
  const { payload } = request;

  const data = yield call(serviceFn, payload);
  if (data.problem) {
    yield put(SearchActions.searchError(data.problem));
    return;
  } 
  
  return data;
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
