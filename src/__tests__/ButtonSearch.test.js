import { render, fireEvent } from "@testing-library/react";
import renderer from "react-test-renderer";
import ButtonSearch from "../Components/SearchEngine/ButtonSearch";

describe("Testing ButtonSearch component", () => {
  const onClick = jest.fn();

  const Button = <ButtonSearch onClick={onClick}>Search</ButtonSearch>;
  it("renders correctly", () => {
    const tree = renderer.create(Button).toJSON();
    expect(tree).toMatchSnapshot();
  });

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
