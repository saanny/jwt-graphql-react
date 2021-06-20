import React from "react";
import { useUsersQuery } from "../generated/graphql";
interface HomeProps {}

export const Home: React.FC<HomeProps> = ({}) => {
  const { data, loading, error } = useUsersQuery();

  if (loading) {
    return <div>loading....</div>;
  }
  if (error) {
    return <div>{error.message}</div>;
  }
  if (!data) {
    return <div>loading....</div>;
  }
  return (
    <div>
      <div>users</div>
      <ul>
        {data && data.users
          ? data.users.map((user) => {
              return (
                <li key={user.id}>
                  {user.first_name} {user.last_name}
                </li>
              );
            })
          : null}
      </ul>
    </div>
  );
};
