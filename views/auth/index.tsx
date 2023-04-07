import Head from "next/head";
import { ErrorState, Error, Checkbox, Button, Label, Input, Typography } from "@/components";
import { FieldErrors, UseFormRegister } from "react-hook-form";
import { AuthUserFields } from "@/types";
import Header from "./components/header";

type Props = {
  status: "loading" | "error" | "success" | "idle";
  onSubmit: () => void;
  errors: FieldErrors<AuthUserFields>;
  register: UseFormRegister<AuthUserFields>;
  type: "signin" | "signup";
};

export default function AuthView({ status, onSubmit, errors, register, type }: Props) {
  return (
    <>
      <Head>
        <title>{type === "signin" ? "Sign In" : "Sign Up"}</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="min-h-screen grid items-center bg-banner">
        <form onSubmit={onSubmit} className="max-w-lg w-full bg-primary-50 border border-primary-300 mx-auto">
          <Header type={type} />

          <div className="p-8 bg-primary-100">
            {errors.root && <ErrorState className="mb-4">{errors.root.message}</ErrorState>}

            {type === "signup" && (
              <div className="mb-6">
                <Label htmlFor="email">Your name</Label>
                <Input type="text" {...register("name", {})} />
              </div>
            )}

            <div className="mb-6">
              <Label htmlFor="email">Email address</Label>
              <Input
                type="email"
                {...register("email", {
                  required: "Please enter your email address.",
                  pattern: {
                    value: /\S+@\S+\.\S+/,
                    message: "The entered email address is invalid.",
                  },
                })}
              />
              {errors.email && <Error>{errors.email.message}</Error>}
            </div>
            <div className="mb-6">
              <Label htmlFor="password">Password</Label>
              <Input
                type="password"
                {...register("password", {
                  required: "Please enter your password.",
                  minLength: {
                    value: 8,
                    message: "The password must have at least 8 characters.",
                  },
                })}
              />
              {errors.password && <Error>{errors.password.message}</Error>}
            </div>
            <div className="mb-6">
              <Label>
                <Checkbox defaultChecked {...register("remember")} /> Remember me
              </Label>
            </div>

            <footer className="flex justify-center">
              <Button type="submit" variant="solid" loading={status === "loading"}>
                {type === "signin" ? "Sign In" : "Sign Up"}
              </Button>
            </footer>
          </div>
        </form>
      </main>
    </>
  );
}
