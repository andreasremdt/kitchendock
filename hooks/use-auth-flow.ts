import { AuthUserFields } from "@/types";
import fetcher from "@/lib/fetcher";
import { useMutation } from "@tanstack/react-query";
import Router from "next/router";

export default function useAuthFlow(type: "signin" | "signup", options = {}) {
  return useMutation((data: AuthUserFields) => fetcher("POST", `/api/auth/${type}`, data), {
    ...options,
    onSuccess() {
      Router.push("/");
    },
  });
}
