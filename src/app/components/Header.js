// app/components/Header.js
"use client";

import { useSession, signOut } from "next-auth/react";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function Header() {
    const { data: session, status } = useSession();
    const router = useRouter();

    const handleSignOut = async () => {
        await signOut();
        router.push("/");
    };

    return (
        <header style={{ display: 'flex', justifyContent: 'space-between', padding: '1rem', borderBottom: '1px solid #ccc' }}>
            <div>
                <Link href="/">
                Home
                </Link>
            </div>
            <nav>
                {status === 'loading' && <p>Carregando...</p>}
                {status === 'authenticated' && (
                <div style={{ display: 'flex', gap: '1rem' }}>
                    <p>Olá, {session.user.email}</p>
                    {session.user.isAdmin && (
                    <Link href="/admin">
                        Área do Admin
                    </Link>
                    )}
                    <button onClick={handleSignOut}>Sair</button>
                </div>
                )}
                {status === 'unauthenticated' && (
                <Link href="/auth/login">
                    Login
                </Link>
                )}
            </nav>
        </header>
    );
}