import { render, fireEvent } from "@testing-library/react";
import ButtonSearch from "../../Components/SearchEngine/ButtonSearch";

describe("Testing ButtonSearch component", () => {
  const onClick = jest.fn();

  const Button = <ButtonSearch onClick={onClick}>Search</ButtonSearch>;
  it("should render button title", () => {
    const { getByText } = render(Button);
    expect(getByText(/Search/)).toBeInTheDocument();
  });

  it("should call OnClick function", () => {
    const { getByTestId } = render(Button);
    fireEvent.click(getByTestId("submit-button"));
    expect(onClick).toHaveBeenCalled();
  });
});
