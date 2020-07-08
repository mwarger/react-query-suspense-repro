import React from "react";
import ReactDOM from "react-dom";
import { RepoViewer } from "./RepoViewer";

function App() {
  return (
    <div>
      <RepoViewer />
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
