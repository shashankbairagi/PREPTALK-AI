import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import { ClerkProvider } from "@clerk/clerk-react";
// Removed clerkMiddleware as it is not compatible with Vite + React


import "./index.css";
import App from "./App.tsx";
// Removed clerkMiddleware configuration as it is not applicable in Vite + React


import { ToasterProvider } from "./provider/toast-provider.tsx";

// Import your Publishable Key
const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;

if (!PUBLISHABLE_KEY) {
  throw new Error("Missing Publishable Key");
}

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ClerkProvider publishableKey={PUBLISHABLE_KEY} afterSignOutUrl="/">
      <App />
      <ToasterProvider />
    </ClerkProvider>
  </StrictMode>
);
