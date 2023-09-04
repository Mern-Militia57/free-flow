"use client";

import { QueryClient, QueryClientProvider } from "react-query";

const Provider = ({ children }) => {
  const queryClient = new QueryClient({
    defaultQueryObserverOptions: {
      enabled: true,
    },
  });
  return (
    <>
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    </>
  );
};

export default Provider;
