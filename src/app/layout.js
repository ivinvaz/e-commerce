// src/app/layout.js

import "./globals.css";
import Providers from "./providers";
import Header from "./components/Header";

export const metadata = {
  title: "Nome do seu App",
  description: "Descrição do seu App",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <body>
        <Providers>
          <Header />
          <main>
            {children}
          </main>
        </Providers>
      </body>
    </html>
  );
}