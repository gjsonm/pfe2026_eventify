/* @refresh reload */
import { render } from "solid-js/web";
import "solid-devtools";
import "./css/index.css";

import App from "./App";
import { AuthContextProvider } from "./context/AuthContext";

const root = document.getElementById("root");

if (import.meta.env.DEV && !(root instanceof HTMLElement)) {
  throw new Error(
    "Root element not found. Did you forget to add it to your index.html? Or maybe the id attribute got misspelled?",
  );
}

render(() => (
  <AuthContextProvider>
    <App />
  </AuthContextProvider>
), root);
