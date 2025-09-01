// app/auth/register/page.js
"use client";

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from "next/link";

export default function RegisterPage() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState(null);
    const router = useRouter();

    async function submitHandler(event) {
        event.preventDefault();
        setMessage(null);

        const response = await fetch('/api/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ name, email, password }),
        });

        const data = await response.json();

        if (response.ok) {
            setMessage({ type: 'success', text: data.message || 'Registro bem-sucedido!' });
            router.push('/auth/login');
        } else {
            setMessage({ type: 'error', text: data.message || 'Erro ao registrar.' });
        }
    }

    return (
        <div>
            <h1>Registrar</h1>
            {message && (
                <p style={{ color: message.type === 'success' ? 'green' : 'red' }}>
                    {message.text}
                </p>
            )}
            <form onSubmit={submitHandler}>
                <div>
                    <label htmlFor="name">Nome</label>
                    <input
                        type="text"
                        id="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                    />
                </div>
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
                <button type="submit">Registrar</button>
                <br/>
                <p>Já tem registro?
                <Link href="/auth/login">
                    <button>
                        Ir para Login
                    </button>
                </Link>
                </p>
            </form>
        </div>
    );
}