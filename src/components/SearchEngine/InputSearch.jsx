import React from "react";
import Input from "../Input";

const InputSearch = ({ value, onChange }) => {
  return (
    <Input
      type="text"
      data-testid="search-input"
      className="control"
      placeholder="What would you like to search?"
      value={value}
      onChange={onChange}
    />
  );
};

export default InputSearch;
