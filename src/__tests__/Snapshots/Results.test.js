import Results from "../../Components/Results";
import renderer from 'react-test-renderer';

describe("Testing Results snapshot", () => {
  const data = [
    {
      title: "Google",
      link: "www.google.com",
      snippet: "Google Inc.",
    },
    {
      title: "Bing",
      link: "www.bing.com",
      snippet: "Bing Inc.",
    },
  ];

  it('renders correctly', () => {
    const tree = renderer
      .create(<Results data={data} />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
