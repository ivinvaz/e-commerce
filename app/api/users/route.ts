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
        
        //retorna todos o usuários
        const usuarios = await prisma.tB_USUARIO.findMany({
            select: {
                SQ_USUARIO: true,
                NO_USUARIO: true,
                EMAIL_USUARIO: true,
                DT_CRIACAO: true,
                DT_EDITADO: true,
                ST_USUARIO: true,
                TP_USUARIO: true,
            },
        });

        return NextResponse.json(usuarios, {status:200})

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