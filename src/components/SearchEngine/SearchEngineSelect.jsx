import React from "react";
import Select from "../../Components/Select";
import Option from "../../Components/Option";

const SearchEngineSelect = ({ onChange }) => {
  return (
    <Select onChange={onChange} data-testid="select" className="control">
      <Option data-testid="select-option">Select a search engine</Option>
      <Option data-testid="select-option" value="google">
        Google
      </Option>
      <Option data-testid="select-option" value="bing">
        Bing
      </Option>
      <Option data-testid="select-option" value="both">
        Google / Bing
      </Option>
    </Select>
  );
};

export default SearchEngineSelect;
