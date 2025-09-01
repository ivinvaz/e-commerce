//app/providers.js
"use client";

import { SessionProvider } from "next-auth/react";

export default function Porvider({children}){
    return <SessionProvider>{children}</SessionProvider>
}