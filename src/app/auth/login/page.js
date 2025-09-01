// app/auth/login/page.js
"use client";

import { useState } from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function LoginPage(){
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(null);
    const router = useRouter();

    async function submitHandler(event) {
        event.preventDefault();
        setError(null);


        const result = await signIn("credentials", {
        redirect: false,
        email: email,
        password: password,
        });


        if (result.error) {
        setError(result.error);
        } else {
            router.replace("/");
        }
    }

    return(
    <div>
        <h1>Login</h1>
            <form onSubmit={submitHandler}>
                {error && <p style={{ color: "red" }}>{error}</p>}
            <div>
            <label htmlFor="email">Email</label>
            <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
            />
            </div>
            <div>
            <label htmlFor="password">Senha</label>
            <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
            />
            </div>
            <button type="submit">Entrar</button>
            <br/>
            <Link href="/auth/register">
                <button>
                    Ir para o Registro
                </button>
            </Link>
        </form>
    </div>    
    )
}