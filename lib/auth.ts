import { signIn } from "next-auth/react";
import Router from "next/router";
import toast from "react-hot-toast";

export async function login(email: string, password: string) {
  try {
    await signIn("credentials", {
      redirect: false,
      email,
      password,
    });

    Router.push("/protected");
  } catch (ex) {
    toast.error((ex as Error).message);
  }
}

export async function register(email: string, password: string) {
  try {
    const response = await fetch("/api/auth/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    });

    if (response.ok) {
      await login(email, password);
    } else {
      throw new Error(await response.text());
    }
  } catch (ex) {
    toast.error((ex as Error).message);
  }
}
