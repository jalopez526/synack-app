import { expectSaga } from "redux-saga-test-plan";
import SearchActions from "../../Redux/Modules/Search/Actions";
import { search, searchGoogle, searchBing, searchAllEngines } from "../../Redux/Modules/Search/Saga";
import { searchOnGoogle } from "../../Api/GoogleServices";
import { searchOnBing } from "../../Api/BingServices";

describe("Testing Search Saga", () => {
  const payload = { payload: "Hello" };
  
  it("should call searchGoogle saga and return result", () => {
    const fakeResult = [
      { title: "Google", url: "www.google.com", snippet: "Google Inc" },
    ];

    expectSaga(searchGoogle, payload)
      .put(SearchActions.searchLoading())
      .provide([search("Hello", searchOnGoogle), fakeResult])
      .put(SearchActions.searchDone(fakeResult))
      .dispatch(SearchActions.searchGoogle(fakeResult))
      .run();
  });

  it("should call searchBing saga and return result", () => {
    const fakeResult = [
      { title: "Bing", url: "www.bing.com", snippet: "Bing Inc" },
    ];

    expectSaga(searchBing, payload)
      .put(SearchActions.searchLoading())
      .provide([search("Hello", searchOnBing), fakeResult])
      .put(SearchActions.searchDone(fakeResult))
      .dispatch(SearchActions.searchBing(fakeResult))
      .run();
  });

  it("should call both search saga and return result", () => {
    const fakeResult = [
      { title: "Bing", url: "www.bing.com", snippet: "Bing Inc" },
      { title: "Google", url: "www.google.com", snippet: "Google Inc" },
    ];

    expectSaga(searchAllEngines, payload)
      .put(SearchActions.searchLoading())
      .provide([search("Hello", searchOnGoogle), fakeResult])
      .provide([search("Hello", searchOnBing), fakeResult])
      .put(SearchActions.searchDone(fakeResult))
      .dispatch(SearchActions.searchAllEngines(fakeResult))
      .run();
  });
});
