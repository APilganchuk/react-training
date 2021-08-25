import React from "react";
import { useContext } from "react";
import ctx from "../../../context/authContext";

export default function UserMenu() {
  const { user, logIn, logOut } = useContext(ctx);

  return (
    <div>
      {user ? (
        <>
          <button type="button" onClick={logIn}>
            Enter
          </button>
          <p>User:{user}</p>
          <button type="button" onClick={logOut}>
            Exit
          </button>
        </>
      ) : (
        <button type="button" onClick={logIn}>
          Enter
        </button>
      )}
    </div>
  );
}
