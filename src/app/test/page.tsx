import { Button } from "@/components/ui/button";
import { createClient } from "@/utils/supabase/client";
import { redirect } from "next/navigation";

export default async function TestPage() {
  const signOut = async () => {
    "use server";
    const supabase = await createClient();

    const { error } = await supabase.auth.signOut();
    if (error) {
      console.error("Error signing out:", error);
    }
    redirect("/sign-in");
  };
  return (
    <form action={signOut}>
      <Button>Sign out</Button>
    </form>
  );
}
