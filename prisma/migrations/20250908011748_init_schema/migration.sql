/*
  Warnings:

  - You are about to alter the column `NO_CATEGORIA` on the `TB_CATEGORIA_PRODUTO` table. The data in that column could be lost. The data in that column will be cast from `Text` to `VarChar(100)`.
  - You are about to alter the column `NO_CATEGORIA` on the `TB_CATEGORIA_USUARIO` table. The data in that column could be lost. The data in that column will be cast from `Text` to `VarChar(100)`.
  - You are about to alter the column `NO_CATEGORIA` on the `TB_TAMANHO_PRODUTO` table. The data in that column could be lost. The data in that column will be cast from `Text` to `VarChar(100)`.
  - A unique constraint covering the columns `[NO_CATEGORIA]` on the table `TB_TAMANHO_PRODUTO` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE "public"."TB_CATEGORIA_PRODUTO" ALTER COLUMN "NO_CATEGORIA" SET DATA TYPE VARCHAR(100);

-- AlterTable
ALTER TABLE "public"."TB_CATEGORIA_USUARIO" ALTER COLUMN "NO_CATEGORIA" SET DATA TYPE VARCHAR(100);

-- AlterTable
ALTER TABLE "public"."TB_TAMANHO_PRODUTO" ALTER COLUMN "NO_CATEGORIA" SET DATA TYPE VARCHAR(100);

-- CreateIndex
CREATE UNIQUE INDEX "TB_TAMANHO_PRODUTO_NO_CATEGORIA_key" ON "public"."TB_TAMANHO_PRODUTO"("NO_CATEGORIA");
