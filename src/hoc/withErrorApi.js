import React, { useState } from "react";
import ErrorMessage from "../components/ErrorMessage/ErrorMessage";

export const withErrorApi = (Wiew) => {
  return (props) => {
    const [errorApi, setErrorApi] = useState(false);

    return (
      <>
        {errorApi ? (
          <ErrorMessage />
        ) : (
          <Wiew setErrorApi={setErrorApi} {...props} />
        )}
      </>
    );
  };
};
