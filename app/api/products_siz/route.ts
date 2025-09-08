// Importa as bibliotecas necessárias
import { NextRequest, NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

// Rota para criar uma nova categoria (POST)
export async function POST(req: NextRequest) {
  try {
    // Simulação de verificação de administrador.
    const url = new URL(req.url);
    const isAdmin = url.searchParams.get('isAdmin');

    if (isAdmin !== 'true') {
      return NextResponse.json(
        { message: 'Acesso negado. Você não é um administrador.' },
        { status: 403 }
      );
    }

    // Recebe os dados do corpo da requisição
    const { NO_CATEGORIA } = await req.json();

    // Validação básica dos dados
    if (!NO_CATEGORIA) {
      return NextResponse.json(
        { message: 'Nome da categoria do produto é obrigatório.' },
        { status: 400 }
      );
    }

    // Cria o novo produto no banco de dados.
    const newProduct = await prisma.tB_TAMANHO_PRODUTO.create({
      data: {
        NO_CATEGORIA
      }
    });

    return NextResponse.json(
      { message: 'Categoria cadastrado com sucesso!', product: newProduct },
      { status: 201 }
    );
  } catch (error) {
    console.error('Erro ao cadastrar produto:', error);
    return NextResponse.json(
      { message: 'Erro interno do servidor' },
      { status: 500 }
    );
  } finally {
    await prisma.$disconnect();
  }
}

// Rota para listar todos os itens da tabela (GET)
export async function GET(req: NextRequest) {
  try {
    // Simulação de verificação de administrador
    const url = new URL(req.url);
    const isAdmin = url.searchParams.get('isAdmin');

    if (isAdmin !== 'true') {
      return NextResponse.json(
        { message: 'Acesso negado. Você não é um administrador.' },
        { status: 403 }
      );
    }

    const products = await prisma.tB_TAMANHO_PRODUTO.findMany();

    return NextResponse.json(products, { status: 200 });
  } catch (error) {
    console.error('Erro ao listar produtos:', error);
    return NextResponse.json(
      { message: 'Erro interno do servidor' },
      { status: 500 }
    );
  } finally {
    await prisma.$disconnect();
  }
}