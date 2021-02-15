import { render, fireEvent, waitFor } from "@testing-library/react";
import { Provider } from "react-redux";
import App from "../../Containers/App";
import { SearchEngines } from "../../Utils/Enums/SearchEngines";
import store from "../../Redux/Base/ConfigureStore";

const AppWrapper = () => {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  );
};

describe("App common functionalities", () => {
  test("render Google Search results for Hello", async () => {
    selectEngineAndWriteAValueAndPressSubmitFor(SearchEngines.GOOGLE, "Hello");
  });

  test("render Google Search results for Amazing things with React", async () => {
    selectEngineAndWriteAValueAndPressSubmitFor(
      SearchEngines.GOOGLE,
      "Amazing things with React"
    );
  });

  test("render Bing Search results for Hello", async () => {
    selectEngineAndWriteAValueAndPressSubmitFor(SearchEngines.BING, "Hello");
  });

  test("render Bing Search results for Amazing things with React", async () => {
    selectEngineAndWriteAValueAndPressSubmitFor(
      SearchEngines.BING,
      "Amazing things with React"
    );
  });

  test("render Google and Bing Search results for Hello", async () => {
    selectEngineAndWriteAValueAndPressSubmitFor(SearchEngines.BOTH, "Hello");
  });

  test("render Google and Bing Search results for Amazing things with React", async () => {
    selectEngineAndWriteAValueAndPressSubmitFor(
      SearchEngines.BOTH,
      "Amazing things with React"
    );
  });
});

const selectEngineAndWriteAValueAndPressSubmitFor = async (engine, value) => {
  const { getByTestId, getAllByTestId } = render(<AppWrapper />);

  const selectElement = getByTestId("select");
  fireEvent.change(selectElement, { target: { value: engine } });

  const inputElement = getByTestId("search-input");
  fireEvent.change(inputElement, { target: { value } });

  const buttonElement = getByTestId("submit-button");
  fireEvent.click(buttonElement);

  await waitFor(() => {
    const result = getByTestId("result");
    const items = getAllByTestId("item");

    expect(result).toBeInTheDocument();
    expect(items.length).toBeGreaterThan(0);
  });
};
