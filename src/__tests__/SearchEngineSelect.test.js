import { render, fireEvent, waitFor } from "@testing-library/react";
import SearchEngineSelect from "../Components/SearchEngine/SearchEngineSelect";
import renderer from 'react-test-renderer';

describe("Testing SearchSelect component", () => {
  const onChange = jest.fn();

  it('renders correctly', () => {
    const tree = renderer
      .create(<SearchEngineSelect onChange={onChange} value="google" />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  test("render Select component and selecting option", async () => {
    const { getByTestId, getAllByTestId } = render(<SearchEngineSelect onChange={onChange} />);
    const element = getByTestId("select");
    fireEvent.change(element, { target: { value: "google" } });

    let options = getAllByTestId("select-option");
    await waitFor(() => {
      expect(element).toBeInTheDocument();
      expect(onChange).toHaveBeenCalled();
      expect(options[1].selected).toBeTruthy();
    })
  });
});
