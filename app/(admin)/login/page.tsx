import React from "react";
import { getCurrentUser } from "@/lib/session";
import { LoginForm } from "@components/LoginForm/loginForm";
import { redirect } from "next/navigation";

// TODO handle csrf: https://authjs.dev/guides/basics/pages?frameworks=next#credentials-sign-in
const LoginPage = async () => {
  const user = await getCurrentUser();
  if (user) {
    redirect("/admin/post-sermon");
  }
  return <LoginForm />;
};

export default LoginPage;
