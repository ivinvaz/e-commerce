import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
    // Deletar dados existentes para evitar duplicatas
    await prisma.tB_CATEGORIA_PRODUTO.deleteMany();
    await prisma.tB_CATEGORIA_USUARIO.deleteMany();
    await prisma.tB_TAMANHO_PRODUTO.deleteMany();

    // Dados mockados da tabela de categoria usuario, categoria produto e tamanho produto

    //dados de categoria de produtos
    const categorias_produto = [
        { no_categoria: 'Camiseta' },
        { no_categoria: 'Regata' },
    ];

    for (const categoria of categorias_produto) {
        const categoriaCriada = await prisma.tB_CATEGORIA_PRODUTO.upsert({
        where: { NO_CATEGORIA: categoria.no_categoria },
        update: {},
        create: {
            NO_CATEGORIA: categoria.no_categoria,
        },
        });
    }

    //dados de categoria de usuarios
    const categorias_usuario = [
        { no_categoria: 'Admin' },
        { no_categoria: 'Cliente' },
    ];

    for (const categoria of categorias_usuario) {
        const categoriaCriada = await prisma.tB_CATEGORIA_USUARIO.upsert({
        where: { NO_CATEGORIA: categoria.no_categoria },
        update: {},
        create: {
            NO_CATEGORIA: categoria.no_categoria,
        },
        });
    }

    //dados de categoria de tamanho de produto
    const tamanho_produto = [
        { no_categoria: 'PP' },
        { no_categoria: 'P' },
        { no_categoria: 'M' },
        { no_categoria: 'G' },
        { no_categoria: 'GG' },
        { no_categoria: 'XG' },
    ];

    for (const categoria of tamanho_produto) {
        const categoriaCriada = await prisma.tB_TAMANHO_PRODUTO.upsert({
        where: { NO_CATEGORIA: categoria.no_categoria },
        update: {},
        create: {
            NO_CATEGORIA: categoria.no_categoria,
        },
        });
    }
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });