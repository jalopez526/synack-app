import React from "react";

const Select = ({ onChange, searchEngine }) => {
  return (
    <select
      data-testid="select"
      onChange={onChange}
      value={searchEngine}
      className="control"
    >
      <option data-testid="select-option">Select a search engine</option>
      <option data-testid="select-option" value="google">
        Google
      </option>
      <option data-testid="select-option" value="bing">
        Bing
      </option>
      <option data-testid="select-option" value="both">
        Google / Bing
      </option>
    </select>
  );
};

export default Select;
