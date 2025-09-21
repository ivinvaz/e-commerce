import { NextRequest, NextResponse } from "next/server";
import { prisma } from '@/lib/prisma';

export async function GET(req:NextRequest){

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
        
        //retorna todos o carrinhos
        const itemEmEstoque = await prisma.tB_QTD_PRODUTO.findMany({
            select: {
                SQ_QTD_PRODUTO: true,
                SQ_PRODUTO: true,
                SQ_TAMANHO_PRODUTO: true
            },
        });

        return NextResponse.json(itemEmEstoque, {status:200})

    }catch(error){
        
        console.error('Erro ao pesquisar item: ', error);
        return NextResponse.json(
            {message:'Erro interno do servidor'},
            {status:500}
        );
    
    }finally{

        await prisma.$disconnect();

    }
}

export async function POST(req: NextRequest){
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

        //recebe os dados da requisicao e transforma em json
        const{ SQ_PRODUTO, SQ_TAMANHO_PRODUTO, QTD_PRODUTO } = await req.json();

        //testa se os dados estão vazios, caso sim gera um erro
        if(!SQ_PRODUTO || !QTD_PRODUTO || !SQ_TAMANHO_PRODUTO){
            return NextResponse.json(
                {message:'Item é obrigatórios'},
                {status:400}
            );
        }

        //testa se o item existe
        const existeProdutoEmEstoque = await prisma.tB_QTD_PRODUTO.findFirst({
            where:{
                SQ_PRODUTO: SQ_PRODUTO
            },
        });

        if(existeProdutoEmEstoque) return NextResponse.json({message:'Item já existe'},{status:400});

        //cria o corpo da requisicao de novo usuario
        const novoProdutoEmEstoque = await prisma.tB_QTD_PRODUTO.create({
            data: {
                SQ_PRODUTO: SQ_PRODUTO,
                QTD_PRODUTO: QTD_PRODUTO,
                SQ_TAMANHO_PRODUTO: SQ_TAMANHO_PRODUTO
            },
        });

        //Retorna a resposta de sucesso (sem a senha, por segurança)
        const {...resultado} = novoProdutoEmEstoque;
        return NextResponse.json(
            {message:'Item em estoque criado com sucesso'},
            {status: 201}
        );

    }catch (error){

        console.error('Erro ao registrar itemEmEstoque: ', error)

        return NextResponse.json(
            {message:'Erro interno do servidor.'},
            {status:500}
        );

    }finally{

        await prisma.$disconnect();

    }
}

