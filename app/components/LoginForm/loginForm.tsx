"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { signIn } from "next-auth/react";
import { useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";
import { useFormStatus } from "react-dom";
import { useForm } from "react-hook-form";
import { z } from "zod";
const inputStyle = "rounded-md w-64 h-12 pl-2 leading-4";

const loginSchema = z.object({
  email: z.string(),
  password: z.string().min(1),
});

type LoginSchema = z.infer<typeof loginSchema>;

// TODO handle csrf: https://authjs.dev/guides/basics/pages?frameworks=next#credentials-sign-in
export const LoginForm = () => {
  const [error, setError] = useState<string | null>("");
  const searchParams = useSearchParams();

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<LoginSchema>({
    resolver: zodResolver(loginSchema),
  });
  const router = useRouter();
  const callbackUrl = searchParams.get("callbackUrl");

  const loginUser = async (data: LoginSchema) => {
    const result = await signIn("credentials", {
      email: data.email,
      password: data.password,
      redirect: false,
    });

    if (!result) return;
    const { error, status, ok, url } = result;

    setError(error);

    if (ok) {
      if (callbackUrl) {
        router.replace(callbackUrl);
      } else {
        router.push("/admin/post-sermon");
      }
    }
  };

  return (
    <div className="p-4 h-64">
      <form onSubmit={handleSubmit(loginUser)}>
        <div className="flex flex-col gap-4 w-full justify-center items-center">
          <input
            {...register("email")}
            className={inputStyle}
            placeholder="Email"
            autoComplete="username"
            required
          />
          <input
            {...register("password")}
            type="password"
            className={inputStyle}
            placeholder="Password"
            autoComplete="current-password"
            required
          />
          <LoginButton />
          {error && !isSubmitting && (
            <div className="text-red-600">Incorrect email/password.</div>
          )}
        </div>
      </form>
    </div>
  );
};

const LoginButton = () => {
  const { pending } = useFormStatus();

  return (
    <button
      type="submit"
      disabled={pending}
      className="btn btn-primary mt-4 w-64"
    >
      <div className="relative inline-block">
        Login
        {pending && (
          <div className="absolute ml-4 loading loading-dots loading-sm" />
        )}
      </div>
    </button>
  );
};
