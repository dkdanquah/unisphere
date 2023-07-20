import { withAuth } from "next-auth/middleware";

// More on how NextAuth.js middleware works: https://next-auth.js.org/configuration/nextjs#middleware
export default withAuth({});

export const config = { matcher: ["/new-event", "/new-article", "/profile"] };
