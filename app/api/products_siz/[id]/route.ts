import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

// Rota para buscar por ID (GET)
export async function GET(
  req: NextRequest,
  { params }: { params: { id: string } }
) {

    try {

        const productId = parseInt(params.id, 10);

        if (isNaN(productId)) {
            return NextResponse.json(
                { message: 'ID do produto inválido' },
                { status: 400 }
            );
        }

        const product = await prisma.tB_TAMANHO_PRODUTO.findUnique({
            where: {
                SQ_TAMANHO_PRODUTO: productId,
            },
        });

        if (!product) {
            return NextResponse.json(
                { message: 'Produto não encontrado' },
                { status: 404 }
            );
        }

        return NextResponse.json(product, { status: 200 });

    } catch (error) {

        console.error('Erro ao buscar produto:', error);
        return NextResponse.json(
            { message: 'Erro interno do servidor' },
            { status: 500 }
        );

    } finally {

        await prisma.$disconnect();

    }
}

// Rota para atualizar por ID (PUT)
export async function PUT(
  req: NextRequest,
  { params }: { params: { id: string } }
) {

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

            const productId = parseInt(params.id, 10);
            const { NO_CATEGORIA } = await req.json();

        if (isNaN(productId) || (!NO_CATEGORIA)) {
            return NextResponse.json(
                { message: 'ID do produto inválido ou dados incompletos' },
                { status: 400 }
            );
        }

        const updatedProduct = await prisma.tB_TAMANHO_PRODUTO.update({
            where: {
                SQ_TAMANHO_PRODUTO: productId,
            },
            data: {
                NO_CATEGORIA: NO_CATEGORIA || undefined
            },
        });

        return NextResponse.json(
            { message: 'Produto atualizado com sucesso!', product: updatedProduct },
            { status: 200 }
        );

    } catch (error) {

        if (error instanceof Error && error.message.includes('Record to update not found')) {
        return NextResponse.json({ message: 'Produto não encontrado' }, { status: 404 });
        }

        console.error('Erro ao atualizar produto:', error);
        return NextResponse.json(
            { message: 'Erro interno do servidor' },
            { status: 500 }
        );

    } finally {

        await prisma.$disconnect();

    }
}

// Rota para deletar por ID (DELETE)
export async function DELETE(
  req: NextRequest,
  { params }: { params: { id: string } }
) {

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

        const productId = parseInt(params.id, 10);

        if (isNaN(productId)) {
            return NextResponse.json(
                { message: 'ID do produto inválido' },
                { status: 400 }
            );
        }

        await prisma.tB_TAMANHO_PRODUTO.delete({
            where: {
                SQ_TAMANHO_PRODUTO: productId,
            },
        });

        return NextResponse.json(
            { message: 'Produto deletado com sucesso!' },
            { status: 200 }
        );

    } catch (error) {

        if (error instanceof Error && error.message.includes('Record to delete not found')) {
            return NextResponse.json({ message: 'Produto não encontrado' }, { status: 404 });
        }

        console.error('Erro ao deletar produto:', error);
        return NextResponse.json(
            { message: 'Erro interno do servidor' },
            { status: 500 }
            );

  } finally {

        await prisma.$disconnect();

  }
}