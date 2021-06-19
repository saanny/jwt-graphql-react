import React from "react";
import { useQuery } from "@apollo/react-hooks";
import { gql } from "@apollo/client";
function App() {
  const { data, loading } = useQuery(gql`
    {
      bye
    }
  `);
  console.log(data);
  return <div>hello</div>;
}

export default App;
