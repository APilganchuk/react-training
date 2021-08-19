import React from "react";
import { useLocation, useHistory } from "react-router";

export default function Training({ title }) {
  const location = useLocation();
  const history = useHistory();

  const onCLickBack = () => {
    history.push(location.state?.goBack ?? "/books");
  };

  return (
    <div>
      <h1>{title}</h1>

      <button onClick={onCLickBack}>
        {location.state?.label ?? "go back"}
      </button>
    </div>
  );
}
