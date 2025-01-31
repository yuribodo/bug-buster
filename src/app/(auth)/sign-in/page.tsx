import { redirect } from "next/navigation";
import Login from "../login/page";
import { getUser } from "@/queries/user";
export default async function SignInPage() {
  const user = await getUser();
  if (user) {
    return redirect("/login");
  }

  return <Login mode="signin" />;
}
