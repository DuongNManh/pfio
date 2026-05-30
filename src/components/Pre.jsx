import React from "react";
function Pre(props) {
  return (
    <div
      id="preloader"
      className={`preloader ${props.load ? "preloader-show" : "preloader-hide"}`}
    ></div>
  );
}

export default Pre;
