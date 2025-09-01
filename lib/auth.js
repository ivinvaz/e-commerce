// lib/auth.js

import { hash, compare } from "bcryptjs";

/**
 * Criptografa uma senha para armazenamento seguro.
 * @param {string} password - A senha em texto puro.
 * @returns {Promise<string>} A senha criptografada.
 */

export async function hashPassword(password){
    const hashedPassoword = await hash(password, 12);
    return hashedPassoword;
}

/**
 * Compara uma senha em texto puro com uma senha criptografada.
 * @param {string} password - A senha em texto puro fornecida pelo usuário.
 * @param {string} hashedPassword - A senha criptografada armazenada no banco de dados.
 * @returns {Promise<boolean>} Retorna true se as senhas coincidirem, false caso contrário.
 */

export async function verifyPassword(password,hashedPassoword){
    const isValid = await compare(password,hashedPassoword);
    return isValid;
}