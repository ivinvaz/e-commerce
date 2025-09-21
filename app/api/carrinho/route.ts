import { NextRequest, NextResponse } from "next/server";
import { prisma } from '@/lib/prisma';

export async function GET(req:NextRequest){

    try{

        //simula que o usuário é admin para fazer a req
        const url = new URL(req.url);
        const eAdmin = url.searchParams.get('isAdmin');


        if(eAdmin !== 'true'){
            return NextResponse.json(
                {message:'Acesso negado. Apenas administradores podem realizar a operação.'},
                {status:403}
            );
        }
        
        //retorna todos o carrinhos
        const carrinho = await prisma.tB_CARRINHO.findMany({
            select: {
                SQ_CARRINHO: true,
                SQ_USUARIO: true
            },
        });

        return NextResponse.json(carrinho, {status:200})

    }catch(error){
        
        console.error('Erro ao pesquisar usuário: ', error);
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

        //recebe os dados da requisicao e transforma em json
        const{ EMAIL_USUARIO } = await req.json();

        //testa se os dados estão vazios, caso sim gera um erro
        if(!EMAIL_USUARIO){
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

        if(!existeUsuario) return NextResponse.json({message:'Usuário não existe existe'},{status:400});

        //cria o corpo da requisicao de novo usuario
        const novoCarrinho = await prisma.tB_CARRINHO.create({
            data: {
                SQ_USUARIO: existeUsuario.SQ_USUARIO
            },
        });

        //Retorna a resposta de sucesso (sem a senha, por segurança)
        const {...resultado} = novoCarrinho;
        return NextResponse.json(
            {message:'Carrinho criado com sucesso'},
            {status: 201}
        );

    }catch (error){

        console.error('Erro ao registrar carrinho: ', error)

        return NextResponse.json(
            {message:'Erro interno do servidor.'},
            {status:500}
        );

    }finally{

        await prisma.$disconnect();

    }
}

