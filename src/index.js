import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import App from "./App";
//  part of sixth step
import { AppContextProvider } from "./ContextApi/ContextApi";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    {/* sixth step */}
    <AppContextProvider>
      <App />
    </AppContextProvider>
  </StrictMode>
);
