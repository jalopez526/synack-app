import renderer from "react-test-renderer";
import ButtonSearch from "../../Components/SearchEngine/ButtonSearch";

describe("Testing ButtonSearch snapshot", () => {
  const onClick = jest.fn();

  const Button = <ButtonSearch onClick={onClick}>Search</ButtonSearch>;
  it("renders correctly", () => {
    const tree = renderer.create(Button).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
