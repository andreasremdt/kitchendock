import { Typography } from "@/components";
import Link from "next/link";

type Props = {
  type: "signin" | "signup";
};

export default function Header({ type }: Props) {
  return (
    <header className="border-b border-primary-300 text-center p-8">
      <Typography as="h1" variant="h2" className="mb-4">
        {type === "signin" ? "Sign In" : "Sign Up"}
      </Typography>

      {type === "signin" ? (
        <>
          <Typography>
            Use your email address and password to sign into the app.
            <br />
            Don&apos;t have an account?{" "}
            <Link href="/signup" className="underline">
              Register now
            </Link>{" "}
            for free.
          </Typography>
        </>
      ) : (
        <>
          <Typography>
            Use your email address and password to register a free account.
            <br />
            Already have an account?{" "}
            <Link href="/signin" className="underline">
              Sign in
            </Link>{" "}
            instead.
          </Typography>
        </>
      )}
    </header>
  );
}
