import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";

import { BrowserRouter } from "react-router-dom";

import { QueryClient, QueryClientProvider } from "react-query";
import { SessionProvider } from "./context/session.tsx";
// import { ReactQueryDevtools } from "react-query/devtools";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      enabled: true,
      refetchInterval: 60000,
    },
  },
});

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <SessionProvider>
        <QueryClientProvider client={queryClient}>
          <App />
          {/* <ReactQueryDevtools/> */}
        </QueryClientProvider>
      </SessionProvider>
    </BrowserRouter>
  </StrictMode>
);
