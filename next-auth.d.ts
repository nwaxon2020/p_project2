import "next-auth";

declare module "next-auth" {
  interface User {
    username?: string;
    profilePic?: string;
  }

  interface Session {
    user: {
      id?: string;
      username?: string;
      profilePic?: string;
    } & DefaultSession["user"];
  }
}