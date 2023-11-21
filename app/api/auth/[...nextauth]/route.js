import { connectToDB } from "@utils/database";
import NextAuth from "next-auth/next";
import GoogleProvider from "next-auth/providers/google";

const handler = NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
  ],
  async session({ sesison }) {
    try {
    } catch (error) {
      console.log(error);
    }
  },
  async signIn({ profile }) {
    try {
      await connectToDB();

      //check if a user already exist

      // if not, create a new user and save to DB

      return true;
    } catch (error) {
      console.log(error);
      return false;
    }
  },
});

export { handler as GET, handler as POST };
