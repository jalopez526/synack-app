import { render, fireEvent, waitFor } from "@testing-library/react";
import { Provider } from "react-redux";
import App from "./App";
import Select from "./components/Select";
import { SearchEngines } from "./enum/SearchEngines";
import store from "./store";

const AppWrapper = () => {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  );
};

test("render Select component and selecting option", () => {
  const { getByTestId, getAllByTestId } = render(<Select />);
  const element = getByTestId("select");
  const selectElement = getByTestId("select");
  fireEvent.change(selectElement, { target: { value: "google" } });

  let options = getAllByTestId("select-option");
  
  expect(element).toBeInTheDocument();
  expect(options[1].selected).toBeTruthy();
});

test("render input and setting value", () => {
  const { getByTestId } = render(<AppWrapper />);
  const element = getByTestId("search-input");
  
  const inputElement = getByTestId("search-input");
  fireEvent.change(inputElement, { target: { value: "Hello" } });
  
  expect(element).toBeInTheDocument();
  expect(element.value).toBe("Hello");
});

test("render Google Search results for Hello", async () => {
  selectEngineAndWriteAValueAndPressSubmitFor(SearchEngines.GOOGLE, "Hello")
});

test("render Google Search results for Amazing things with React", async () => {
  selectEngineAndWriteAValueAndPressSubmitFor(SearchEngines.GOOGLE, "Amazing things with React")
});

test("render Bing Search results for Hello", async () => {
  selectEngineAndWriteAValueAndPressSubmitFor(SearchEngines.BING, "Hello")
});

test("render Bing Search results for Amazing things with React", async () => {
  selectEngineAndWriteAValueAndPressSubmitFor(SearchEngines.BING, "Amazing things with React")
});

test("render Google and Bing Search results for Hello", async () => {
  selectEngineAndWriteAValueAndPressSubmitFor(SearchEngines.BOTH, "Hello")
});

test("render Google and Bing Search results for Amazing things with React", async () => {
  selectEngineAndWriteAValueAndPressSubmitFor(SearchEngines.BOTH, "Amazing things with React")
});


const selectEngineAndWriteAValueAndPressSubmitFor = async (engine, value) => {
  const { getByTestId, getAllByTestId } = render(<AppWrapper />);

  const selectElement = getByTestId("select");
  fireEvent.change(selectElement, { target: { value: engine } });

  const inputElement = getByTestId("search-input");
  fireEvent.change(inputElement, { target: { value } });

  const buttonElement = getByTestId("submit");
  fireEvent.click(buttonElement);

  await waitFor(() => {
    const isBoth = engine === SearchEngines.BOTH;

    if(isBoth) {
      const googleResultsComponent = getByTestId(SearchEngines.GOOGLE);
      const bingResultsComponent = getByTestId(SearchEngines.BING);

      expect(googleResultsComponent).toBeInTheDocument();
      expect(bingResultsComponent).toBeInTheDocument();

    } else {
      const googleResultsComponent = getByTestId(EngineDataTestId[engine]);
      expect(googleResultsComponent).toBeInTheDocument();
    }
    const googleResultsItems = getAllByTestId("item");
    expect(googleResultsItems.length).toBeGreaterThan(0);
  });
}

const EngineDataTestId = {
  "google" : "google-results",
  "bing" : "bing-results"
}
