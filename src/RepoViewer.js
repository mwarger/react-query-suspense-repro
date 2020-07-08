import React, { useState } from "react";
export function RepoViewer() {
  const [repoName, setRepoName] = useState("react-query");

  return (
    <div>
      <button onClick={() => setRepoName("swr")}>set to swr</button>
      <button onClick={() => setRepoName("react-query")}>set to tanner</button>

      <p>{repoName}</p>
    </div>
  );
}
