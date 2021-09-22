import NextAuth from "next-auth"

declare global {
    interface User {
        id: number;
    }

    module "next-auth" {
        interface Session {
            user: User
        }
    }
}