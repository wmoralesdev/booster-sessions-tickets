import React, { useEffect } from 'react';
import { useRouter } from 'next/router';
import { signIn, useSession } from 'next-auth/client';

const SignInPage = () => {
    const router = useRouter();

    const { provider } = router.query;

    const [session, loading] = useSession()

    useEffect(() => {
        if (!loading && !session) 
            void signIn(provider as string);
        if (!loading && session) 
            window.close();
    }, [session, loading])

    return null;
}

export default SignInPage;