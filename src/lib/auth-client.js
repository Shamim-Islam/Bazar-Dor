
import { createAuthClient } from "better-auth/react";

export const authClient = createAuthClient({
  baseURL: process.env.NEXT_PUBLIC_BETTER_AUTH_URL,
});

export const handleGoogleSignIn = async () => {
  try {
    await authClient.signIn.social({
      provider: "google",
      callbackURL: "/",
    });
  } catch (error) {
    console.error("Google sign-in failed:", error);
  }
};

export const handleGithubSignIn = async () => {
  try {
    await authClient.signIn.social({
      provider: "github",
      callbackURL: "/",
    });
  } catch (error) {
    console.error("GitHub sign-in failed:", error);
  }
};

export const { signIn, signUp, signOut, useSession } = authClient;
