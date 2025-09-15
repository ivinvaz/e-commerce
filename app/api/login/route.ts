import { NextRequest, NextResponse } from "next/server";
import { prisma } from '@/lib/prisma';
import bcrypt from 'bcryptjs';

export async function POST(req: NextRequest){
    try{
        //recebe o email e senha do request e transforma em json
        const { EMAIL_USUARIO, SENHA_USUARIO } = await req.json();

        //teste se a senha e o email foram preenchidos
        if (!EMAIL_USUARIO || !SENHA_USUARIO){
            return NextResponse.json(
                {message:'Email e senha são obrigatórios'},
                {status: 400}
            );
        }

        //faz uma request para buscar o usuario do email no banco
        const usuario = await prisma.tB_USUARIO.findUnique({
            where:{
                EMAIL_USUARIO: EMAIL_USUARIO,
            },
        });

        //gera um erro caso não haja ocorrencia do email a nenhum user no banco
        if(!usuario){
            return NextResponse.json(
                {message:'Credenciais inválidas'},
                {status: 401}
            )
        }

        //testa se a senha bate com a senha no banco
        const senhaValida = await bcrypt.compare(SENHA_USUARIO, usuario.SENHA_USUARIO);

        //retorna um erro caso a senha não bata
        if(!senhaValida){
            return NextResponse.json(
                {message:'Credenciais inválias'},
                {status:401}
            );
        }

        //retorna sucesso
        const { SENHA_USUARIO: usuarioSenha, ...resultado} = usuario;
        return NextResponse.json({message:'Login bem-sucedido',usuario:resultado},{status:200});
    
    }catch (error){

        console.error('Erro ao fazer login: ',error);
        return NextResponse.json(
            {message:'Erro interno do servidor'},
            {status:500}
        )

    }finally{

        await prisma.$disconnect();

    }
}