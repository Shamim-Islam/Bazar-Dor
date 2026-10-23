
"use client";

import { useRouter } from "next/navigation";
import { toast } from "react-toastify";
import { authClient } from "@/lib/auth-client";

export function useSignOut() {
  const router = useRouter();

  const handleSignOut = async () => {
    try {
      await authClient.signOut({
        fetchOptions: {
          onSuccess: () => {
            toast.success("সাইন আউট সফল !");
            router.push("/signin");
            router.refresh();
          },
          onError: (context) => {
            console.error("Sign out failed:", context.error);
            toast.error("সাইন আউট ব্যর্থ হয়েছে!");
          },
        },
      });
    } catch (error) {
      console.error("Sign out failed:", error);
      toast.error("সাইন আউট ব্যর্থ হয়েছে!");
    }
  };

  return handleSignOut;
}
