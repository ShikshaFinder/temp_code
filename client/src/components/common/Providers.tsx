"use client";

import { SnackbarProvider } from "notistack";
import { useState } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { httpBatchLink } from "@trpc/client";

import LoginModal from "../modals/LoginModal";
import { trpc } from "@/app/_trpc/client";

type Props = {
  children: React.ReactNode;
};

const Providers = ({ children }: Props) => {
  const [queryClient] = useState(() => new QueryClient());
  const [trpcClient] = useState(() =>
    trpc.createClient({
      links: [
        httpBatchLink({
          url: `${
            process.env.NEXT_PUBLIC_BACKEND_URI ?? "http://localhost:3000"
          }/api/trpc`,
        }),
      ],
    })
  );
  return (
    <trpc.Provider queryClient={queryClient} client={trpcClient}>
      <QueryClientProvider client={queryClient}>
        <SnackbarProvider
          anchorOrigin={{ horizontal: "right", vertical: "top" }}
        >
          <LoginModal />
          {children}
        </SnackbarProvider>
      </QueryClientProvider>
    </trpc.Provider>
  );
};

export default Providers;
