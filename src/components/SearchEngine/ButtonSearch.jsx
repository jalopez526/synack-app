import React from "react";
import Button from "../Button";

const ButtonSearch = ({ children, ...rest }) => {
  return (
    <Button data-testid="submit-button" className="button" {...rest}>
      {children}
    </Button>
  );
};

export default ButtonSearch;
