import NextAuth, { User } from 'next-auth';
import { Awaitable } from 'next-auth/internals/utils';
import Providers from 'next-auth/providers';

export default NextAuth({
    providers: [
        // OAuth authentication providers
        Providers.GitHub({
            clientId: process.env.GITHUB_CLIENT_ID,
            clientSecret: process.env.GITHUB_CLIENT_SECRET,

            profile(profile, tokens): Awaitable<User & { id: string; }> {
                const newProfile = {
                    id: profile.id as string,
                    name: `${profile.name}/${profile.login}` as string,
                    email: profile.email,
                    image: profile.avatar_url as string,
                }

                return newProfile;
            }
        }),
        Providers.GitLab({
            clientId: process.env.GITLAB_CLIENT_ID,
            clientSecret: process.env.GITLAB_CLIENT_SECRET,

            profile(profile, tokens): Awaitable<User & { id: string; }> {
                const newProfile = {
                    id: profile.id as string,
                    name: `${profile.name}/${profile.login}` as string,
                    email: profile.email,
                    image: profile.avatar_url as string,
                }

                return newProfile;
            }
        })
    ],
})