import { NextRequest, NextResponse, userAgent } from "next/server";
import { prisma } from '@/lib/prisma';


export async function DELETE(
    req:NextRequest, {params}:{params: {id:string}}
)
{
    try{
        //transforma o id da requisicao em int
        const idItem = parseInt(params.id,10);

        //válida se o id é número
        if(isNaN(idItem)){
            return NextResponse.json(
                {message:'ID de item inválido.'},
                {status:400}
            );
        }

        //deleta o usuário
        await prisma.tB_ITENS.delete({
            where: {
                SQ_ITENS: idItem,
            },
        });

        return NextResponse.json(
            {message: 'Item deletado com sucesso.'},
            {status: 200}
        );
        
    }catch(error){

        if (error instanceof Error && error.message.includes('Record to delete not found')) {
            return NextResponse.json({ message: 'Item não encontrado' }, { status: 404 });
        }

        console.log('Erro ao deletar Item: ',error);
        return NextResponse.json(
            {message:'Erro interno do servidor.'},
            {status:500}
        )

    }finally{

        await prisma.$disconnect();

    }
}

export async function PUT(
  req: NextRequest,
  { params }: { params: { id: string } }
) {

    try {
        //transforma o id da requisicao em int
        const idItem = parseInt(params.id,10);
        const { SQ_CARRINHO , SQ_PRODUTO , SQ_TAMANHO_PRODUTO, QTD_PRODUTO } = await req.json();

        if (isNaN(idItem) || (!SQ_CARRINHO || !SQ_PRODUTO || !SQ_TAMANHO_PRODUTO || !QTD_PRODUTO)) {
            return NextResponse.json(
                { message: 'ID do produto inválido ou dados incompletos' },
                { status: 400 }
            );
        }

        const updatedProduct = await prisma.tB_ITENS.update({
            where: {
                SQ_ITENS: idItem,
            },
            data: {
                carrinho: SQ_CARRINHO ? { connect: { SQ_CARRINHO: SQ_CARRINHO } } : undefined,
                produto: SQ_PRODUTO ? { connect: { SQ_PRODUTO: SQ_PRODUTO } } : undefined,
                tamanhoProduto: SQ_TAMANHO_PRODUTO ? { connect: { SQ_TAMANHO_PRODUTO: SQ_TAMANHO_PRODUTO } } : undefined,
                QTD_PRODUTO: QTD_PRODUTO || undefined,
            },
        });

        return NextResponse.json(
            { message: 'Item atualizado com sucesso!', product: updatedProduct },
            { status: 200 }
        );

    } catch (error) {

        if (error instanceof Error && error.message.includes('Record to update not found')) {
        return NextResponse.json({ message: 'Item não encontrado' }, { status: 404 });
        }

        console.error('Erro ao atualizar item:', error);
        return NextResponse.json(
            { message: 'Erro interno do servidor' },
            { status: 500 }
        );

    } finally {

        await prisma.$disconnect();

    }
}