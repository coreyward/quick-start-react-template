import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";

// oxlint-disable-next-line unicorn/prefer-query-selector -- the id is fixed by index.html
const rootElement = document.getElementById("root");
if (!rootElement) {
  throw new Error("Root element not found");
}

createRoot(rootElement).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
