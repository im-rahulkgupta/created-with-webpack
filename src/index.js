import React from "react";
import reactDom from "react-dom";
import App from "./App";
// import { createRoot } from "react-dom/client";

//What JS understand
// const template = react.createElement(
//   "h1",
//   { className: "h1-tag", htmlFor: "r" },
//   react.createElement("button", { type: "submit" }, "Save")
// );

reactDom.render(<App />, document.getElementById("root"));

//React v18
// const root = createRoot(document.getElementById("root"));
// root.render(<App />);
