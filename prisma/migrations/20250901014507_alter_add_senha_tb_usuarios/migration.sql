/*
  Warnings:

  - Added the required column `SENHA_USUARIO` to the `TB_USUARIO` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "public"."TB_USUARIO" ADD COLUMN     "SENHA_USUARIO" TEXT NOT NULL;
