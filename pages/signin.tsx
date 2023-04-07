import { useForm } from "react-hook-form";
import { AuthUserFields } from "@/types";
import useAuthFlow from "@/hooks/use-auth-flow";
import AuthView from "@/views/auth";

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
    <AuthView
      type="signin"
      status={status}
      onSubmit={handleSubmit((data) => mutate(data))}
      register={register}
      errors={errors}
    />
  );
}
