import { expectSaga } from "redux-saga-test-plan";
import SearchActions from "../Redux/Store/Search/Actions";
import { search } from "../Redux/Sagas/Search/SearchSaga";
import { searchOnGoogle } from "../Api/GoogleServices";
import { searchOnBing } from "../Api/BingServices";
import { call } from "redux-saga/effects";

describe("Testing search saga", () => {
  it("should call searchOnGoogle saga and return result", () => {
    const fakeResult = [
      { title: "Google", url: "www.google.com", snippet: "Google Inc" },
    ];

    expectSaga(search, { payload: { searchEngine: "google", query: "Hello" } })
      .put(SearchActions.searchLoading())
      .provide([call(searchOnGoogle, "Hello"), fakeResult])
      .put(SearchActions.searchDone(fakeResult))
      .dispatch(SearchActions.search())
      .run();
  });

  it("should call searchOnBing saga and return result", () => {
    const fakeResult = [
      { title: "Bing", url: "www.bing.com", snippet: "Bing Inc" },
    ];

    expectSaga(search, { payload: { searchEngine: "bing", query: "Hello" } })
      .put(SearchActions.searchLoading())
      .provide([call(searchOnBing, "Hello"), fakeResult])
      .put(SearchActions.searchDone(fakeResult))
      .dispatch(SearchActions.search())
      .run();
  });

  it("should call both search saga and return result", () => {
    const fakeResult = [
      { title: "Bing", url: "www.bing.com", snippet: "Bing Inc" },
      { title: "Google", url: "www.google.com", snippet: "Google Inc" },
    ];

    const payload = { payload: { searchEngine: "both", query: "Hello" } };
    expectSaga(search, payload)
      .put(SearchActions.searchLoading())
      .provide([call(searchOnGoogle, "Hello"), fakeResult])
      .provide([call(searchOnBing, "Hello"), fakeResult])
      .put(SearchActions.searchDone(fakeResult))
      .run();
  });
});
