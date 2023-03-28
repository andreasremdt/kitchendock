import { FormEvent, useState } from "react";
import { useRouter } from "next/navigation";
import { signIn } from "next-auth/react";
import toast from "react-hot-toast";

export default function useAuthState(type: "login" | "register") {
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  async function login(email: string, password: string) {
    try {
      await signIn("credentials", {
        redirect: false,
        email,
        password,
      });

      router.push("/protected");
    } catch (ex) {
      toast.error((ex as Error).message);
    }
  }

  async function register(email: string, password: string) {
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

  async function handleSubmit(event: FormEvent) {
    event.preventDefault();

    setLoading(true);

    if (type === "login") {
      await login(email, password);
    } else {
      await register(email, password);
    }

    setLoading(false);
  }

  return { loading, email, setEmail, password, setPassword, handleSubmit };
}
