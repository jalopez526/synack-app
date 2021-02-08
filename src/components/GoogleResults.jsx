import React from "react";
import google from "../img/google.png";
import Item from "./Item";
import Logo from "./Logo";
import { connect } from "react-redux";

const GoogleResults = (props) => {
  const { googlePayload: items } = props;
  if (!items) return <></>;

  return (
    <div data-testid="google-results" className="item-container">
      {items.length > 0 && <Logo source={google} />}
      {items.map((item) => (
        <Item
          key={item.link}
          title={item.title}
          link={item.link}
          secondary={item.snippet}
        />
      ))}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    googlePayload: state.service.googlePayload,
  };
};

export default connect(mapStateToProps)(GoogleResults);
