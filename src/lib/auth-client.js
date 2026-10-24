import { createAuthClient } from "better-auth/react";

export const authClient = createAuthClient({
  baseURL: process.env.NEXT_PUBLIC_BETTER_AUTH_URL,
});
export const handleGoogleSignIn = async () => {
  const data = await authClient.signIn.social({
    provider: "google",
    callbackURL: "/",
  });
};

export const handleGithubSignIn = async () => {
  const data = await authClient.signIn.social({
    provider: "github",
    callbackURL: "/",
  });
};

export const { signIn, signUp, signOut, useSession } = authClient;
