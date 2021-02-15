import renderer from 'react-test-renderer';
import InputSearch from "../../Components/SearchEngine/InputSearch";

describe("Testing InputSearch snapshot", () => {
  const onChange = jest.fn();

  it('renders correctly', () => {
    const tree = renderer
      .create(<InputSearch onChange={onChange} value="http://www.facebook.com" />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
