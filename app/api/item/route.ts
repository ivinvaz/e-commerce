import { NextRequest, NextResponse } from "next/server";
import { prisma } from '@/lib/prisma';

export async function POST(req: NextRequest){
    try{

        //recebe os dados da requisicao e transforma em json
        const{ EMAIL_USUARIO, SQ_PRODUTO, SQ_TAMANHO_PRODUTO, QTD_PRODUTO } = await req.json();

        //testa se os dados estão vazios, caso sim gera um erro
        if(!EMAIL_USUARIO || !SQ_PRODUTO || !SQ_TAMANHO_PRODUTO || !QTD_PRODUTO){
            return NextResponse.json(
                {message:'Usuário é obrigatórios'},
                {status:400}
            );
        }

        //testa se o usuário existe
        const existeUsuario = await prisma.tB_USUARIO.findUnique({
            where:{
                EMAIL_USUARIO: EMAIL_USUARIO,
            },
        });

        //testa se o carrinho existe
        const Carrinho = await prisma.tB_CARRINHO.findUnique({
            where: {
                SQ_USUARIO: existeUsuario.SQ_USUARIO
            },
        });

        //cria um carrinho caso ele não exista
        const novoCarrinho = Carrinho ? Carrinho :  await prisma.tB_CARRINHO.create({
            data: {
                SQ_USUARIO: existeUsuario.SQ_USUARIO
            },
        });

        //cria o corpo da requisicao de novo usuario
        const novoItem = await prisma.tB_ITENS.create({
            data: {
                SQ_CARRINHO: novoCarrinho.SQ_CARRINHO,      
                SQ_PRODUTO: SQ_PRODUTO,       
                SQ_TAMANHO_PRODUTO: SQ_TAMANHO_PRODUTO,
                QTD_PRODUTO: QTD_PRODUTO,      
            },
        });

        const {...resultado} = novoItem;

        return NextResponse.json(
            {message:'Item criado com sucesso'},
            {status: 201}
        );

    }catch (error){

        console.error('Erro ao registrar item: ', error)

        return NextResponse.json(
            {message:'Erro interno do servidor.'},
            {status:500}
        );

    }finally{

        await prisma.$disconnect();

    }
}