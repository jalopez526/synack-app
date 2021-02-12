import { render, fireEvent } from "@testing-library/react";
import InputSearch from "../Components/SearchEngine/InputSearch";
import renderer from 'react-test-renderer';

describe("Testing InputSearch component", () => {
  const onChange = jest.fn();

  it('renders correctly', () => {
    const tree = renderer
      .create(<InputSearch onChange={onChange} value="http://www.facebook.com" />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  test("render Select component and selecting option", () => {
    const { getByTestId } = render(<InputSearch onChange={onChange} />);
    const element = getByTestId("search-input");

    fireEvent.change(element, { target: { value: "Hello" } });
  
    expect(element).toBeInTheDocument();
    expect(onChange).toHaveBeenCalled();
    expect(element.value).toBe("Hello");
  });
});
