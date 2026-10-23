import { createAuthClient } from "better-auth/react";

export const authClient = createAuthClient({
  baseURL: process.env.NEXT_PUBLIC_BETTER_AUTH_URL,
});
export const handleGoogleSignIn = async () => {
  const data = await authClient.signIn.social({
    provider: "google",
    callbackURL: callbackUrl
  });
};

export const handleGithubSignIn = async () => {
  const data = await authClient.signIn.social({
    provider: "github", callbackURL: callbackUrl
  });
};



export const { signIn, signUp, signOut, useSession } = createAuthClient();
