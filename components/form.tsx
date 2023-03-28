"use client";

import LoadingDots from "@/components/loading-dots";
import Link from "next/link";
import useAuthState from "@/hooks/use-auth-state";

type FormProps = {
  type: "login" | "register";
};

export default function Form({ type }: FormProps) {
  const { email, setEmail, password, setPassword, loading, handleSubmit } = useAuthState(type);

  return (
    <form onSubmit={handleSubmit} className="flex flex-col space-y-4 bg-white px-4 py-8 sm:px-16">
      <div>
        <label htmlFor="email" className="block text-xs text-gray-600 uppercase">
          Email Address
        </label>
        <input
          id="email"
          name="email"
          value={email}
          onChange={(event) => setEmail(event.currentTarget.value)}
          type="email"
          placeholder="panic@thedis.co"
          autoComplete="email"
          required
          className="mt-1 block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-black focus:outline-none focus:ring-black sm:text-sm"
        />
      </div>
      <div>
        <label htmlFor="password" className="block text-xs text-gray-600 uppercase">
          Password
        </label>
        <input
          id="password"
          value={password}
          onChange={(event) => setPassword(event.currentTarget.value)}
          name="password"
          type="password"
          required
          className="mt-1 block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-black focus:outline-none focus:ring-black sm:text-sm"
        />
      </div>
      <button
        disabled={loading}
        className={`${
          loading
            ? "cursor-not-allowed border-gray-200 bg-gray-100"
            : "border-black bg-black text-white hover:bg-white hover:text-black"
        } flex h-10 w-full items-center justify-center rounded-md border text-sm transition-all focus:outline-none`}
      >
        {loading ? <LoadingDots color="#808080" /> : <p>{type === "login" ? "Sign In" : "Sign Up"}</p>}
      </button>
      {type === "login" ? (
        <p className="text-center text-sm text-gray-600">
          Don&apos;t have an account?{" "}
          <Link href="/register" className="font-semibold text-gray-800">
            Sign up
          </Link>{" "}
          for free.
        </p>
      ) : (
        <p className="text-center text-sm text-gray-600">
          Already have an account?{" "}
          <Link href="/login" className="font-semibold text-gray-800">
            Sign in
          </Link>{" "}
          instead.
        </p>
      )}
    </form>
  );
}
