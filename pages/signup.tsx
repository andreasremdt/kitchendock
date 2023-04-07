import { useForm } from "react-hook-form";
import { AuthUserFields } from "@/types";
import useAuthFlow from "@/hooks/use-auth-flow";
import AuthView from "@/views/auth";

export default function SignUp() {
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm<AuthUserFields>();

  const { status, mutate } = useAuthFlow("signup", {
    onError(error: Error) {
      setError("root", { message: error.message });
    },
  });

  return (
    <AuthView
      type="signup"
      status={status}
      onSubmit={handleSubmit((data) => mutate(data))}
      register={register}
      errors={errors}
    />
  );
}
