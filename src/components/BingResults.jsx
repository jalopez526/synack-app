import React from "react";
import Logo from "./Logo";
import bing from "../img/bing.png";
import Item from "./Item";
import { connect } from "react-redux";

const BingResults = (props) => {
  const { bingPayload: items } = props;
  if (!items) return <></>;

  return (
    <div data-testid="bing-results" className="item-container">
      {items.length > 0 && <Logo source={bing} />}
      {items.map((item) => (
        <Item
          key={item.url}
          title={item.name}
          link={item.url}
          secondary={item.snippet}
        />
      ))}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    bingPayload: state.service.bingPayload,
  };
};

export default connect(mapStateToProps)(BingResults);
