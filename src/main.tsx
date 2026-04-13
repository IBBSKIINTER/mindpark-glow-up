import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";


const configuredBase = import.meta.env.BASE_URL.replace(/\/$/, "");
const shouldUseConfiguredBase =
  configuredBase !== "/" &&
  (window.location.pathname === configuredBase ||
    window.location.pathname.startsWith(`${configuredBase}/`));


createRoot(document.getElementById("root")!).render(
  <BrowserRouter basename={shouldUseConfiguredBase ? configuredBase : undefined}>
    <App />
  </BrowserRouter>
);
