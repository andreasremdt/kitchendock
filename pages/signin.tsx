import Head from "next/head";
import Router from "next/router";
import Link from "next/link";
import { useForm } from "react-hook-form";
import Typography from "@/components/typography";
import Input from "@/components/input";
import Label from "@/components/label";
import Button from "@/components/button";
import Error from "@/components/error";
import Checkbox from "@/components/checkbox";
import ErrorState from "@/components/error-state";
import { AuthUserFields } from "@/types";
import useAuthFlow from "@/hooks/use-auth-flow";

export default function SignIn() {
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm<AuthUserFields>();

  const { status, mutate } = useAuthFlow("signin", {
    onError(error: Error) {
      setError("root", { message: error.message });
    },
  });

  return (
    <>
      <Head>
        <title>Sign In</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="min-h-screen grid items-center bg-banner">
        <form
          onSubmit={handleSubmit((data) => mutate(data))}
          className="max-w-lg w-full bg-primary-50 border border-primary-300 mx-auto"
        >
          <header className="border-b border-primary-300 text-center p-8">
            <Typography as="h1" variant="h2" className="mb-4">
              Welcome back
            </Typography>
            <Typography>
              Use your email address and password to sign into the app.
              <br />
              Don&apos;t have an account?{" "}
              <Link href="/signup" className="underline">
                Register now
              </Link>{" "}
              for free.
            </Typography>
          </header>

          <div className="p-8 bg-primary-100">
            {errors.root && <ErrorState className="mb-4">{errors.root.message}</ErrorState>}

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
                Sign In
              </Button>
            </footer>
          </div>
        </form>
      </main>
    </>
  );
}
