import React, { Component } from "react";

// Zaman yad rakhna jab b ham class component ko functional Component ma convert karain gai
// tb yad sa props ko as a argument pass karna ha or this.  wala sara reference ko mita dena hai kyu k ya statless functional component ha

const Like = (props) => {
  let classes = "fa fa-heart";
  if (!props.liked) classes += "-o";
  return (
    <i
      onClick={props.onClick}
      style={{ cursor: "pointer" }}
      className={classes}
      aria-hidden="true"
    ></i>
  );
};

export default Like;
