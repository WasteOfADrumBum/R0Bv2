import React from "react";
const loadingImg =
'/assets/images/loading.svg'

const Loading = () => (
  <div className="spinner">
    <img src={loadingImg} alt="Loading..." />
  </div>
);

export default Loading;
