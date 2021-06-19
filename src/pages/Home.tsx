import React from "react";
import { useUsersQuery } from "../generated/graphql";
interface HomeProps {}

export const Home: React.FC<HomeProps> = ({}) => {
  const { data, loading } = useUsersQuery({ fetchPolicy: "network-only" });
  if (!data) {
    return <div>loading....</div>;
  }
  return (
    <div>
      <div>users</div>
      <ul>
        {data.users.map((user) => {
          return (
            <li key={user.id}>
              {user.first_name} {user.last_name}
            </li>
          );
        })}
      </ul>
    </div>
  );
};
