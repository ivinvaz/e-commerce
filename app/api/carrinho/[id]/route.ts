import { NextRequest, NextResponse, userAgent } from "next/server";
import { prisma } from '@/lib/prisma';

export async function GET(
    req:NextRequest, {params}:{params: {id:string}}
)
{

    try{

    // Transforma o id da requisição em int
    const idCarrinho = parseInt(params.id, 10);

    // Válida se o id é um número
    if (isNaN(idCarrinho)) {
        return NextResponse.json(
            { message: 'ID do carrinho inválido.' },
            { status: 400 }
        );
    }

    // Busca o CARRINHO pelo seu ID e inclui os itens relacionados em uma única consulta
    const carrinhoComItens = await prisma.tB_CARRINHO.findUnique({
        where: {
            SQ_CARRINHO: idCarrinho, 
        },
        include: {
            itens: {
                include: {
                    produto: true,       
                    tamanhoProduto: true,
                }
            }
        },
    });

    if (!carrinhoComItens) {
        return NextResponse.json(
            { message: 'Carrinho não encontrado' }, 
            { status: 404 }
        );
    }

    return NextResponse.json(carrinhoComItens, { status: 200 });

    }catch(error){

        console.log('Erro ao pesquisar carrinho: ',error);
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

        //transforma o id da requisicao em int
        const idCarrinho = parseInt(params.id,10);

        //válida se o id é número
        if(isNaN(idCarrinho)){
            return NextResponse.json(
                {message:'ID do usuário inválido.'},
                {status:400}
            );
        }

        //cria um transaction para caso a req falhe, ambas falhem em conjunto
        await prisma.$transaction(async(tx) => {
            //deleta os itens primeiro antes de deltar o carrinho
            await tx.tB_ITENS.deleteMany({
                where:{
                    SQ_CARRINHO: idCarrinho,
                },
            })

            //deleta o carrinho
            await tx.tB_CARRINHO.delete({
                where: {
                    SQ_CARRINHO: idCarrinho,
                }
            });
        })

        return NextResponse.json(
            {message: 'Carrinho deletado com sucesso.'},
            {status: 200}
        );
        
    }catch(error){

        if (error instanceof Error && error.message.includes('Record to delete not found')) {
            return NextResponse.json({ message: 'Carrinho não encontrado' }, { status: 404 });
        }

        console.log('Erro ao deletar carrinho: ',error);
        return NextResponse.json(
            {message:'Erro interno do servidor.'},
            {status:500}
        )

    }finally{

        await prisma.$disconnect();

    }
}