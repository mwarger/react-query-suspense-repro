import React from "react";
import ReactDOM from "react-dom";
import { RepoViewer } from "./RepoViewer";

if (process.env.NODE_ENV === "development") {
  const { worker } = require("./mocks/browser");
  worker.start();
}

function App() {
  return (
    <div>
      <React.Suspense fallback="loading...">
        <RepoViewer />
      </React.Suspense>
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
