import React from "react";

const Result = ({ title, link, secondary }) => {
  return (
    <>
      <p data-testid="item">
        <a target="_blank" href={link} rel="noreferrer">
          {title}
        </a>{" "}
        <br />
        <small>{secondary}</small>
      </p>
      <hr className="hr" />
    </>
  );
};

export default Result;
