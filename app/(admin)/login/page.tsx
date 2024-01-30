import { getCurrentUser } from "@/lib/session";
import { LoginForm } from "@components/LoginForm/loginForm";
import { redirect } from "next/navigation";

// TODO handle csrf: https://authjs.dev/guides/basics/pages?frameworks=next#credentials-sign-in
export const LoginPage = async () => {
  const user = await getCurrentUser();
  if (user) {
    redirect("/admin/post-sermon");
  }
  return <LoginForm />;
};

export default LoginPage;
