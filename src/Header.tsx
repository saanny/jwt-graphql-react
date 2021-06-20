import React from "react";
import { Link } from "react-router-dom";
import { setAccessToken } from "./accessToken";
import { useLogoutMutation, useMeQuery } from "./generated/graphql";

interface HeaderProps {}

export const Header: React.FC<HeaderProps> = ({}) => {
  const { data, loading } = useMeQuery({ fetchPolicy: "network-only" });
  const [logout, { client }] = useLogoutMutation();
  let body: any = null;

  if (loading) {
    body = null;
  } else if (data && data.me) {
    body = (
      <div>
        <div>
          <button
            onClick={async () => {
              await logout();
              setAccessToken("");
              await client.resetStore();
            }}
          >
            logout
          </button>
        </div>
        Your logged in as:{data.me.first_name} {data.me.last_name}
      </div>
    );
  } else {
    body = <div>not logged in</div>;
  }
  return (
    <header>
      <div>
        <Link to="/register">register</Link>
      </div>
      <div>
        <Link to="/login">login</Link>
      </div>
      <div>
        <Link to="/">Home</Link>
      </div>

      {body}
    </header>
  );
};
