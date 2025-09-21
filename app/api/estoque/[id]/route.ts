import { NextRequest, NextResponse, userAgent } from "next/server";
import { prisma } from '@/lib/prisma';

export async function GET(
    req:NextRequest, {params}:{params: {id:string}}
)
{ 

    try{

    // Transforma o id da requisição em int
    const idItemEstoque = parseInt(params.id, 10);

    // Válida se o id é um número
    if (isNaN(idItemEstoque)) {
        return NextResponse.json(
            { message: 'ID do estoque inválido.' },
            { status: 400 }
        );
    }

    // Busca o CARRINHO pelo seu ID e inclui os itens relacionados em uma única consulta
    const itensEmEstoque = await prisma.tB_QTD_PRODUTO.findUnique({
        where: {
            SQ_QTD_PRODUTO: idItemEstoque, 
        }
    });

    if (!itensEmEstoque) {
        return NextResponse.json(
            { message: 'Item não encontrado' }, 
            { status: 404 }
        );
    }

    return NextResponse.json(itensEmEstoque, { status: 200 });

    }catch(error){

        console.log('Erro ao pesquisar estoque: ',error);
        return NextResponse.json(
            {message:'Erro interno do servidor.'},
            {status:500}
        )

    }finally{

        await prisma.$disconnect();

    }
}  

export async function PUT(
    req:NextRequest, {params}:{params: {id:string}}
)
{

    try{

        const{ SQ_PRODUTO, SQ_TAMANHO_PRODUTO, QTD_PRODUTO } = await req.json();

        //transforma o id da requisicao em int
        const idItemEstoque = parseInt(params.id,10);

        //válida se o id é número
        if(isNaN(idItemEstoque)){
            return NextResponse.json(
                {message:'ID do item em estoque inválido.'},
                {status:400}
            );
        }

        await prisma.tB_QTD_PRODUTO.update({
            where:{
                SQ_QTD_PRODUTO: idItemEstoque,
            },
            data:{
                SQ_PRODUTO: SQ_PRODUTO, 
                SQ_TAMANHO_PRODUTO: SQ_TAMANHO_PRODUTO,
                QTD_PRODUTO: QTD_PRODUTO
            }
        });

        return NextResponse.json(
            {message: 'Estoque atualizado com sucesso.'},
            {status: 200}
        );
        
    }catch(error){

        if (error instanceof Error && error.message.includes('Record to update not found')) {
            return NextResponse.json({ message: 'Item não encontrado' }, { status: 404 });
        }

        console.log('Erro ao atualizar estoque: ',error);
        return NextResponse.json(
            {message:'Erro interno do servidor.'},
            {status:500}
        )

    }finally{

        await prisma.$disconnect();

    }
}

export async function DELETE(
    req:NextRequest, {params}:{params: {id:string}}
)
{

    try{

        //simula que o item é admin para fazer a req
        const url = new URL(req.url);
        const eAdmin = url.searchParams.get('isAdmin');


        if(eAdmin !== 'true'){
            return NextResponse.json(
                {message:'Acesso negado. Apenas administradores podem realizar a operação.'},
                {status:403}
            );
        }

        //transforma o id da requisicao em int
        const idItemEstoque = parseInt(params.id,10);

        //válida se o id é número
        if(isNaN(idItemEstoque)){
            return NextResponse.json(
                {message:'ID do item em estoque inválido.'},
                {status:400}
            );
        }

        await prisma.tB_QTD_PRODUTO.delete({
            where:{
                SQ_QTD_PRODUTO: idItemEstoque,
            }
        });

        return NextResponse.json(
            {message: 'Item no estoque deletado com sucesso.'},
            {status: 200}
        );
        
    }catch(error){

        if (error instanceof Error && error.message.includes('Record to update not found')) {
            return NextResponse.json({ message: 'Item não encontrado' }, { status: 404 });
        }

        console.log('Erro ao deletar item no estoque: ',error);
        return NextResponse.json(
            {message:'Erro interno do servidor.'},
            {status:500}
        )

    }finally{

        await prisma.$disconnect();

    }
}