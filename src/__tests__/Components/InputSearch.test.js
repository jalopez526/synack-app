import { render, fireEvent } from "@testing-library/react";
import InputSearch from "../../Components/SearchEngine/InputSearch";

describe("Testing InputSearch component", () => {
  const onChange = jest.fn();

  test("render Select component and selecting option", () => {
    const { getByTestId } = render(<InputSearch onChange={onChange} />);
    const element = getByTestId("search-input");

    fireEvent.change(element, { target: { value: "Hello" } });
  
    expect(element).toBeInTheDocument();
    expect(onChange).toHaveBeenCalled();
    expect(element.value).toBe("Hello");
  });
});
