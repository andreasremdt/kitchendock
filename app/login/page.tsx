import Image from "next/image";
import Form from "@/components/form";

export default function Login() {
  return (
    <div className="z-10 w-full max-w-md overflow-hidden rounded-2xl shadow-xl">
      <header className="flex flex-col items-center justify-center space-y-3 border-b border-gray-200 bg-white/60 px-4 py-6 pt-8 text-center sm:px-16">
        <a href="https://dub.sh">
          <Image src="/logo.png" alt="Logo" className="h-10 w-10 rounded-full" width={20} height={20} />
        </a>
        <h1 className="text-xl font-semibold">Sign In</h1>
        <p className="text-sm text-gray-500">Use your email and password to sign in</p>
      </header>
      <Form type="login" />
    </div>
  );
}
