// src/pages/api/auth/[...nextauth].js

import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { PrismaClient } from '@/src/generated/prisma';
import { verifyPassword } from '@/lib/auth';

const prisma = new PrismaClient();

export const authOptions = {
    session: {
        strategy: 'jwt'
    },
    providers: [
        CredentialsProvider({
            name: 'Credentials',
            async authorize(credentials, req) {
                const user = await prisma.tB_USUARIO.findUnique({
                    where: {
                        EMAIL_USUARIO: credentials.email
                    }
                });

                if (!user) {
                    throw new Error('Nenhum usuário encontrado com este e-mail.');
                }

                const isValid = await verifyPassword(credentials.password, user.SENHA_USUARIO);

                if (!isValid) {
                    throw new Error('Senha incorreta.');
                }

                const isAdmin = user.TP_USUARIO === 1;

                return { email: user.EMAIL_USUARIO, isAdmin: isAdmin };
            }
        })
    ],
    callbacks: {
        async jwt({ token, user }) {
            if (user) {
                token.isAdmin = user.isAdmin;
            }
            return token;
        },
        async session({ session, token }) {
            session.user.isAdmin = token.isAdmin;
            return session;
        }
    }
};

export default NextAuth(authOptions);