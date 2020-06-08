import React from "react";

import "./with-spinner.styles.scss";

const WithSpinner = (WrappedComponent) => {
  const Spinner = ({ isLoading, ...otherProps }) => {
    return isLoading ? (
      <div className="spinner-overlay">
        <div class="spinner-container"></div>
      </div>
    ) : (
      <WrappedComponent {...otherProps} />
    );
  };
  return Spinner;
};
export default WithSpinner;
