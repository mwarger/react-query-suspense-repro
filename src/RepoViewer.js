import React, { useState } from "react";
import { useRepo } from "./useRepo";
export function RepoViewer() {
  const [repoName, setRepoName] = useState("tannerlinsley/react-query");
  const { data } = useRepo(repoName);

  return (
    <div>
      <button onClick={() => setRepoName("vercel/swr")}>set to swr</button>
      <button onClick={() => setRepoName("tannerlinsley/react-query")}>
        set to tanner
      </button>

      <p>{repoName}</p>
      <p>{JSON.stringify(data)}</p>
    </div>
  );
}
