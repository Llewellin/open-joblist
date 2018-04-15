import * as React from "react";
import * as ReactDOM from "react-dom";

import Hello from "./components/Hello";

// Include styles into the app
require("./styles/style.scss");

ReactDOM.render(
    <Hello />,
    document.getElementById("app")
);