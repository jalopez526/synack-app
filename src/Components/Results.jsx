import React from "react";
import Result from "./Result";

const Results = ({ data }) => {
  if (!data) return <></>;

  return (
    <div data-testid="result" className="item-container">
      {data.map((result, index) => (
        <Result
          key={index}
          title={result.title}
          link={result.link}
          secondary={result.snippet}
        />
      ))}
    </div>
  );
};

export default Results;
